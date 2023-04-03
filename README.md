# Project Description

The project is a single-page web application that displays a list of products retrieved from an API endpoint using Axios. The application allows the user to view products by category and subcategory. The user can also search for products by name using a search bar.

The application is built using React 18 and leverages the power of Material UI to provide a modern and responsive user interface. The routing is handled using React Router Dom, which enables the user to navigate between different pages of the application.

To facilitate the deployment of the application, a Dockerfile is included that builds a Docker image of the application and exposes it on a specified port.

Note that the API endpoint does not provide category and subcategory information for the products. To fulfill the requirements of the project, these attributes have been generated dynamically using some simple logic.

# Dependencies

The project requires the following dependencies:

### 1. React 18

### 2. Material UI

### 3. React Router Dom

### 4. Axios

# Running the App

To run the application, follow these steps:

### 1. Clone the project from the repository.

### 2. Install the dependencies by running npm install.

### 3. run "npm start" or Build the Docker image by running docker build -t myapp ..

### 4. Run the Docker container by running docker run -p 3000:3000 myapp.

### 5. Open a web browser and go to http://localhost:3000 to view the application.

# Conclusion

In conclusion, this project is a React 18 web application that uses Material UI, React Router Dom, and Axios. It allows the user to view a list of news by category and subcategory. The included Dockerfile makes it easy to deploy the application in a container environment.
