# 🚀 ShebaGo Backend

> **A RESTful Backend API for an On-Demand Home Service Booking Platform** built with **Express.js, TypeScript, Prisma ORM, PostgreSQL, JWT Authentication, and SSLCommerz Payment Gateway.**

ShebaGo allows customers to book home services such as cleaning, repair, painting, electrical work, construction, and IT support. Providers can publish services, customers can place orders, and payments are securely processed using SSLCommerz.

---

## 🔗 Repository

https://github.com/ZisanUlHaque/ShebaGo-Backend

---

# ✨ Features

- 🔐 JWT Authentication
- 👥 Role-Based Authorization
- 🔒 Password Hashing (bcrypt)
- 🛠️ Service Management
- 📦 Order Management
- 💳 SSLCommerz Payment Integration
- 🍪 Cookie-based Authentication Support
- 🗄️ PostgreSQL Database
- ⚡ Prisma ORM
- 🌍 REST API
- 📁 Modular Architecture
- ❌ Global Error Handling
- 🚫 Not Found Middleware
- 🌱 Database Seeding Support

---

# 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| Express.js | Backend Framework |
| TypeScript | Programming Language |
| Prisma ORM | Database ORM |
| PostgreSQL | Database |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| SSLCommerz | Payment Gateway |
| tsup | Build Tool |
| tsx | Development Server |
| Cookie Parser | Cookie Handling |
| CORS | Cross-Origin Requests |

---

# 📂 Project Structure

```text
ShebaGo-Backend
│
├── prisma
│   ├── migrations
│   ├── schema.prisma
│   └── seed.ts
│
├── generated
│
├── src
│   ├── config
│   ├── lib
│   ├── middlewares
│   ├── modules
│   │   ├── auth
│   │   ├── service
│   │   ├── order
│   │   └── payment
│   │
│   ├── utils
│   ├── app.ts
│   └── server.ts
│
├── dist
├── .env
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/ZisanUlHaque/ShebaGo-Backend.git
```

Go to project directory

```bash
cd ShebaGo-Backend
```

Install dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

DATABASE_URL=

JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES_IN=7d

BCRYPT_SALT_ROUNDS=10

SSL_STORE_ID=
SSL_STORE_PASSWORD=
SSL_PAYMENT_API=
SSL_VALIDATION_API=

SUCCESS_URL=
FAIL_URL=
CANCEL_URL=

APP_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000
```

---

# ▶️ Running the Application

Development

```bash
npm run dev
```

Build

```bash
npm run build
```

Production

```bash
npm start
```

---

# 🗄️ Prisma Commands

Generate Prisma Client

```bash
npx prisma generate
```

Run Migration

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

Seed Database

```bash
npm run seed
```

---

# 📚 API Endpoints

## Base URL

```
http://localhost:5000/api
```

---

## 🔐 Authentication

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| POST | `/auth/register` | Register a new user | Public |
| POST | `/auth/login` | Login user | Public |

---

## 🛠️ Services

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| GET | `/service` | Get all services | Public |
| GET | `/service/:id` | Get single service | Public |
| POST | `/service` | Create service | Provider |
| PUT | `/service/:id` | Update service | Provider |
| DELETE | `/service/:id` | Delete service | Provider |

---

## 📦 Orders

| Method | Endpoint | Description | Access |
|---------|----------|-------------|--------|
| POST | `/order` | Create Order | Customer |

---

## 💳 Payments

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/payment` | Verify Payment |

---

# 🔑 Authorization

Protected routes require an access token.

```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# 👥 User Roles

## CUSTOMER

- Register
- Login
- Browse Services
- Create Orders
- Make Payments

---

## PROVIDER

- Login
- Create Service
- Update Service
- Delete Service

---

## ADMIN

- Reserved for future implementation.

---

# 🛠️ Service Categories

- IT
- REPAIR
- CLEANING
- PAINTING
- ELECTRICAL
- CONSTRUCTION

---

# 📦 Order Status

- PENDING
- IN_PROGRESS
- COMPLETED
- CANCELLED
- FAILED
- REFUNDED

---

# 💳 Payment Status

- PENDING
- PAID
- FAILED
- CANCELLED

---

# 🗄️ Database Models

## User

- id
- name
- email
- password
- role

---

## Service

- id
- title
- description
- serviceType
- price

---

## Order

- id
- quantity
- totalPrice
- status
- userId
- serviceId

---

## Payment

- id
- tranId
- amount
- status
- meta
- orderId

---

# 📦 NPM Scripts

Run development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

Run production server

```bash
npm start
```

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Seed database

```bash
npm run seed
```

---

# 📤 Sample Response

## Success

```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

## Error

```json
{
  "success": false,
  "message": "Something went wrong",
  "error": {}
}
```

---

# 🚀 Deployment

The project can be deployed to:

- Vercel
- Render
- Railway
- DigitalOcean
- AWS EC2

---

# 🤝 Contributing

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push the branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Zisan Ul Haque**

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.