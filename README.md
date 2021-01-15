# Sedentary Savior

This project is currently in progress. Information in this README is subject to change and is a guide for the direction of the application.

## Development

To get this application into a development environment do the following:

- clone repo and cd into it
- run 'npm install'
- run 'npm start'

* To view the application as a chrome extension perform the previous steps then:

- run 'npm run build'
- open 'chrome://extensions'
- toggle Developer mode on
- click 'Load unpacked'
- navigate to the directory containing the application files
- select the build folder

* After this point running 'npm run build' should update the extension each time a change is made

## Features

- stripe
- augmented reality (AR.js)
- cookies (no database)
- exercise API
- browser notifications and service workers

## Schema

Because of the reliance on cookies for data storage and persisitance - the schema is intended to be lightweight.
