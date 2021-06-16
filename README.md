# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and are using [JSON Server](https://github.com/typicode/json-server) to serve a simple REST API

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn server`

Runs JSON Server for a simple REST API.\
Open [http://localhost:5000](http://localhost:5000) to start using it.\

To get all tasks, simply make a GET request to [http://localhost:5000/tasks](http://localhost:5000/tasks).\
To get a task, make a GET request with the task id to [http://localhost:5000/tasks/{id}](http://localhost:5000/tasks/{id}).\
To add a task, make a POST request with the task json object to [http://localhost:5000/tasks](http://localhost:5000/tasks).\
To delete a task, make a DELETE request with the task id to [http://localhost:5000/tasks/{id}](http://localhost:5000/tasks/{id}).\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
