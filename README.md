# Krishak Backend Application

Welcome to the Krishak Backend Application repository. This project was developed as part of the Google Solution Challenge 2025 and serves as the backend for the Krishak platform. It is built using Node.js and integrates with Firebase and Google Cloud Platform services.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The Krishak Backend Application provides a robust and scalable backend solution for the Krishak platform. It leverages the power of Node.js for server-side logic, Firebase for real-time database and authentication, and Google Cloud Platform for cloud services and deployment.

## Features
- **Node.js**: Utilized for building fast and scalable server-side applications.
- **Firebase Integration**: Implements Firebase services for real-time database management and user authentication.
- **Google Cloud Platform**: Deployed on GCP to ensure reliability and scalability.

## Getting Started
To set up the Krishak Backend Application on your local machine, follow the steps below.

### Prerequisites
Ensure you have the following installed:
- Node.js
- Firebase CLI
- Docker (optional, for containerized deployment)

### Installation
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/GSC-Krishak/Krishak-Backend.git
   ```
2. **Navigate to the Project Directory:**
   ```sh
   cd Krishak-Backend
   ```
3. **Install Dependencies:**
   ```sh
   npm install
   ```
4. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory and add the necessary environment variables as required by the application.
   - Refer to `.env.example` for guidance.
5. **Initialize Firebase and other infrastructures:**
   ```sh
   add firebase, PostgreSql credentials in the .env.
   ```
6. **Run the Application:**
   ```sh
   npm start
   ```
   - The server should now be running at `http://localhost:3000`.

## Project Structure
The project's directory structure is organized as follows:
```
Krishak-Backend/
│-- controllers/    # Contains the route handlers and business logic
│-- lib/            # Includes utility functions and modules
│-- prisma/         # Holds the Prisma schema and migration files for database management
│-- routes/         # Defines the API endpoints and their respective routes
│-- .gitignore      # Specifies files and directories to be ignored by Git
│-- Dockerfile      # Contains instructions for building the Docker image of the application
│-- app.js          # The main entry point of the application
│-- package.json    # Lists the project dependencies and scripts
```

## Contributing
We welcome contributions to the Krishak Backend Application. To contribute, please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

For more information, visit the Krishak Backend Application repository.
