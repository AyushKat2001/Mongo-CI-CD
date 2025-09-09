## CI/CD MongoDB Project

This project is a simple Node.js + Express REST API connected to MongoDB, with a complete CI/CD pipeline set up using GitHub Actions and Docker.

📌 Project Overview

- The backend is built using Express.js.

- MongoDB is used as the database, managed with Mongoose.

- The project includes tests with Jest and Supertest.

- A CI/CD pipeline is configured to run on every push or pull request.

- Docker is used to containerize the application for deployment.

📂 Project Structure

- src/ → Application code (Express app and server setup).

- tests/ → Test cases for the API.

- Dockerfile → Defines how to build the Docker image.

- docker-compose.yml → Sets up local development with MongoDB.

- .github/workflows/ → Contains the GitHub Actions CI/CD pipeline.

- package.json → Project dependencies and scripts.

🔄 CI/CD Pipeline

- The pipeline ensures code quality and reliability by performing these steps automatically:

- Linting – Runs ESLint to check code style and catch issues.

- Testing – Executes Jest tests to verify functionality.

- Build Step – Simulates the build process.

- Docker Deployment – Builds and pushes a Docker image to DockerHub.

🚀 Running the Project Locally

- Install project dependencies.

- Start MongoDB (you can use Docker Compose).

- Run the server with Node.js.

- Execute tests using the provided test runner.

🐳 Docker Setup

- In repository store your dockerhub credentials in secrets for the pipeline to access and push images to dockerhub.

- The application is containerized for easy deployment.

- Docker Compose can be used to run both the app and MongoDB together.
