# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To work with this website, you'll need the following:
### Node.js
You can download and install Node.js from https://nodejs.org/en/download.

### NPM
Though NPM is automatically included in the Node.js package, it needs to be installed to your project.  
1. Navigate to the repository folder (the one immediately above the /src/ folder)
2. Open terminal, git bash, or cmd at this location
3. Run the command "npm install"

### SQLITE3
If you're more of a UI kind of person, you can download and install SQLite from the open source website:  https://www.sqlite.org/download.html

Alternatively, you can download and install it using terminal, cmd, or git bash:
- `npm install sqlite3`

### CORS
CORS is a package used for enabling Cross-Origin Resource Sharing in Express.js applications, which allows you to make requests from one domain to another domain in the browser.
1. Navigate to the directory where your database.js script is located.  (This is the \database\ folder, directly underneath \src\)
2. Run the following command to install the cors package:
-- `npm install cors`

### AXIOS
AXIOS is a popular JavaScript library used for making HTTP requests from a web browser or Node.js.  You can install it using NPM, like with other packages
1. Run the following command to install AXIOS:
-- `npm install axios`

## Available Scripts

To boot up our website, you'll need to run two different terminals.  One will host our website, and the other will host the SQLite database.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `node database.js`

Runs the SQLite database.
You will either need to navigate to the /database/ folder with terminal before running this command, or include the folder path from the current location.

For example, if you open terminal in the /src/ folder, you could run the command like this:
node .\Database\database.js


## Additional Scripts and Tools

In addition to building and running the website, you can also use the commands below to execute test cases, build the app, check for issues, and many other things.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
