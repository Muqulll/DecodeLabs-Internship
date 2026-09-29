# Decode Labs — Week 1 Task (Express.js Product API & Showcase Client)

**Developer:** Abdul Muqeet  

**Repository:** DecodeLabs-Internship  

**Track:** Backend Development  

---

## Overview

A full-stack RESTful application built for the Decode Labs Week 1 assessment. It features an Express.js backend handling complete product CRUD operations with in-memory storage, paired with a modern, responsive frontend featuring Dark Mode, live search filtering, and full Markdown rendering support for product descriptions.

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** HTML5, Tailwind CSS (via CDN), JavaScript (ES6+), Marked.js (Markdown parser)
* **Version Control & Management:** Git, GitHub CLI (`gh`)

---

## Key Features

* **Complete CRUD Endpoints:** Create, Read, Update (Partial), and Delete products.
* **Rich Markdown Support:** Product descriptions support rendered headers, bold/italic text, code blocks, blockquotes, and lists.
* **Responsive Light/Dark Theme:** Built-in theme toggle with `localStorage` persistence.
* **Client-Side Live Search:** Real-time client-side filtering by product name and description content.
* **Static Asset Serving:** Express configured to serve the frontend client seamlessly out of the `public/` directory.

---

## Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/Muqulll/DecodeLabs-Internship.git
cd DecodeLabs-Internship

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the server:**
```bash
node server.js

```


4. **Access the application:**
Open `http://localhost:3000` in your browser.

---

## API Endpoints

### 1. Get All Products

* **Method:** `GET`
* **Endpoint:** `/products`
* **Response:** `200 OK`
* **Body:** Array of product objects.

---

### 2. Get Single Product

* **Method:** `GET`
* **Endpoint:** `/products/:id`
* **Response:** `200 OK` on success, `404 Not Found` if the item does not exist.

---

### 3. Add a New Product

* **Method:** `POST`
* **Endpoint:** `/products`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
```json
{
  "name": "Gaming Mouse",
  "price": 59,
  "image": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80",
  "description": "### Precision Optical Mouse\n- **Sensor:** 26k DPI\n- **Weight:** 58g"
}

```


* **Success Response:** `201 Created`
* **Error Response:** `400 Bad Request` (if `name`, `price`, or `description` are missing)

---

### 4. Update Product (Partial)

* **Method:** `PATCH`
* **Endpoint:** `/products/:id`
* **Headers:** `Content-Type: application/json`
* **Request Body (All fields optional):**
```json
{
  "price": 49,
  "name": "Updated Mouse Name"
}

```


* **Success Response:** `200 OK` (returns updated product object)
* **Error Response:** `404 Not Found`

---

### 5. Delete Product

* **Method:** `DELETE`
* **Endpoint:** `/products/:id`
* **Success Response:** `200 OK`
```json
{
  "message": "Product deleted successfully"
}

```


* **Error Response:** `404 Not Found`

---

## Project Structure

```
DecodeLabs-Internship/
├── public/
│   ├── index.html       # Product catalog dashboard & submission form
│   └── product.html     # Single product detail view & edit modal
├── server.js            # Express API server & static file host
├── package.json
└── README.md

```
