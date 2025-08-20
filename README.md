# André Pont De Anda - Portfolio Website

A modern, responsive portfolio website built with React featuring Conway's Game of Life background animation.

## Features

- Interactive Conway's Game of Life background
- Smooth scrolling navigation between sections
- Responsive design for all device sizes
- Google Analytics integration for visitor tracking
- SEO optimized with proper meta tags

## Deployment

This portfolio is deployed using a personal VPS (Virtual Private Server) infrastructure with the following stack:

- **VPS Hosting**: Personal cloud server for full control and customization
- **Nginx**: Dockerized reverse proxy and web server for efficient request handling
- **Docker**: Containerized deployment for consistent environments and easy scaling
- **Domain**: Available at [andrepont.dev](https://andrepont.dev)

The deployment architecture leverages Docker containers managed through Nginx for optimal performance, security, and maintainability. This setup allows for seamless deployment of multiple applications and provides enterprise-level hosting capabilities.

## Analytics Setup

This portfolio includes Google Analytics tracking. To enable it:

1. See `ANALYTICS_SETUP.md` for detailed instructions
2. Create a `.env` file with your Google Analytics Measurement ID
3. Deploy your site and verify tracking works

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
