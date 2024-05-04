# Project Name

# Student Registrston Form 
 
## Description

This is a MERN stack application that allows students to register with basic information. It utilizes the following technologies:

* **MongoDB:** NoSQL database for storing student data.
* **Express.js:** Web framework for building the server-side API.
* **React.js:** JavaScript library for creating the user interface.
* **Node.js:** JavaScript runtime environment for executing the server-side code.

## Features

* Student registration form for capturing:
    * Name
    * Email
    * Phone number
    * Moodle ID
    * Date of birth (DoB) (automatic calculation of age)
    * Gender

* Automatic age calculation based on provided DoB. Age is not an input field.

* Automatic storage of either percentage or CGPA in the database, depending on user input.

* Validation to ensure a user provides either percentage or CGPA (not both).

## Installation

### Prerequisites

Ensure you have Node.js (version 14 or later) and npm (Node Package Manager) installed on your system. You can verify this by running `node -v` and `npm -v` in your terminal.

Download and install MongoDB from the official website: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

### Clone the Repository

```bash
git clone https://https://github.com/Amaan-Khan14/MERN-Basic
cd MERN-Basic
```

### Install Dependencies
```bash 
npm install
```
## Configuration
### Environment Variables
Create a file named .env in the project's root directory (not tracked by Git).
Inside the .env file, add the following line, replacing <your-connection-string> with your actual MongoDB connection string:
```bash
CONNECTION_STRING=mongodb://localhost:27017/<your-database-name>
```
Important: Do not commit the .env file to your Git repository, as it might contain sensitive information.

### Running the Application
Start the Development Server
```Bash
npm run dev
```
This will start the server on port 5000 (as specified). You can access the application in your browser at http://localhost:5000.

### Build for Production 
```Bash
npm run build
```
This will create an optimized production build of your React application in the build folder. You can deploy this build to a web server.

## Usage
1.Visit http://localhost:5000 in your browser.
2.Use the /details endpoint to register a new student by sending a POST request with the student data in the request body. The required student data includes:
* Name
* Email
* Phone number
* Moodle ID
* Date of birth (DoB)
* Gender
* Either percentage or CGPA (validation ensures only one is provided)

The application will automatically calculate the age based on the entered DoB and store the provided data in the database.



