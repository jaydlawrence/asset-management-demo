# Asset Management

This project was done as a technical test.

## The spec

### Frontend technical test

In this test you will develop a simple web app to create and manage assets. You are free to make any assumption you consider, as long as you comment it properly. There is no
graphical specification, or desired layout, feel free to make your own design choices in order to provide something simple, modern and sleek.

### Use case

The user will have the ability to create an asset, modify and delete it. Also, he will have the
ability to view the list of all assets stored in the system. Bonus points:
- filter the asset list based on asset type
- sort the asset list alphabetically (ascending and descending).

### Asset

Assets are equipments of various types like cars, phones, printers, ....
The web app must be able to work with different types of assets.
Every asset has at least a name (only alphabetical characters), a type and a quantity.
Depending on the asset type, it could also have additional, non mandatory, values that can
be filled and modified by the user.

### System, Environment & Technology

The purpose is to create a web application using Angular. We recommend using the
command line tool Angular CLI to get started quickly. Your app should be able to
communicate with an external database, via a RESTful API that you can mock using fake
data.

## Implementation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

I started this project having never used Angular before.
I started with the [Angular Tour of Hereos tutorial](https://angular.io/tutorial).

I read through the tutorial and it looked like I could use a lot of the same functionality for my app.

I initially tried an [Angular Material Starter project](https://github.com/tomastrajan/angular-ngrx-material-starter) to get up and going quickly on a project that already looks good (as the frontend styling and design is not my main strength). After messing with it for a while, I realised it had too much functionality that I didn't need and decided to go back to the Tutorial.

From there I built this app in a similar way to the tutorial, looking up the bits that weren't covered, but that I new that I needed.

Once the functionality was covered, I decided to use [material ui](https://material.angular.io/) to style it, as I love material design and I had used something similar in a previous react app. The styling was fairly straight forward as I mostly used their components with small tweaks here and there.

It is a basic app and the styling is very simple, but I thought it covered the spec, and didn't want to sink even more time into it at this point. In a paid role, this would be the point at which I would take it to the project owner and ask for feedback, etc. So I was happy to leave it there.

A note on the lack of comments.
I subscribe to the philosophy that comments are a waste of time as they become out of date too quickly and also that neatly written code with sensible naming doesn't need comments.

## Development server

### Setting up

Make sure you have node and npm installed

Install angluar CLI globally to be able to run the `ng` commands below.

```
npm install -g @angular/cli
```

Also install the dependencies for this project

```
npm install
```

### Running the server

Run `ng serve` for a dev server (add `--open` to the end of it to have it open the page in the browser for you). Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
