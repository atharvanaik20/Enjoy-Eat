
# Enjoy Eat - Spring Boot Backend

## Project Overview
Enjoy Eat is a food delivery app that aims to provide a user-friendly platform for customers to order food from restaurants. This repository contains the backend code developed using Spring Boot, which handles the business logic, server-side validation, and database communication for the Enjoy Eat application.

## Technology Stack
- **Frontend**: React JS, HTML, CSS, JavaScript
- **Backend**: Spring Boot (Java)
- **Database**: MySQL

## Reason for Choosing Technology
- **React JS**:
  - High performance and faster development due to the implementation of virtual DOM and component-based architecture.
  - Strong adoption by the industry.

- **Spring Boot**:
  - Faster development with reduced boilerplate code.
  - Default opinionated approach with automatic dependency management.
  - Built-in embedded Tomcat server.

- **MySQL**:
  - Follows ACID properties.
  - Open-source and cost-effective.
  - Easy-to-understand syntax and scalability.

## Users and Privileges
The Enjoy Eat application consists of four user roles with different privileges:
1. **Admin**:
   - Login
   - Register branch managers
   - View all branch managers
   - Add, update, and remove menu items
   - View order logs of all branches

2. **Customer**:
   - Register
   - Login
   - Browse menu items
   - Place orders
   - View order history

3. **Branch Manager**:
   - Login
   - Get details of placed orders
   - View status of delivery executives (available or occupied)
   - View order logs for their branch
   - Assign delivery executives to placed orders
   - Update order status

4. **Delivery Executive**:
   - Login
   - Get assigned orders
   - Deliver orders to customers
   - Update order status
   - Update availability status

## Workflow
1. Documentation: The project started with preparing Software Requirements Specification (SRS) documents, ER diagrams, and page navigation diagrams.
2. Database Design: The team designed nine tables to structure the database, including tables for logins, customers, branch managers, branches, delivery executives, addresses, orders, order items, and menus.
3. Frontend and Backend Development: The frontend was developed using React JS, while the backend was developed using Spring Boot Java. The server-side logic, business rules, and database communication were implemented in the backend code.
4. Integration: The frontend and backend were integrated to establish communication between the client-side and server-side components.
5. Testing and Bug Fixing: The application was thoroughly tested for functionality, performance, and user experience. Any bugs or issues identified during testing were fixed.
6. Deployment: The application was deployed to a production environment to make it accessible to users.

## Database Design
The database design for Enjoy Eat includes the following tables:
1. logins
2. customers
3. branch_managers
4. branches
5. delivery_executives
6. addresses
7. orders
8. order_items
9. menus

## Snapshots
Various snapshots of the application's user interface and functionality were taken throughout the development process to document the progress and changes made.

## Getting Started
To set up and run the Enjoy Eat backend code locally, follow these steps:
1. Clone the repository to your local machine.
2. Set up the MySQL database and configure the connection details in the application.properties file.
3. Build and run the Spring Boot application using an IDE or the command line.
4. The backend server will start running on the specified port, and the endpoints will be accessible for the frontend to

 consume.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to modify and customize the README file according to your project's specific details, add installation instructions, and provide any other relevant information for users of the backend code repository.
