📦 Dependency Installation & MongoDB Configuration (Detailed)

📁 Folder Structure Overview
my-mern-project/

├── frontend/         # React application (client)

├── server/           # logic/API gateway (e.g., for DB connection, auth, etc.)

├── server/.env              # Environment file containing MongoDB URI

✅ Step 1: Install Node.js Dependencies

Each part of the project (frontend, server) has its own package.json. You need to run npm install in all three folders.

🔧 1.1 Install Dependencies in All Subfolders

Open your terminal and run:

cd path/to/my-mern-project

npm install

# Install frontend dependencies
cd frontend
npm install

# Install server dependencies
cd ../server
npm install

✅ Step 2: Setup MongoDB Atlas Cluster

We'll use MongoDB Atlas, the official free cloud-hosted MongoDB service.
📝 2.1 Create a Cluster

    Go to https://cloud.mongodb.com and sign in or sign up.

    Click “Create” → “Build a Cluster” (choose free M0 tier).

    Select:

        Cloud Provider: AWS, GCP, or Azure (any is fine)

        Region: Choose one close to your location

        Cluster Name: AmoebaDB-Cluster

👤 2.2 Create a Database User

    Go to Database Access in the left sidebar.

    Click “Add New Database User”.

    Choose:

        Authentication method: Password

        Username: yourusername

        Password: yourpassword

🌍 2.3 Whitelist Your IP Address

    Go to Network Access

    Click “Add IP Address”

    Choose “Allow Access From Anywhere” (for development only), or use your local IP.


📋 2.4 Get Your MongoDB Connection URI

Go to Clusters > Connect > Connect your application.

Copy the connection string like:
mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/amoebadb?retryWrites=true&w=majority

✅ Step 3: Add MongoDB URI to .env File

In the server/ folder, there should be a .env file with a placeholder for the MongoDB URI.
Example .env in /server:

MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.mongodb.net/amoebadb?retryWrites=true&w=majority
PORT=5000

📦 Import JSON Files into MongoDB Cluster

You need to upload the following .json files as documents into your AmoebaDB MongoDB Cluster:

    gene.json

    genome.json

    annotated_cds.json

    annotated_proteins.json

    annotated_transcripts.json

    keyword_to_gene.json

Steps to Upload:

    Go to MongoDB Atlas and log into your account.

    Navigate to your AmoebaDB Cluster.

    Select "Browse Collections".

    For each .json file:

        Click "Add My Own Data" or go into an existing database (e.g., amoebadb) and click "Insert Document" > "Import".

        Choose "Import JSON".

        Select the corresponding .json file from your system.

        It will be added as a new collection (the name will match the file name, excluding .json).

Repeat this process for all six files to complete the data setup.
