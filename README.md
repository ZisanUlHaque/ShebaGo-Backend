# 🚀 ShebaGo Backend

> **A Professional Home Service Booking REST API** built with **Express.js, TypeScript, Prisma ORM, PostgreSQL, JWT Authentication, and SSLCommerz Payment Gateway.**

ShebaGo is a service marketplace backend where customers can book different home services such as cleaning, electrical work, painting, construction, IT support, and repair services. The system includes authentication, role-based authorization, order management, and online payment integration.

---

## 📌 Features

- 🔐 JWT Authentication
- 👤 Role Based Authorization
- 👥 User Management
- 🛠️ Service Management
- 📦 Order Management
- 💳 SSLCommerz Payment Integration
- 📄 Prisma ORM
- 🐘 PostgreSQL Database
- ⚡ Express.js + TypeScript
- 🌍 RESTful API
- 🍪 Cookie Parser
- 🔒 Password Hashing with bcrypt
- ✅ Global Error Handling
- 📁 Modular Folder Structure

---

# 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| Express.js | Backend Framework |
| TypeScript | Programming Language |
| Prisma ORM | Database ORM |
| PostgreSQL | Database |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| SSLCommerz | Payment Gateway |
| tsup | Build Tool |
| tsx | Development Runner |

---

# 📂 Project Structure

```
ShebaGo-Backend
│
├── prisma
│   ├── migrations
│   └── schema.prisma
│
├── src
│   ├── config
│   ├── lib
│   ├── middlewares
│   ├── modules
│   ├── utils
│   ├── app.ts
│   └── server.ts
│
├── generated
├── dist
├── .env
├── package.json
└── README.md
```

---

# 📦 Installation

## Clone the repository

```bash
git clone https://github.com/ZisanUlHaque/ShebaGo-Backend.git
```

```bash
cd ShebaGo-Backend
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

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

BACKEND_URL=
FRONTEND_URL=
```

---

# ▶️ Run Project

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

---

# 🗄️ Database

Generate Prisma Client

```bash
npx prisma generate
```

Run Migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# 🌱 Seed Database

```bash
npm run seed
```

---

# 👥 User Roles

- CUSTOMER
- PROVIDER
- ADMIN

---

# 🛠️ Service Types

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

# 📚 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/auth/register` |
| POST | `/api/v1/auth/login` |

---

## Users

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/users` |
| GET | `/api/v1/users/:id` |
| PATCH | `/api/v1/users/:id` |
| DELETE | `/api/v1/users/:id` |

---

## Services

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/services` |
| GET | `/api/v1/services` |
| GET | `/api/v1/services/:id` |
| PATCH | `/api/v1/services/:id` |
| DELETE | `/api/v1/services/:id` |

---

## Orders

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/orders` |
| GET | `/api/v1/orders` |
| GET | `/api/v1/orders/:id` |
| PATCH | `/api/v1/orders/:id` |
| DELETE | `/api/v1/orders/:id` |

---

## Payments

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/payment/init-payment/:orderId` |
| POST | `/api/v1/payment/success` |
| POST | `/api/v1/payment/fail` |
| POST | `/api/v1/payment/cancel` |
| POST | `/api/v1/payment/ipn` |

> **Note:** Update the endpoint paths if your routes use different URLs.

---

# 🔒 Authentication

Protected APIs require a JWT Access Token.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

# 📜 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Builds the application.

```bash
npm start
```

Starts the production server.

```bash
npm run seed
```

Seeds the database.

---

# 📖 Prisma Models

- User
- Service
- Order
- Payment

---

# 🚀 Deployment

This project can be deployed on:

- Vercel
- Render
- Railway
- DigitalOcean
- AWS
- VPS

---

# 🤝 Contributing

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes

```bash
git commit -m "Add Amazing Feature"
```

4. Push to the branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Zisan Ul Haque**
---

# ⭐ Support

If you like this project, don't forget to **⭐ Star** the repository.