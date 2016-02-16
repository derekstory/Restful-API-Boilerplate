## JSON API BoilerPlate
#### Node.js, node-restful, Express, MongoDB, Backbone, Handlebars, SASS

#### Requirements
* Node/ NPM
* MongoDB

#### Install the dependencies
* npm install

#### Make a directory to store MongoDB data
* mkdir /tmp/data

#### Start the DB
* mongod --dbpath /tmp/data

#### Start Grunt Watch
* grunt watch

#### Start the server
* node server.js

#### Access localhost
http://localhost:3000

#### Check to see if API is working
http://localhost:3000/api/test-model

#### Based off: Building a RESTful API in 5 Minutes
[https://www.youtube.com/watch?v=p-x6WdwaJco](https://www.youtube.com/watch?v=p-x6WdwaJco)



## TROUBLESHOOTING

#### MongoDB - after installation
Error Message: says there is no /data/db folder run:
* sudo mkdir -p /data/dbcd

Error Message: Unable to create/open lock file: /data/mongod.lock errno:13 Permission denied
* sudo chown -R `id -u` /data/db
