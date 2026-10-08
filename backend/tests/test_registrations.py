"""Tests for /api/registrations endpoint (vendor/channel_partner/hiring)."""
import os
import pytest
import requests
from pathlib import Path

FRONTEND_ENV = Path('/app/frontend/.env')
for line in FRONTEND_ENV.read_text().splitlines():
    if line.startswith('REACT_APP_BACKEND_URL='):
        os.environ['REACT_APP_BACKEND_URL'] = line.split('=', 1)[1].strip()

BASE_URL = os.environ['REACT_APP_BACKEND_URL'].rstrip('/')


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


class TestRegistrations:
    def test_create_vendor(self, api):
        payload = {"type": "vendor", "name": "TEST_Vendor", "phone": "9999999991",
                   "city": "Lucknow", "company_name": "TEST Supplier", "category": "Steel & TMT",
                   "message": "500 bags/month"}
        r = api.post(f"{BASE_URL}/api/registrations", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["type"] == "vendor"
        assert d["name"] == "TEST_Vendor"
        assert d["category"] == "Steel & TMT"
        assert d["id"] and d["created_at"]

    def test_create_channel_partner(self, api):
        payload = {"type": "channel_partner", "name": "TEST_CP", "phone": "9999999992",
                   "city": "Kanpur", "experience_years": "3–5 years", "message": "Gomti Nagar"}
        r = api.post(f"{BASE_URL}/api/registrations", json=payload, timeout=30)
        assert r.status_code == 200
        d = r.json()
        assert d["type"] == "channel_partner"
        assert d["experience_years"] == "3–5 years"

    def test_create_hiring(self, api):
        payload = {"type": "hiring", "name": "TEST_Hire", "phone": "9999999993",
                   "email": "test@example.com", "city": "Varanasi", "role": "Site Engineer",
                   "message": "5 yrs exp"}
        r = api.post(f"{BASE_URL}/api/registrations", json=payload, timeout=30)
        assert r.status_code == 200
        d = r.json()
        assert d["type"] == "hiring"
        assert d["role"] == "Site Engineer"
        assert d["email"] == "test@example.com"

    def test_list_filter_by_type_vendor(self, api):
        r = api.get(f"{BASE_URL}/api/registrations?type=vendor", timeout=30)
        assert r.status_code == 200
        items = r.json()
        assert all(x["type"] == "vendor" for x in items)
        assert any(x["name"] == "TEST_Vendor" for x in items)

    def test_list_filter_by_type_channel_partner(self, api):
        r = api.get(f"{BASE_URL}/api/registrations?type=channel_partner", timeout=30)
        assert r.status_code == 200
        items = r.json()
        assert all(x["type"] == "channel_partner" for x in items)
        assert any(x["name"] == "TEST_CP" for x in items)

    def test_list_filter_by_type_hiring(self, api):
        r = api.get(f"{BASE_URL}/api/registrations?type=hiring", timeout=30)
        assert r.status_code == 200
        items = r.json()
        assert all(x["type"] == "hiring" for x in items)
        assert any(x["name"] == "TEST_Hire" for x in items)

    def test_list_all_no_filter(self, api):
        r = api.get(f"{BASE_URL}/api/registrations", timeout=30)
        assert r.status_code == 200
        items = r.json()
        assert len(items) >= 3

    def test_missing_required_name(self, api):
        r = api.post(f"{BASE_URL}/api/registrations",
                     json={"type": "vendor", "phone": "9000000000"}, timeout=30)
        assert r.status_code == 422


class TestProjectsLatLng:
    """Verify project model migrated from x/y to lat/lng."""
    def test_projects_have_lat_lng(self):
        r = requests.get(f"{BASE_URL}/api/projects?limit=5", timeout=30)
        assert r.status_code == 200
        for p in r.json():
            assert "lat" in p and "lng" in p
            assert isinstance(p["lat"], (int, float))
            assert 24.0 < p["lat"] < 28.0  # UP range
            assert 79.0 < p["lng"] < 84.0
