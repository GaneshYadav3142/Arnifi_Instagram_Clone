# Arnifi_Instagram_Clone


This is small Instagram  web application consists of a frontend and a backend.This web application is full responsive on all the Devices such as Large, Medium and Small Screens Below are instructions on how to run each part of the application.

## Backend

The backend of the application is built using JSON Server  To run the backend server, follow these steps:

1. Open your terminal or command prompt.


2. Install the required dependencies by running:  **npm install**



3. Start the backend server using the following command:  **npm run server**


The server will start and listen for requests on port 8080 by default. You can access the backend API at `http://localhost:8080/posts` & `http://localhost:8080/users` & `http://localhost:8080/comments`.

## Frontend

The frontend of the application is built using React.js. To run the frontend development server, follow these steps:

1. Open another terminal or command prompt window (keep the backend server running in the previous window).


2. Start the frontend development server using the following command: **npm run start**


3. It uses **GET** request as well as **POST** request.

4. It has the **Protected Route**  with **Auth Guard**  for all the Routing.

## Using the App

1. Go on and Register Yourself or otherwise if you are previosly register  login yourself
![Register Page](./Frontend/myapp/src/Assets/signup.jpg)

![Login Page](./Frontend/myapp/src/Assets/login.jpg)

2. When you Register Successfully you are redirected to Postpage with all the available post  Page with your name displayed in the Add Post Button.

![Post Page](./Frontend/myapp/src/Assets/Postpage.jpg)


3. You can the Add the post and can Read the comment on other post as well as can also add the comment on other post as well


4. Finally you can logout by Clicking on the Logout section, you will be Redirected to Homepage

5. Homepage Look like simpleas shown in the image.

![Homepage](./Frontend/myapp/src/Assets/Homepage1.jpg)