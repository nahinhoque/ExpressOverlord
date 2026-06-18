# Express Overlord

A practical Express.js learning repository that covers routing, middleware, cookies, sessions, validation, file uploads, API design, and basic server security.

## Overview

This project is a collection of small Express examples and practice servers used to understand how Node.js applications handle:

- HTTP methods and routing
- Static and dynamic routes
- Request/response handling
- Cookies and sessions
- Input validation
- File uploads
- API security basics such as rate limiting and authentication patterns

---

## Project Structure

```text
express-overlord/
├── cookies.js
├── dynamicRouting.js
├── httpMethods_BasicRouting.js
├── imgUpload.js
├── practice.js
├── staticPractice.js
├── urlQuery.js
├── public/
├── upload/
├── uploads/
├── cont/
│   ├── package.json
│   └── src/
│       ├── Session.js
│       └── validation.js
└── MVCbackend-serverSecurity/
    ├── server.js
    ├── controllers/
    ├── middlewares/
    └── routes/
```

---

## Prerequisites

Make sure you have the following installed:

- Node.js (recommended version 18 or newer)
- npm

---

## Installation

From the root of the repository:

```bash
npm install
```

If you want to run the nested examples, install dependencies in those folders as well:

```bash
cd cont && npm install
cd ../MVCbackend-serverSecurity && npm install
```

---

## Running the Examples

### Root project examples

Each file in the root can be run directly with Node.js:

```bash
node cookies.js
node staticPractice.js
node dynamicRouting.js
node httpMethods_BasicRouting.js
node imgUpload.js
node urlQuery.js
```

### Nested validation and session examples

Inside the `cont` folder:

```bash
cd cont
npm run dev
```

This runs the validation example from [cont/src/validation.js](cont/src/validation.js).

To run the session example:

```bash
npm run sess
```

### MVC security example

Inside the `MVCbackend-serverSecurity` folder:

```bash
cd MVCbackend-serverSecurity
node server.js
```

---

## Main Topics Covered

- Express app setup and server startup
- Route handling for GET, POST, PUT, and DELETE
- URL params and query strings
- Static file serving
- Middleware usage
- Cookie-based authentication examples
- Session handling
- Form validation using `express-validator`
- File upload handling with `multer`
- Basic rate limiting and request protection

---

## Example API Behavior

### Basic routes

The repository includes examples for:

- `/` and `/about`
- dynamic paths like `/user/:id`
- query-based requests like `/search?name=...`

### Validation example

The validation demo accepts a `POST` request to `/api/register` and checks:

- name length
- valid email format
- password strength
- valid date format

### Security example

The MVC security demo includes:

- user routes
- authentication middleware
- cookie-based session handling
- request rate limiting

---

## Notes

- Some files in the repository are practice scripts and may be commented out or intentionally used for learning.
- The main goal of this repo is to demonstrate Express.js concepts in a simple, beginner-friendly way.
- You may need to create folders like `uploads/` if they are not present before running file upload examples.

---

## Recommended Next Steps

If you want to continue building on this project, you can explore:

- adding a real database
- creating a proper authentication system
- organizing routes/controllers more cleanly
- building REST APIs with reusable middleware
- adding environment variables for secrets and configuration

---

## License

This project is for learning and practice purposes.
