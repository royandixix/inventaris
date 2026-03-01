Modern Full-Stack CRUD Application built with Laravel 12 + Inertia + React

📌 Overview

This project is a modern SPA (Single Page Application) built using:

Laravel 12 (Backend)

Inertia.js (SPA Bridge)

React 19 + TypeScript

ShadCN UI

Tailwind CSS 4

SQLite Database

The application demonstrates a complete CRUD system with clean UI, validation handling, and flash messaging.

✨ Features

✅ Create Product

✅ Read Product List

✅ Update Product

✅ Delete Product

✅ Server-side Validation

✅ Flash Notifications

✅ Inertia SPA Navigation

✅ Type-safe React Components (TypeScript)

✅ Clean UI using ShadCN

🛠 Tech Stack
Backend

PHP 8.2

Laravel 12

Inertia Laravel

Eloquent ORM

SQLite Database

Frontend

React 19

TypeScript

Inertia React

ShadCN UI

Lucide Icons

Tailwind CSS 4

Vite

🏗 Architecture

This project follows:

MVC Pattern (Laravel)

Component-based architecture (React)

SPA behavior powered by Inertia

RESTful routing

Flow:

Client (React)
↓
Inertia
↓
Laravel Controller
↓
Database

📂 Project Structure
app/
 ├── Http/Controllers/ProductController.php
 ├── Models/Product.php

resources/js/
 ├── layouts/
 ├── components/ui/
 ├── Pages/Products/
 │    ├── Index.tsx
 │    ├── Create.tsx
 │    └── Edit.tsx
⚙️ Installation
git clone https://github.com/yourusername/product-management-app.git
cd product-management-app

composer install
npm install

cp .env.example .env
php artisan key:generate
php artisan migrate

npm run dev
php artisan serve

Open:
http://localhost:8000

🧪 Validation Rules
'name' => 'required|string|max:225',
'price' => 'required|numeric',
'description' => 'nullable|string',
📌 Routes
GET     /products
GET     /products/create
POST    /products
GET     /products/{id}/edit
PUT     /products/{id}
DELETE  /products/{id}
📸 Screenshots

(Add your UI screenshot here)

🎯 Learning Objectives

This project was built to practice:

Building full-stack applications with Laravel + React

Implementing SPA architecture without API boilerplate

Form handling & validation with Inertia

Component-driven UI development

Clean code & project structuring

🔮 Future Improvements

Pagination

Search & filtering

Authentication role system

API endpoint version

Unit & Feature testing

Deployment to VPS / Cloud

👨‍💻 Author

Your Name
GitHub: https://github.com/yourusername

## 📊 Development Notes

- Uses Inertia to eliminate REST API complexity
- Form state handled with useForm hook
- Validation errors handled automatically via Inertia response
- Flash messages managed through shared props
- Uses SQLite for lightweight development# inventaris
# inventaris
