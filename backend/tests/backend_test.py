"""Ghar Banwao backend API tests."""
import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).resolve().parents[1] / '.env')
# Prefer frontend .env public URL (since REACT_APP_BACKEND_URL is the public ingress)
FRONTEND_ENV = Path('/app/frontend/.env')
if FRONTEND_ENV.exists():
    for line in FRONTEND_ENV.read_text().splitlines():
        if line.startswith('REACT_APP_BACKEND_URL='):
            os.environ['REACT_APP_BACKEND_URL'] = line.split('=', 1)[1].strip()

BASE_URL = os.environ['REACT_APP_BACKEND_URL'].rstrip('/')


@pytest.fixture(scope="session")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Calculator config ----------
class TestCalculatorConfig:
    def test_config_shape(self, api):
        r = api.get(f"{BASE_URL}/api/config/calculator", timeout=30)
        assert r.status_code == 200
        data = r.json()
        assert "cities" in data and "Lucknow" in data["cities"] and "Noida" in data["cities"]
        assert data["city_multipliers"]["Noida"] == 1.18
        assert len(data["resources"]) == 13
        assert len(data["phases"]) == 11


# ---------- Projects ----------
class TestProjects:
    def test_list_all_297(self, api):
        r = api.get(f"{BASE_URL}/api/projects", timeout=30)
        assert r.status_code == 200
        projects = r.json()
        assert len(projects) == 297

    def test_filter_ongoing_37(self, api):
        r = api.get(f"{BASE_URL}/api/projects?status=ongoing", timeout=30)
        assert r.status_code == 200
        projects = r.json()
        assert len(projects) == 37
        assert all(p["status"] == "ongoing" for p in projects)

    def test_filter_locality_gomti_nagar(self, api):
        r = api.get(f"{BASE_URL}/api/projects?locality=Gomti Nagar", timeout=30)
        assert r.status_code == 200
        for p in r.json():
            assert p["locality"] == "Gomti Nagar"

    def test_filter_package_signature(self, api):
        r = api.get(f"{BASE_URL}/api/projects?package=Signature", timeout=30)
        assert r.status_code == 200
        for p in r.json():
            assert p["package"] == "Signature"

    def test_search_q(self, api):
        r = api.get(f"{BASE_URL}/api/projects?q=GB-229", timeout=30)
        assert r.status_code == 200
        data = r.json()
        assert any(p["gb_id"] == "GB-229" for p in data)

    def test_stats(self, api):
        r = api.get(f"{BASE_URL}/api/projects/stats", timeout=30)
        assert r.status_code == 200
        d = r.json()
        assert d["handed_over"] == 260
        assert d["ongoing"] == 37
        assert d["total"] == 297
        assert isinstance(d["localities"], list) and len(d["localities"]) > 0

    def test_get_single(self, api):
        r = api.get(f"{BASE_URL}/api/projects/GB-229", timeout=30)
        assert r.status_code == 200
        assert r.json()["gb_id"] == "GB-229"

    def test_get_missing_404(self, api):
        r = api.get(f"{BASE_URL}/api/projects/GB-999", timeout=30)
        assert r.status_code == 404


# ---------- Leads ----------
class TestLeads:
    def test_create_consultation_lead(self, api):
        payload = {
            "name": "TEST_Rahul",
            "phone": "9876543210",
            "source": "consultation_form",
            "city": "Lucknow",
            "timeline": "3-6 months",
        }
        r = api.post(f"{BASE_URL}/api/leads", json=payload, timeout=30)
        assert r.status_code == 200
        lead = r.json()
        assert lead["id"] and lead["created_at"]
        assert lead["whatsapp"] == payload["phone"]  # defaults to phone
        assert lead["source"] == "consultation_form"

    def test_create_share_estimate_lead(self, api):
        payload = {
            "name": "TEST_Priya",
            "phone": "9123456780",
            "source": "share_estimate",
            "estimate": {"area": 1500, "city": "Lucknow", "total": 2476500},
        }
        r = api.post(f"{BASE_URL}/api/leads", json=payload, timeout=30)
        assert r.status_code == 200
        lead = r.json()
        assert lead["source"] == "share_estimate"
        assert lead["estimate"]["total"] == 2476500

    def test_list_leads_contains_new(self, api):
        r = api.get(f"{BASE_URL}/api/leads", timeout=30)
        assert r.status_code == 200
        leads = r.json()
        assert any(l["name"] == "TEST_Rahul" for l in leads)
        assert any(l.get("estimate", {}).get("total") == 2476500 for l in leads)

    def test_missing_name_422(self, api):
        r = api.post(f"{BASE_URL}/api/leads", json={"phone": "9999999999"}, timeout=30)
        assert r.status_code == 422

    def test_missing_phone_422(self, api):
        r = api.post(f"{BASE_URL}/api/leads", json={"name": "X"}, timeout=30)
        assert r.status_code == 422
