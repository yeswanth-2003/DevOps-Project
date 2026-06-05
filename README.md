# Medical Appointment Booking

This repository contains a demo Hospital Appointment Booking application with separate `backend` and `frontend` projects.

## Contents
- `backend/` — Node.js + Express backend (APIs, Twilio integrations, MongoDB models)
- `frontend/` — React frontend for booking appointments

## Quick Start

Requirements: Node.js (16+), npm, MongoDB (or MongoDB Atlas)

1. Backend

   - Change into the backend folder and install dependencies:

     npm install

   - Create a `.env` in `backend/` with the following variables:

     PORT=5000
     DATABASE_URL=<your-mongo-connection-string>
     JWT_SECRET=<your-jwt-secret>
     TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
     TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
     TWILIO_PHONE_NUMBER=<your-twilio-phone-number>

   - Start the backend:

     npm start

2. Frontend

   - Change into the frontend folder and install dependencies:

     npm install

   - Start the frontend:

     npm start

The frontend expects the backend APIs to be reachable at the configured API base URL (adjust in the frontend code if necessary).

## Notes
- Hardcoded secrets have been removed from the code — use the `.env` variables above.
- This repo was pushed to GitHub after removing detected secrets (Twilio credentials).

## Project Structure

Root
├── backend/
└── frontend/

## Contributing
Feel free to open issues or PRs. Follow standard GitHub flow.

---
Author: yeswanth-2003