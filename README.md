# mapbox-aviation-demo

## Quick and simple heroku guide

(Note: There is an issue with `yo angular-fullstack:heroku`. Follow these steps instead.)

1. `git clone https://github.com/brentlemons/mapbox-aviation-demo.git`

2. `cd mapbox-aviation-demo`

3. `npm install`

4. `bower install`

5. `heroku create <your-creative-name>`

6. `heroku addons:create mongolab` (`--app <your-creative-name>`, if necessary)

7. `gulp build`

8. `cd dist`

9. `git init`

10. `heroku git:remote -a <your-creative-name>`

11. `gulp buildcontrol:heroku`

You're in business!


## About this project

This is a simple project to demonstrate the ability to use [mapbox-gl-js][https://github.com/mapbox/mapbox-gl-js] in an angular app. It seeds a few airports into mongo and makes them accessible through `/api/airports`. The client app has a service that calls the endpoint and plots the geojson response.

### Todo:

- Add click listener to each geojson feature
- Add weather service to grab current METAR and TAF for the requested airport
- On click, call the weather service and display response on screen (modal or sidebar)
- ??Airport filtering??


This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.5.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
