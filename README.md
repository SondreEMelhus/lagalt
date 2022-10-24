# Lagalt Bergen Team Case Period submission october 2022

This is the front end part of our case period submission for the Java Fullstack course at Noroff Bergen. 

Team Members:
- Ulrik Lunde
- Karolie Øijorden
- Sondre Melhus
- Trygve Johannessen

Our Back end git repository 
https://github.com/SondreEMelhus/lagalt-back-end

Our keycloack git repository 
https://github.com/SondreEMelhus/lagaltKeycloak

Our front end app on Heroku:
https://lagalt-java.herokuapp.com/

Our back end api on Heroku:
https://lagalt-java-backend.herokuapp.com/swagger-ui/index.html

If you wish to run the back end api of our application localy:
1) You need to have inteliji, posgres, pgAdmin
2) Clone the spring boot project https://github.com/SondreEMelhus/lagalt-back-end
3) Open postgres, PostgreSQL 14 and create a new database called "lagalt"
4) Open the project in Inteliji, open the application.properties file. Set the database credentials to match you postgres database
5) Run the project in inteliji
6) Open http://localhost:8080/swagger-ui.html

If you wish to run the front end react app of our application localy:
1) You need to have visual studio code, npm and node.js installed
2) Clone the react application https://github.com/SondreEMelhus/lagalt
3) Open the project in visual studio code.
4) Open src/app/component/keycloack/ceycloak.js
5) Change line 3 to: 
    const keycloak = new Keycloak("/keycloak_dev.json");
7) Run npm install
8) Run npm start

Unfortunatly our react application has several hard coded references to the deployment of our back end API on Heroku. We are working to fix this to make it easier to test everyting localy

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
