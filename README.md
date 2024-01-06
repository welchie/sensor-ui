# Sensor-UI Building React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Set /Build

Install npm
 - MAC: 
   - `brew install npm`

Install react
 - `npm install react`
 

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

## Docker
Edit the `docker-build.sh` file to select the appropriate version

e.g
`docker image build -t welchie99/sensor-ui:0.0.2-SNAPSHOT .`

### To build
`./docker-build.sh`

Once built check for the image

`docker images`

<table>
    <tr>
        <th>REPOSITORY</th>
        <th>TAG</th>
        <th>IMAGE ID</th>
        <th>CREATED</th>
        <th>SIZE</th>
    </tr>
    <tr>
        <td>welchie99/sensor-ui</td>
        <td>0.0.2-SNAPSHOT </td>
        <td>0bc9b3a0f99</td>
        <td>33 seconds ago</td>
        <td>861MB</td>
    </tr>
</table>

### Run docker locally
`docker run -p 3000:3000 sensor-ui:0.0.2-SNAPSHOT`

OR

`./docker-run.sh`

### Deploy to docker hub
You will need to be logged into `https://hub.docker.com/`

`docker push welchie99/sensor-ui:0.0.2-SNAPSHOT`



