## JSON API BoilerPlate
#### Node.js, node-restful, Express, MongoDB, Backbone, Handlebars, SASS

######Requirements
* Node/ NPM
* MongoDB

###### Install the dependencies
`npm install`

###### Use Grunt to start MongoDB, Server and Grunt
`grunt server`

###### Access localhost
*http://localhost:3000*

###### Check to see if API is working
*http://localhost:3000/api/test-model*

## TROUBLESHOOTING

#### MongoDB - after installation
######Error Message: says there is no /data/db folder run:
`sudo mkdir -p /data/dbcd`

######Error Message: Unable to create/open lock file: /data/mongod.lock errno:13 Permission denied
`sudo chown -R `id -u` /data/db`
