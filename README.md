# 🗂️ Inventaris — Product Management App

> Modern Full-Stack CRUD Application built with **Laravel 12 + Inertia.js + React 19**

---

## 📌 Overview

A clean and modern **Single Page Application (SPA)** that demonstrates a complete product management system with server-side validation, flash messaging, and a polished UI — all without the overhead of a REST API.

---

## ✨ Features

| Feature | Status |
|---|---|
| Create Product | ✅ |
| Read Product List | ✅ |
| Update Product | ✅ |
| Delete Product | ✅ |
| Server-side Validation | ✅ |
| Flash Notifications | ✅ |
| Inertia SPA Navigation | ✅ |
| Type-safe React Components | ✅ |
| Clean UI with ShadCN | ✅ |

---

## 🛠️ Tech Stack

**Backend**
- PHP 8.2
- Laravel 12
- Inertia Laravel
- Eloquent ORM
- SQLite

**Frontend**
- React 19 + TypeScript
- Inertia React
- ShadCN UI
- Lucide Icons
- Tailwind CSS 4
- Vite

---

## 🏗️ Architecture

This project follows **MVC** (Laravel) + **Component-based** (React) architecture, powered by Inertia.js as the SPA bridge.

```
Client (React)
     ↓
  Inertia.js
     ↓
Laravel Controller
     ↓
   Database
```

---

## 📂 Project Structure

```
app/
├── Http/Controllers/ProductController.php
└── Models/Product.php

resources/js/
├── layouts/
├── components/ui/
└── Pages/Products/
    ├── Index.tsx
    ├── Create.tsx
    └── Edit.tsx
```

---

## ⚙️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/inventaris.git
cd inventaris

# 2. Install dependencies
composer install
npm install

# 3. Environment setup
cp .env.example .env
php artisan key:generate
php artisan migrate

# 4. Run the development server
npm run dev
php artisan serve
```

Open your browser at: **http://localhost:8000**

---

## 🧪 Validation Rules

```php
'name'        => 'required|string|max:225',
'price'       => 'required|numeric',
'description' => 'nullable|string',
```

---

## 📌 Routes

```
GET     /products               → Product list
GET     /products/create        → Create form
POST    /products               → Store product
GET     /products/{id}/edit     → Edit form
PUT     /products/{id}          → Update product
DELETE  /products/{id}          → Delete product
```

---

## 📸 Screenshots

> _Add your UI screenshot here_

---

## 🎯 Learning Objectives

This project was built to practice:

- Building full-stack apps with Laravel + React
- Implementing SPA architecture **without** API boilerplate
- Form handling & validation with Inertia
- Component-driven UI development
- Clean code & project structuring

---

## 🔮 Future Improvements

- [ ] Pagination
- [ ] Search & filtering
- [ ] Authentication & role system
- [ ] REST API version
- [ ] Unit & Feature testing
- [ ] Deployment to VPS / Cloud

---

## 📊 Development Notes

- Uses **Inertia.js** to eliminate REST API complexity
- Form state managed with `useForm` hook
- Validation errors handled automatically via Inertia response
- Flash messages managed through shared props
- SQLite used for lightweight local development

---

## 👨‍💻 Author

**Your Name**  
GitHub: [@yourusername](https://github.com/yourusername)