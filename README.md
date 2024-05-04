# Project Name

#Student Registrston Form 

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
