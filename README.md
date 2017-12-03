# sizing-exercise-data-generator
Data Generator for December 2017 Sizing Exercise

## Getting Started
### Create .env with configuration settings
To get started, copy the example env-example.txt file to .env

```
cp env-example.txt .env
```
Check the following variables and tailor them for your specific test environment.

```
DBHOST=localhost
DBUSER=YOURNAME
DBPASS=YOURPASS
DBNAME=verizon
DBPORT=27017
DBAUTH=admin
COLLNAME=surveys
DEBUG=true
HOWMANY=10000
```

### Install dependencies 
```
npm install
```

### Make sure you've got MongoDB running
### Give it a whirl
```
node generator.js
```
### Here's an example run
![Example Run](https://github.com/mrlynn/sizing-exercise-data-generator/blob/master/generator.gif)
