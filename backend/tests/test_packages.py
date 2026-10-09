"""Test package filter rename Silver/Gold/Platinum"""
import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://calculator-demo-11.preview.emergentagent.com').rstrip('/')


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200


@pytest.mark.parametrize("pkg", ["Silver", "Gold", "Platinum"])
def test_package_filter_returns_only_matching(api, pkg):
    r = api.get(f"{BASE_URL}/api/projects", params={"package": pkg, "limit": 500})
    assert r.status_code == 200
    data = r.json()
    assert len(data) > 0, f"No projects for {pkg}"
    for p in data:
        assert p["package"] == pkg, f"Got {p['package']} when filtering {pkg}"


@pytest.mark.parametrize("pkg", ["Essential", "Signature", "Premium"])
def test_old_package_names_return_zero(api, pkg):
    r = api.get(f"{BASE_URL}/api/projects", params={"package": pkg, "limit": 500})
    assert r.status_code == 200
    assert len(r.json()) == 0, f"Old pkg name {pkg} still returning data"


def test_stats_total(api):
    r = api.get(f"{BASE_URL}/api/projects/stats")
    assert r.status_code == 200
    j = r.json()
    assert j["total"] > 0
