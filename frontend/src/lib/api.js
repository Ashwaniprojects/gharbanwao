import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API });

export const fetchCalculatorConfig = () => api.get("/config/calculator").then((r) => r.data);
export const fetchProjects = (params = {}) => api.get("/projects", { params }).then((r) => r.data);
export const fetchProjectStats = () => api.get("/projects/stats").then((r) => r.data);
export const createLead = (payload) => api.post("/leads", payload).then((r) => r.data);
export const createRegistration = (payload) => api.post("/registrations", payload).then((r) => r.data);
