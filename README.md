# Task1 Backend API

## Overview
This project is a simple backend REST API built using Node.js and Express.js. It performs basic CRUD operations using a JSON file as the data storage. The application demonstrates core backend concepts such as routing, request handling, data validation, and file-based persistence.

## Features

* Create a new item (POST)
* Retrieve all items (GET)
* Delete an item by ID (DELETE)
* Input validation for required fields
* Error handling for invalid routes and requests
* Data stored in a JSON file

## Technologies Used

* Node.js
* Express.js
* File System (fs module)

## Project Structure

```
task1-backend/
│
├── server.js
├── data.json
├── package.json
└── node_modules/
```

## Installation and Setup

1. Clone the repository:

```
https://github.com/swarnkardrishtant22/task1-backend.git
cd task1-backend
```

2. Install dependencies:

```
npm install
```

3. Run the server:

```
node server.js
```

The server will start on:

```
http://localhost:3000
```

## API Endpoints

### Base URL

```
http://localhost:3000
```

### Get All Items

```
GET /items
```

Returns all items stored in the JSON file.

---

### Create Item

```
POST /items
```

Request body:

```
{
  "title": "Item Title",
  "description": "Item Description"
}
```

Creates a new item with a unique ID and timestamp.

### Delete Item

```
DELETE /items/:id
```

Deletes the item with the specified ID.

## Error Handling

* Returns status 400 if required fields are missing in the request body
* Returns status 404 if the requested item is not found
* Returns status 404 for unknown routes

## Data Storage

All data is stored in a local file named `data.json`. The application uses Node.js file system methods to read and write data.

## Deployment

The application is deployed on Render.

Live URL:

https://task1-backend-nih3.onrender.com/


## How It Works

1. The client sends a request to the server.
2. The server processes the request using Express routes.
3. Data is read from or written to the JSON file.
4. The server sends a response back to the client.

## Learning Outcomes

* Understanding REST API concepts
* Working with Express.js
* Handling JSON data
* Implementing backend logic
* Deploying a Node.js application
  
## Author
Drishtant Swarnkar

## Note

This project is created for learning purposes and demonstrates basic backend development concepts.
