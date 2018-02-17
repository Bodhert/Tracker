# Tracker

First project for the course "Topicos especiales en telematica"


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

to run this project locally you must have installed, NOTE: this was deployed in
linux enviroment , specially ubuntu 16.04.

* [npm and node](https://docs.npmjs.com/getting-started/installing-node) - The web framework used
* [mongodb](https://docs.mongodb.com/manual/installation/) - database framework




### Design

## Data
Everything that is going to be store is in schema format , example : \
```
   {
        username: String,
        latitude: Number,
        longitude: Number,
        Created_date:
            {
                type: Date,
                default: Date.now
            },
    });
```

## Web services
web service: get method for testing the api('/test1')
web service: loads the html related to the gps frontend('/gps')
web service: get method for bringing the location for the specified user('/gps/:username')
web service: post method for storing current location('/save_location')
web service: get method that brings all the locations in the db ('/bring_all_locations')
web service: ('/')
web service: post,get method that creates or brings the profile('/_profile')
web service: delete current session (cookie)('/logout')
web service: brings the name of the user('/current_user')

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

### Execution
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

* it is possible to run it in apache if you want for more look at:
[apache](https://devops.profitbricks.com/tutorials/how-to-set-up-ip-and-port-based-virtual-hosting-vhosts-with-apache-web-server-on-centos-7/) -- 
[centos7](https://www.phusionpassenger.com/library/walkthroughs/deploy/nodejs/digital_ocean/apache/oss/el7/deploy_app.html) -- centos apache config


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

* **Alejandro Cordoba Bodhert** 

* feel free to mail me at: alejandro.cordoba.bodhert@gmail.com, I would be a pleasure
to answer you!!

