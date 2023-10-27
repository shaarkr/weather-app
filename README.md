# Weather App

Weather App is a Vue 3 application that empowers you to effortlessly monitor weather conditions in various cities. This application fetches real-time weather data from a mock API and renders it with Vue 3 and Tailwind CSS, providing a user-friendly and responsive interface.

[![Netlify Status](https://api.netlify.com/api/v1/badges/13cabc4d-5c9e-4064-b638-a0a4f71f0279/deploy-status)](https://app.netlify.com/sites/weather-app-wm/deploys)

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- **Node.js (v18.12.1)**: Make sure you have Node.js version 18.12.1 or a later version installed. You can download it from the [official Node.js website](https://nodejs.org/).

- **Yarn**: Ensure you have Yarn installed as your package manager. You can [install Yarn from here](https://classic.yarnpkg.com/en/docs/install).

- **Dependencies**:

  - axios: ^1.5.1
  - dayjs: ^1.11.10
  - lodash.debounce: ^4.0.8
  - vue: ^3.3.4

These are the prerequisites to run the Weather App successfully.

## Installation

Get started with the Weather App by following these simple steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shaarkr/weather-app.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd weather-app
   ```

3. **Install dependencies:**

   ```bash
   yarn install
   ```

4. **Set up your API credentials:**

   - Create an account at [Free Weather API - WeatherAPI.com](https://www.weatherapi.com/).
   - Obtain your API key and add it to the `.env` file in the root directory:

     ```plaintext
     VITE_APP_API_KEY=your-api-key-here
     ```

5. **Run the application:**

   ```bash
   yarn dev
   ```

6. **Access the application:**

   Open your web browser and go to [http://localhost:5173](http://localhost:5173).

## Usage

- On the homepage, you can enter the name of a city in the search box.
- Upon searching, you'll see a list of cities that match your search.
- Click on a city in the list to view weather details in the sidebar.

## Features

- **City Weather Information**: Search for detailed weather information in various cities.
- **Temperature and Conditions**: View temperature and current weather conditions for the selected city.
- **Error Handling**: User-friendly error messages are displayed if there's an issue with the API request.
- **Responsive Design**: The application is designed to be responsive and mobile-friendly.

## Contributing

We welcome contributions to enhance this Weather App. Here's how you can contribute:

1. **Fork the repository on GitHub**.
2. **Clone your fork locally**.
3. **Create a new branch for your feature or bug fix**.
4. **Make your changes and commit them**.
5. **Push your changes to your fork on GitHub**.
6. **Open a pull request to the main repository**.

Your contributions are appreciated, and we encourage your participation in improving this project!

## License

This project is licensed under the [MIT License](LICENSE). You have the freedom to use, modify, and distribute it as needed. Enjoy using the Weather App!
