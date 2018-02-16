# Tracker

First project for the course "Topicos especiales en telematica"


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

to run this project locally you must have installed, NOTE: this was deployed in
linux enviroment , specially ubuntu 16.04.

* [npm and node](https://docs.npmjs.com/getting-started/installing-node) - The web framework used
* [mongodb](https://docs.mongodb.com/manual/installation/) - database framework



### Installing

A step by step series of examples that tell you have to get a development env running

* clone this repo
```
$git clone https://github.com/Bodhert/Tracker.git
```

* once in the folder, run the next command where the package.json is (this will install all the dependecies for the app)
```
$npm install 
```


* now you could run the project, before run the server check if you have mongod
service running (for ubuntu 16.04: sudo service mongod start) and check that port:3000 is free to use

```
$sudo service mongod start
$node server.js
```

* if everything went rigth you should see the next message

```
todo list RESTful API server started on: 3000
connection with the mongo db successful
```
  else check installation details 


## Running the tests

To test if the app is working , you could do it on your local browser(preferably
Firefox or Chrome), and start exploring the app using the default url that was 
meant to be

http://localhost:3000/

## Deployment

there is already an instance of this app runnig on heroku on the next page

https://floating-spire-26106.herokuapp.com/

if you want to run your own instace of the app check [heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

## Built With

* npm 5.60
* node v8.2.1
* mongod v3.6.2

## Authors

* **Alejandro Cordoba Bodhert** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
