# Hello World REST API with Docker

This project is a simple "Hello World" REST API built with Node.js and Express, containerized using Docker. It serves as an introductory example to learn how to create and deploy a RESTful API while understanding Docker and running applications in containers.

## Requirements

- Node.js (v18 or higher)
- npm (v8 or higher)
- Docker (v20 or higher)

## Installation and Execution

Follow these steps to install and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hola-mundo-api.git
   cd hola-mundo-api
Install dependencies:

bash
Copiar código
npm install
Run the application locally:

bash
Copiar código
node index.js
The API will be available at: http://localhost:3000.

#Dockerizing the Application
Build the Docker image:

bash
Copiar código
docker build -t hola-mundo-api .
Run the Docker container:

bash
Copiar código
docker run -p 3000:3000 hola-mundo-api
The API will be available at: http://localhost:3000.

Docker Hub
You can find the Docker image on Docker Hub. If you want to share your image, upload it using the following command:

bash
Copiar código
docker push yourusername/hola-mundo-api
Project Overview
Project Description: A brief explanation of the project and its purpose.
Requirements: Minimum versions of Node.js, npm, and Docker needed.
Installation: Step-by-step guide to clone the repository, install dependencies, and run the application locally or in a Docker container.
Docker Hub: Instructions for pushing the Docker image to Docker Hub.
