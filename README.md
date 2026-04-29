# Risk Treatment Planner (Frontend)

## Overview
A modern, AI-powered risk management web application built using React. This project demonstrates full-stack integration readiness with a **mock fallback** so the frontend remains fully functional even when the backend is unavailable.

## Developer
**Amit Parashuram Nalatawad**  
Full Stack Developer 3 (Frontend)
Campuspe

## Tech Stack
- React 18 (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Recharts

## Key Features

### Authentication
- Login with JWT token handling
- Protected routes with access control
- Mock login available when backend is down

### Risk Management (CRUD)
- Create, view, update, and delete risks
- Detailed risk view with status and metadata
- Delete confirmation dialog

### AI Integration (Mock + Ready)
- AI panel in the Detail page
- Calls backend endpoints:
  - `POST /describe`
  - `POST /recommend`
- Works with mock AI responses when backend is unavailable

### Dashboard & Analytics
- Dashboard KPI cards:
  - Total risks
  - Active risks
  - Closed risks
  - High priority risks (when available via `/stats`)
- Analytics page using Recharts:
  - Bar chart (risks by status)
  - Pie chart (distribution)
  - Line chart (risks over time)

### Search, Filters, Pagination, Sorting
- Debounced search (~300ms)
- Status dropdown filtering
- Date range filtering (`startDate`, `endDate`)
- URL query parameter persistence for filters
- Pagination controls + sort controls

### Export
- CSV export from List page
- Uses backend `GET /export` when available
- Generates a CSV fallback from currently loaded mock/filtered data when export API fails

### UX / Reliability
- Loaders for all API-driven pages
- Global error handling (ErrorBanner + Toast)
- Responsive UI (mobile/tablet/desktop)
- Clean, reusable component architecture (`Card`, `Button`, `Loader`, `EmptyState`, etc.)

## Routes
- `/` → Login
- `/dashboard` → Dashboard
- `/list` → Risk List
- `/create` → Create Risk
- `/edit/:id` → Edit Risk
- `/detail/:id` → Risk Detail (AI panel)
- `/analytics` → Analytics

## Mock Fallback Mode
API calls use Axios with `http://localhost:8080` as the base URL. If the backend is unreachable, the app automatically falls back to in-memory mock data for:
- Auth (`POST /auth/login`)
- Risk list + pagination (`GET /all`)
- Single risk (`GET /:id`)
- CRUD (`POST /create`, `PUT /:id`, `DELETE /:id`)
- Dashboard stats (`GET /stats`)
- CSV export (`GET /export`)
- AI endpoints (`POST /describe`, `POST /recommend`)

## Run the Project
```bash
npm run dev
```

## Development Timeline 

### Day 1 – Project Setup
- Initialized React project using Vite
- Added Tailwind CSS, Axios, React Router DOM
- Created initial project structure (pages/components/services/context)
- Setup routing skeleton (Login + Dashboard base)

### Day 2 – Authentication & API Setup
- Implemented Login page UI
- Integrated Axios API layer with JWT token handling
- Added protected routing (redirect to login if token missing)

### Day 3 – Core CRUD Features
- Built Risk List UI
- Connected `GET /all` for risk retrieval
- Implemented Create Risk page/form
- Connected `POST /create` and local navigation flow

### Day 4 – CRUD Enhancement
- Implemented Edit Risk page (`/edit/:id`)
- Implemented Delete flow with confirmation
- Added Risk Detail page (`/detail/:id`)
- Ensured navigation between List, Create, Edit, Detail

### Day 5 – Dashboard Development
- Integrated `GET /stats`
- Built KPI cards:
  - Total risks
  - Active risks
  - Closed risks
- Improved UI using reusable components

### Day 6 – Analytics & Charts
- Created Analytics page (`/analytics`)
- Implemented Recharts charts:
  - Bar chart
  - Pie chart
  - Line chart
- Connected charts to `GET /stats` (mock compatible)

### Day 7 – AI Integration
- Added AI panel inside Risk Detail page
- Implemented calls to:
  - `POST /describe`
  - `POST /recommend`
- Displayed AI-generated description + recommendations
- Added loader, retry, and error handling (mock compatible)

### Day 8 – Search & Filtering
- Implemented debounced search on List page (~300ms)
- Added status dropdown filter
- Added date range filter
- Synced filters with URL query params

### Day 9 – Pagination & Sorting
- Added pagination + page size controls
- Implemented sorting controls (name, status, date)
- Wired List requests with API query parameters:
  - `page`, `size`, `sortBy`, `sortDir`
- Works in both real backend and mock fallback mode

### Day 10 – Export & Error Handling
- Added CSV export button on List page
- Calls `GET /export` and downloads CSV via Blob
- Implemented graceful fallback CSV generation when export fails
- Improved loaders and global error handling consistency

### Day 11 – Stability & Validation
- Verified full app flow across all routes
- Improved form validation for Create/Edit
- Normalized API response handling across mock/real modes

### Day 12 – Final Testing & Optimization
- Fixed edge cases and ensured mock + real compatibility
- Removed debug logs and cleaned up codebase
- Confirmed build stability (`npm run build`)
