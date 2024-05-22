# React Weather App with Vite

This project is a minimal setup template for a weather application built with React and Vite. It provides a setup that enables React to work with Vite, enabling Hot Module Replacement (HMR) and some ESLint rules. The application fetches weather data from the OpenWeatherMap API and displays it with dynamic backgrounds and images based on the weather conditions.

## Features

- Fetches real-time weather data from the OpenWeatherMap API.
- Displays weather information including temperature, humidity, and wind speed.
- Dynamic background and weather images based on the weather conditions.
- Search functionality to find weather information for different cities.
- Loading indicator while fetching data.
- Error handling for city not found.

## Getting Started

To initialize the project, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/<username>/react-vite-weather-app.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd react-vite-weather-app
   ```

3. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Starts the development server using Vite.
- **`npm run build`**: Builds the project for production using Vite.
- **`npm run preview`**: Starts a preview server using Vite, which allows you to preview the project in the browser.
- **`npm run lint`**: Lints the codebase using ESLint with specific configurations.
- **`npm run lint:fix`**: Automatically fixes ESLint warnings.

## Project Structure

The project's overall structure is typical of a modern web application, with a clear separation of source code, assets, and dependencies. The root directory contains essential configuration files, while the `src` directory holds the main application code. The `public` directory is where static assets like images are stored.

### Key Directories and Files

- **`README.md`**: A text file that serves as a project description and instructions for contributors.
- **`index.html`**: The main HTML file that serves as the entry point for the web application.
- **`package-lock.json`** and **`package.json`**: These files manage the project's dependencies and scripts.
- **`vite.config.js`**: A configuration file for the Vite JavaScript build tool.
- **`node_modules`**: A directory containing all the project's dependencies.
- **`public`**: A directory containing static assets, such as `image.png`.
- **`src`**: The main source code directory, containing the following subdirectories and files:
  - **`App.jsx`**: The main application component.
  - **`index.css`**: A CSS file for global styles.
  - **`main.jsx`**: A JavaScript file that may contain additional application logic.
  - **`Components`**: A directory containing reusable UI components, such as `WeatherApp.jsx` and `WeatherApp.css`.
  - **`assets`**: A directory containing various images used in the application, organized into subdirectories.

### Notable Aspects

The organization of the `assets` directory into subdirectories for each type of image (cloudy, loading, rainy, snowy, and sunny) is a notable aspect of the project's structure. This approach helps keep the codebase clean and organized, making it easier to manage and maintain the application.

## Configuration

### API Key

The application uses the OpenWeatherMap API to fetch weather data. You need to provide your own API key. Replace the `api_key` variable in the `WeatherApp` component with your OpenWeatherMap API key.

```javascript
const api_key = "your_openweathermap_api_key";
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
