export type IncidentStatus = 'open' | 'in_progress' | 'closed';
export type IncidentType = 'fire'|'flood'|'road_hazard'|'power_outage'|'gas_leak'|'security'|'other';
export interface Incident {
  id: string;
  created_at: string;
  type: IncidentType;
  description: string;
  address: string;
  lat: number | null;
  lng: number | null;
  status: IncidentStatus;
  reporter_phone: string | null;
}
export interface IncidentUpdate {
  id: string;
  incident_id: string;
  message: string;
  created_at: string;
  author_name: string;
}
