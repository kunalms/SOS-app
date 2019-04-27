# Kaleyra Aid App


Kaleyra Aid app is a light web-based tool that leverages the kaleyra API for messaging and voice.
Some of the key features of Kaleyra Aid app are as under
  - Light weight
  - User friendly
  - supports on all devices (mobile/ desktops)

Kaleyra Aid app uses a number of open source projects to work properly:

* [Node.js](https://nodejs.org/) - evented I/O for the backend
* [Express](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Angular](https://angular.io/) - Angular is a TypeScript-based open-source web application framework 
* [Mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js
* [MongoDB](https://www.mongodb.com/) - MongoDB is a cross-platform document-oriented database program.
* [Npm](https://www.npmjs.com/) - npm is a package manager for the JavaScript programming language
* [Angular Material](https://material.angular.io/) - Material Design components for Angular
* [Nodemon](https://www.npmjs.com/package/nodemon) - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [Requests](https://www.npmjs.com/package/request) - Request is library that helps you make http calls.

### How to use 
 The Kaleyra is hosted on Google cloud's compute engine instance
 you can access it by clicking [here](http://35.240.246.244:3000).
 
 The steps to use the app are very simple
 - on the home screen, you can see all your contacts that you have added 
 - you can update the already added contacts or delete them if needed.
 - you can select the user by clicking on the card
 - the card has a call option and a message option. on clicking either of them you can call or message the respective person.
 - besides this, there is a history tab that helps you keep track of all your previous activities 
 - everything is stored on a Mongo DB instance hosted online.

besides the online instance of the App, you can install it on your local machine and run it locally the steps to run the application locally are as under

#### Local Installation

Kaleyra Aid app requires [Node.js](https://nodejs.org/) (ideal choice of version would be v8+) to run.

unzip the folder submitted and go to the root folder.

Install the dependencies and devDependencies for both backend and frontend and start the server.

For running the code (recommended way to run the application)

```sh
$ cd <root folder>
$ npm install
$ npm run installDependecies
$ npm run startDev
```

For production environments (might be buggy as it is not tested yet)

```sh
$ cd <root folder>
$ npm run installDependeciess
$ npm install
$ npm run startProd
```

