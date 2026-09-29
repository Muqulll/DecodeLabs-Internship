# Decode Labs — Week 1 Task (Express.js Product API)

**Developer:** Abdul Muqeet  
**Repository** DecodLabs-Internship  
**Track:** Backend Development  

## Overview
A RESTful API built with Node.js and Express.js for the Decode Labs Week 1 assessment. It handles in-memory product management, request body validation, and structured JSON responses.

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Version Control:** Git & GitHub

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Muqulll/DecodeLabs-Internship.git
   cd DecodeLabs-Internship

2. **Install dependencies:**
```bash
npm install

```


3. **Run the server:**
```bash
node server.js

```


The server will start at `http://localhost:3000`.

## API Endpoints

### 1. Get All Products

* **Method:** `GET`
* **Endpoint:** `/products`
* **Response:** `200 OK` (Returns an array of product objects)

### 2. Add a New Product

* **Method:** `POST`
* **Endpoint:** `/products`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
```json
{
  "name": "Gaming Headset",
  "price": 50
}
```

* **Success Response:** `201 Created` (Returns the newly created product object with its assigned ID)
* **Error Response:** `400 Bad Request` (Returned if the request body is missing, or if `name` or `price` are omitted)
