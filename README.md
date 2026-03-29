# StockFlow MVP

A clean, production-quality inventory management SaaS built with Next.js 14, Prisma, and SQLite.

---

## ✨ Features

- **Multi-tenant** — each organization's data is fully isolated
- **Auth** — email/password signup & login with JWT cookies
- **Dashboard** — total products, units on hand, live low-stock alerts
- **Products** — full CRUD with sortable table and client-side search
- **Stock Adjustments** — add/remove stock with optional notes; running history stored in DB
- **Settings** — configurable global low-stock threshold per org
- **Design** — distinctive Playfair Display + DM Sans typography, warm paper palette, terracotta accents

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Install & Setup

```bash
cd stockflow
npm install
npx prisma generate
npx prisma db push
```

### 2. Seed Demo Data (optional)

```bash
node prisma/seed.js
```

Demo credentials: `demo@stockflow.com` / `password123`

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🗂 Project Structure

```
stockflow/
├── prisma/
│   ├── schema.prisma        # DB schema (SQLite)
│   └── seed.js              # Demo data seeder
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/        # signup, login, logout, me
│   │   │   ├── products/    # CRUD + stock adjust
│   │   │   ├── dashboard/   # summary data
│   │   │   └── settings/    # org settings
│   │   ├── dashboard/       # Dashboard page
│   │   ├── login/           # Login page
│   │   ├── signup/          # Signup page
│   │   ├── products/        # Product list, create, edit
│   │   ├── settings/        # Settings page
│   │   ├── globals.css      # Design system + CSS variables
│   │   └── layout.tsx       # Root layout
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.tsx # Auth'd page wrapper
│   │   │   └── Sidebar.tsx  # Navigation sidebar
│   │   └── ui/
│   │       ├── Toast.tsx    # Notification toasts
│   │       └── ConfirmDialog.tsx
│   ├── lib/
│   │   ├── prisma.ts        # Prisma client singleton
│   │   ├── auth.ts          # JWT helpers
│   │   └── api.ts           # Response helpers
│   └── types/
│       └── index.ts         # Shared TypeScript types
├── .env                     # DATABASE_URL + JWT_SECRET
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## 🗃 Database Schema

| Table | Purpose |
|---|---|
| `Organization` | Tenant root |
| `User` | One user per org (MVP) |
| `Product` | Products with soft delete |
| `StockAdjustment` | Audit trail for stock changes |
| `OrgSettings` | Per-org config (threshold etc.) |

---

## 🔌 API Reference

| Method | Path | Description |
|---|---|---|
| POST | `/api/auth/signup` | Create account + org |
| POST | `/api/auth/login` | Login, set cookie |
| POST | `/api/auth/logout` | Clear cookie |
| GET | `/api/auth/me` | Current user |
| GET | `/api/dashboard` | Dashboard summary |
| GET | `/api/products` | List products (supports `?search=`) |
| POST | `/api/products` | Create product |
| GET | `/api/products/:id` | Get product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Soft delete |
| POST | `/api/products/:id/adjust` | Adjust stock (+/-) |
| GET | `/api/settings` | Get org settings |
| PUT | `/api/settings` | Update org settings |

---

## 🎨 Design System

CSS variables defined in `globals.css`:

- **Fonts**: Playfair Display (display) + DM Sans (body) + DM Mono (mono)
- **Colors**: `--ink`, `--paper`, `--accent` (terracotta), `--jade`, `--amber`, `--crimson`
- **Components**: `.btn`, `.input`, `.card`, `.badge`, `.table-container`, `.stat-card`, `.modal-overlay`

---

## 🔧 Environment Variables

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-here"
```

Change `JWT_SECRET` before any production deployment.

---

## 📈 Phase 2 Ideas

- Email notifications for low stock
- CSV import/export
- Multiple users per org with roles
- Stock movement history view
- Purchase orders
- Charts / analytics dashboard
- Shopify / WooCommerce integrations

---

## 🏗 Built With

- [Next.js 14](https://nextjs.org/) — App Router, Server Components
- [Prisma](https://prisma.io/) — ORM with SQLite
- [Tailwind CSS](https://tailwindcss.com/) — utility styles
- [Lucide React](https://lucide.dev/) — icons
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) — password hashing
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) — JWT auth
