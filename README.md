# Mini Online Bookstore

This project is developed as part of the technical assignment for the **Growth Analytics & CRO Specialist position at Rokomari.com**.

## Features

- Browse books in a responsive grid layout
- View book details
- Search books by title or author
- Add books to cart
- Increase or remove cart items
- View total cart price

## Technology Stack

Frontend
- HTML
- CSS
- Vanilla JavaScript (AJAX)

Backend
- Java
- Spring Boot
- REST API

Database
- MySQL

## Project Structure

backend/
Spring Boot REST API

frontend/
HTML, CSS, JS UI

## API Endpoints

GET /api/books  
GET /api/books/{id}  
GET /api/books/search?keyword=  

## Run Backend

cd backend/bookstore-api
./mvnw spring-boot:run

Server will start at:

http://localhost:8080

## Run Frontend

Open:

frontend/index.html


Or run using Live Server.

## Database Setup

Create database:

CREATE DATABASE bookstore;


Spring Boot will automatically create the required tables.

## Author

Forkan Amin

## Run Backend
