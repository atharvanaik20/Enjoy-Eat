
# Enjoy Eat - Frontend

## Project Overview
Enjoy Eat is a food delivery app that provides a user-friendly platform for customers to order food from restaurants. This repository contains the frontend code developed using React JS, HTML, CSS, and JavaScript for the Enjoy Eat application.

## Technology Stack
- **Frontend**: React JS, HTML, CSS, JavaScript

## Features
- User Registration: Customers can register on the Enjoy Eat app by providing their details such as name, phone number, email, and address.
- User Login: Registered users can log in to their accounts using their email and password.
- Menu Browsing: Customers can browse the menu items available from various restaurants.
- Order Placement: Customers can place orders for their desired menu items.
- Order History: Customers can view their order history and track the status of their past orders.
- Admin Dashboard: The admin has access to a dashboard where they can manage branch managers, menu items, and view order logs.

## Project Structure
The project has the following structure:
- **index.html**: The main HTML file for the app, which is loaded when the user visits the site. It includes a `<div>` tag with an id="root", where React components are rendered.
- **src**: This directory contains the source code for the React components and other supporting files.
  - **components**: This directory contains reusable components used throughout the application, such as Navbar, Footer, etc.
  - **pages**: This directory contains the main pages of the application, such as Home, Menu, Order History, etc.
  - **services**: This directory contains the services responsible for making API calls to the backend.
  - **styles**: This directory contains the CSS files for styling the components.
  - **App.js**: The main component that acts as the entry point for the application. It contains the routing logic and renders the necessary components based on the current URL.
  - **index.js**: The entry point of the application where the ReactDOM.render method is used to render the App component to the root element of the HTML document.

## Getting Started
To set up and run the Enjoy Eat frontend code locally, follow these steps:
1. Clone the repository to your local machine.
2. Install the dependencies by running the command `npm install`.
3. Start the development server by running the command `npm start`.
4. The frontend application will be accessible at `http://localhost:3000` in your browser.

## Contributing
Contributions are welcome! If you'd like to contribute to the Enjoy Eat frontend code, please follow these guidelines:
- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and test them thoroughly.
- Submit a pull request describing your changes and the problem they solve.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to modify and customize the README file according to your project's specific details, add installation instructions, and provide any other relevant information for users of the frontend code repository.
