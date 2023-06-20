# Paz Company E-commerce Application

This is an e-commerce application for Paz Company. It provides functionalities for users to register, login, and access admin-only views.

## Technologies Used

- Angular: Front-end framework for building the user interface
- Django: Back-end framework for handling server-side logic and database management
- Django REST Framework: Toolkit for building Web APIs in Django
- PostgreSQL: Relational database for storing user data

## Features

- User Registration: Users can register with their username and password.
- User Login: Registered users can log in to their accounts.
- Admin Panel: Admin users have access to an admin-only view for managing the application.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/paz-ecommerce.git`
2. Install dependencies:
   - Front-end: Navigate to the `frontend` directory and run `npm install`.
   - Back-end: Create a virtual environment, activate it, and install the required packages listed in `requirements.txt`.
3. Configure the database:
   - Create a PostgreSQL database and update the database configuration in the Django settings file (`settings.py`).
   - Apply migrations to create the necessary database tables: `python manage.py migrate`.
4. Start the development servers:
   - Front-end: In the `frontend` directory, run `npm start` to start the Angular development server.
   - Back-end: In the project root directory, run `python manage.py runserver` to start the Django development server.
5. Access the application: Open your web browser and navigate to `http://localhost:4200` to access the application.

## Usage

- Register a new user account by clicking on the "Register" link on the login page.
- Log in to your account using your username and password.
- Admin users can access the admin-only view by navigating to `/admin-only` and logging in with their admin credentials.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

