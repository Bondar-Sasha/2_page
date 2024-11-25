# Calculator Application

## Table of Contents

-  [Task](#task)
-  [How to Run the App](#how-to-run-the-app)
-  [Application Structure](#application-structure)

## Task

Source: https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f

## How to Run the App

### 1. GitHub Pages

To access the app via GitHub Pages, simply visit the following link:  
https://van-horn.github.io/calculator/

### 2. Docker

To run the application using Docker, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Van-horn/calculator
   ```
2. Go to the application folder:
   ```bash
   cd .\calculator\
   ```
3. Release local port 3000.
4. Make sure the Docker engine is running.
5. Start command:
   ```bash
   docker compose up --build
   ```
6. The application is running:<br>
   Link: http://localhost:3000/

## Application structure

```plaintext

calculator/
├── docs             # App build
├── public
│   ├── index.html   # Main HTML file
│   ├── favicon      # App favicon
│   └── styles       # Stylesheets
├── src
│   ├── css          # Connecting styles
│   ├── data         # Data for color scheme
│   ├── logic        # Event handling for page elements
│   │   └── core     # Processing of collected data
│   └── utils        # Utility functions for frequent calls
└── configs          # Configuration files
```
