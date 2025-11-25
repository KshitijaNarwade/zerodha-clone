### **Database**
- MongoDB Atlas (cloud database)

---

# ⚙️ MongoDB Atlas Setup & Configuration

Follow these steps to connect your backend to MongoDB Atlas.

## 1️⃣ Create MongoDB Cluster

1. Go to https://www.mongodb.com/atlas
2. Create a free account (if new)
3. Create a **Project**
4. Create a **Cluster** (Free M0)
5. Add a database user with:
   - Username
   - Password

---


## 2️⃣ Allow IP Access

Go to:

Security → Network Access → Add IP Address

makefile
Copy code


Choose:
Allow Access From Anywhere ( 0.0.0.0/0 )



This allows your app to connect from any machine.

---

## 3️⃣ Get Your Connection String

1. Go to **Cluster**
2. Click **Connect**
3. Choose **“Connect your application”**
4. Driver: **Node.js**
5. Copy the URL: **mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/**


---

## 4️⃣ Create `.env` File

Inside the **backend** folder, create a file named:

1. Add : MONGO_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/yourDBName
PORT=5000

2.
Replace:
- `<username>`
- `<password>`
- `yourDBName` (any name you choose)

---

## 5️⃣ MongoDB Connection Code

```js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

const app = express();



app.listen(PORT, () => {
    console.log("Server is running on port 3002");
    mongoose.connect(uri);
    console.log("Connected to MongoDB");
});


---
## Running The Project

1. cd backend
2. npm install
3. npm start
