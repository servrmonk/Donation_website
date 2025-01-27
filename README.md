Donation Website

Overview

This is a donation website built with a MERN stack (MongoDB, Express, React, Node.js). The platform allows users to make secure donations via Stripe and features user-friendly navigation, form validation, and toast notifications.

Features

Secure Donations: Integrated with Stripe for secure payment processing.

User-Friendly Interface: Built using React for smooth navigation and responsive design.

Form Validation: Validates user inputs to ensure accuracy and completeness.

Notifications: Real-time feedback using React Toastify for better user experience.

API Integration: Axios is used for seamless communication between the frontend and backend.

Tech Stack

Frontend

React (v18.3.1)

React Router DOM (v6.26.2)

React Toastify (v10.0.5)

Stripe.js and @stripe/react-stripe-js

Vite (Build tool)

Backend

Node.js

Express.js

MongoDB (Mongoose)

Stripe

Validator (Input validation)

dotenv (Environment variable management)

Installation

Prerequisites

Node.js

MongoDB

Stripe account with API keys

Backend Setup

Clone the repository:

git clone <repository-url>
cd server

Install dependencies:

npm install

Create a .env file in the server directory with the following variables:

PORT=3001
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
STRIPE_SECRET_KEY=sk_test_...
CORS_ORIGIN=http://localhost:5173

Start the server:

npm run server

Frontend Setup

Navigate to the client directory:

cd client

Install dependencies:

npm install

Start the development server:

npm run dev

Usage

Start the backend server (npm run server).

Start the frontend (npm run dev).

Open the application in your browser (usually at http://localhost:5173).

Navigate to the donation page and complete the donation form.

Project Structure

Backend

server.js: Entry point of the backend.

routes/: Contains API route definitions.

models/: Mongoose schemas.

controllers/: Handles the business logic for each API route.

Frontend

src/components/: Reusable UI components.

src/pages/: Page-level components.

src/routes/: React Router setup.

src/services/: API integration using Axios.

Scripts

Backend

npm run server: Starts the backend server using Nodemon.

Frontend

npm run dev: Starts the Vite development server.

npm run build: Builds the app for production.

npm run preview: Previews the production build.

Environment Variables

The application requires the following environment variables:

# Backend
PORT=3001
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net
STRIPE_SECRET_KEY=sk_test_...
CORS_ORIGIN=http://localhost:5173

Dependencies

Frontend

@stripe/react-stripe-js

@stripe/stripe-js

axios

react

react-dom

react-router-dom

react-toastify

Backend

axios

cors

dotenv

express

mongoose

stripe

validator

nodemon (Dev Dependency)
