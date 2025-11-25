# 🧩 How to Insert Dummy Data into MongoDB

You must visit each route **only once** to avoid inserting duplicate
records.

------------------------------------------------------------------------

### ▶️ Add Holdings Data

Open this URL in your browser:

    http://localhost:5000/addHoldings

------------------------------------------------------------------------

### ▶️ Add Position Data

Open this URL:

    http://localhost:5000/addPosition

------------------------------------------------------------------------

# ⚠️ IMPORTANT WARNING --- READ THIS

### ❗ Both routes insert the entire dummy data every time they are accessed.

That means:

-   Do **NOT** refresh the browser\
-   Do **NOT** open the URL twice\
-   Do **NOT** manually call the route multiple times

If you do, the same data will be inserted again → **duplicate records
will be created**.

------------------------------------------------------------------------

### ✔️ Correct usage:

-   Visit `/addHoldings` once\
-   Visit `/addPosition` once\
-   Then **do not visit these endpoints again**

------------------------------------------------------------------------

### 🧹 If duplicate data gets added:

Go to MongoDB Atlas → Collections → delete duplicates, or drop the
collection entirely and re-insert.

------------------------------------------------------------------------

# 🧪 Verify Data in MongoDB

To confirm that your dummy data is successfully inserted:

1.  Open MongoDB Atlas\
2.  Go to your **Cluster**\
3.  Click **Browse Collections**\
4.  You should see:
    -   `holdings` collection with holdings records\
    -   `positions` collection with positions records

------------------------------------------------------------------------

# ✔️ Summary

You have:

-   Installed all dependencies\
-   Set up `.env` correctly\
-   Started the backend\
-   Inserted dummy data by visiting two routes once\
-   Verified data inside MongoDB\
-   Prevented duplicate entries

Your backend dummy-data seeding setup is now complete! 🎉
