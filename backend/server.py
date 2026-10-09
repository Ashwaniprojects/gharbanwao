from fastapi import FastAPI, APIRouter, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import json
import random
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Ghar Banwao API")
api_router = APIRouter(prefix="/api")

CONFIG_PATH = ROOT_DIR / 'calculator_config.json'

LOCALITIES = [
    ("Gomti Nagar", "Lucknow", 26.8565, 81.0048), ("Indira Nagar", "Lucknow", 26.8783, 80.9859), ("Jankipuram", "Lucknow", 26.9123, 80.9315),
    ("Aliganj", "Lucknow", 26.8890, 80.9312), ("Hazratganj", "Lucknow", 26.8482, 80.9403), ("Alambagh", "Lucknow", 26.8206, 80.8894),
    ("Vikas Nagar", "Lucknow", 26.9037, 80.9219), ("Mahanagar", "Lucknow", 26.8763, 80.9476), ("Sushant Golf City", "Lucknow", 26.7995, 81.0243),
    ("Chinhat", "Lucknow", 26.8781, 81.0398), ("Rajajipuram", "Lucknow", 26.8192, 80.8783), ("Aashiana", "Lucknow", 26.8126, 80.9087),
    ("Telibagh", "Lucknow", 26.7779, 80.9158), ("Kanpur Road", "Lucknow", 26.7963, 80.8700), ("Vrindavan Yojana", "Lucknow", 26.7523, 80.9476),
    ("Sigra", "Varanasi", 25.3049, 82.9870), ("Lanka", "Varanasi", 25.2667, 83.0096), ("Kakadeo", "Kanpur", 26.4756, 80.3426), ("Swaroop Nagar", "Kanpur", 26.4851, 80.3238),
]
PACKAGES = ["Silver", "Gold", "Platinum"]
FAMILIES = ["Verma", "Srivastava", "Singh", "Mishra", "Tiwari", "Gupta", "Yadav", "Khan", "Pandey", "Agarwal", "Shukla", "Dubey", "Rastogi", "Chaturvedi", "Saxena", "Dixit", "Bajpai", "Awasthi"]
QUOTES = [
    "Photos every Monday and Thursday. 8 months, no surprise cost.",
    "Steel brand was written in the quote. Same brand came to site.",
    "Delayed by 9 days. They told us on day 1 of the delay, not after.",
    "Payment only after each stage was signed off. Pehli baar aisa dekha.",
    "One WhatsApp number for everything. Kabhi call unanswered nahi gaya.",
    "Handover checklist had 150 items. They showed us every one.",
    "Papa roz site jaate the. Engineer har baar mil jaata tha.",
    "Quote mein jo likha tha, wahi bana. Not one rupee extra.",
]
STAGES = ["Design & Approval", "Foundation", "Structure", "Brickwork", "Finishing", "Handover"]


def build_projects():
    rng = random.Random(7)
    projects = []
    for i in range(1, 298):
        loc, city, clat, clng = rng.choice(LOCALITIES)
        width = rng.choice([20, 25, 30, 30, 35, 40, 50])
        depth = rng.choice([40, 45, 50, 50, 60, 70, 80])
        plot = width * depth
        built = int(plot * rng.choice([1.2, 1.5, 1.8, 2.0]))
        status = "ongoing" if i > 260 else "handed_over"
        year = rng.randint(2018, 2026) if status == "handed_over" else 2026
        projects.append({
            "id": str(uuid.uuid4()),
            "gb_id": f"GB-{i:03d}",
            "locality": loc,
            "city": city,
            "plot": f"{width} × {depth} FT",
            "size_sqft": built,
            "package": rng.choice(PACKAGES),
            "status": status,
            "handover": f"{rng.choice(['Jan','Mar','May','Jul','Sep','Nov'])} {year}" if status == "handed_over" else None,
            "stage": rng.randint(1, 5) if status == "ongoing" else 6,
            "stage_name": STAGES[rng.randint(0, 4)] if status == "ongoing" else "Handed over",
            "owner": f"{rng.choice(FAMILIES)} family",
            "quote": rng.choice(QUOTES),
            "lat": round(clat + rng.uniform(-0.012, 0.012), 6),
            "lng": round(clng + rng.uniform(-0.012, 0.012), 6),
        })
    return projects


class Project(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    gb_id: str
    locality: str
    city: str
    plot: str
    size_sqft: int
    package: str
    status: str
    handover: Optional[str] = None
    stage: int
    stage_name: str
    owner: str
    quote: str
    lat: float
    lng: float


class LeadCreate(BaseModel):
    name: str
    phone: str
    whatsapp: Optional[str] = None
    whatsapp_ok: bool = True
    city: Optional[str] = None
    locality: Optional[str] = None
    plot_size: Optional[str] = None
    timeline: Optional[str] = None
    package_interest: Optional[str] = None
    source: str = "consultation_form"
    estimate: Optional[dict] = None


class Lead(LeadCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class RegistrationCreate(BaseModel):
    type: str  # vendor | channel_partner | hiring
    name: str
    phone: str
    email: Optional[str] = None
    city: Optional[str] = None
    company_name: Optional[str] = None
    category: Optional[str] = None
    experience_years: Optional[str] = None
    role: Optional[str] = None
    message: Optional[str] = None


class Registration(RegistrationCreate):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "Ghar Banwao API", "status": "ok"}


@api_router.get("/config/calculator")
async def calculator_config():
    with open(CONFIG_PATH) as f:
        return json.load(f)


@api_router.get("/projects", response_model=List[Project])
async def list_projects(
    status: Optional[str] = None,
    locality: Optional[str] = None,
    package: Optional[str] = None,
    q: Optional[str] = None,
    limit: int = Query(500, le=500),
):
    query = {}
    if status and status != "all":
        query["status"] = status
    if locality and locality != "all":
        query["locality"] = locality
    if package and package != "all":
        query["package"] = package
    if q:
        query["$or"] = [
            {"gb_id": {"$regex": q, "$options": "i"}},
            {"locality": {"$regex": q, "$options": "i"}},
            {"package": {"$regex": q, "$options": "i"}},
            {"city": {"$regex": q, "$options": "i"}},
        ]
    docs = await db.projects.find(query, {"_id": 0}).sort("gb_id", 1).to_list(limit)
    return docs


@api_router.get("/projects/stats")
async def project_stats():
    handed = await db.projects.count_documents({"status": "handed_over"})
    ongoing = await db.projects.count_documents({"status": "ongoing"})
    localities = await db.projects.distinct("locality")
    return {"handed_over": handed, "ongoing": ongoing, "total": handed + ongoing, "localities": sorted(localities)}


@api_router.get("/projects/{gb_id}", response_model=Project)
async def get_project(gb_id: str):
    doc = await db.projects.find_one({"gb_id": gb_id.upper()}, {"_id": 0})
    if not doc:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Project not found")
    return doc


@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    if not lead.whatsapp:
        lead.whatsapp = lead.phone
    await db.leads.insert_one(lead.model_dump())
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads():
    return await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)


@api_router.post("/registrations", response_model=Registration)
async def create_registration(payload: RegistrationCreate):
    registration = Registration(**payload.model_dump())
    await db.registrations.insert_one(registration.model_dump())
    return registration


@api_router.get("/registrations", response_model=List[Registration])
async def list_registrations(type: Optional[str] = None):
    query = {"type": type} if type else {}
    return await db.registrations.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("startup")
async def seed_projects():
    sample = await db.projects.find_one({})
    if sample is None or "lat" not in sample:
        await db.projects.delete_many({})
        await db.projects.insert_many(build_projects())
        logger.info("Seeded 297 projects")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
