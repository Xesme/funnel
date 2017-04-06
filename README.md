# Funnel

## Created by Xia Amendolara and Philip Putnam

## Description

Funnel is a crowdsourcing web application created at Epicodus. It allows users to login using their google account, and view current projects. It allows users to post, edit, and delete projects they have posted.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## User Story

* As a user, I want to see a list of all projects, ideas, and charitable acts that are seeking funding.

* As a user, I want to click a project to see more details.

* As a user, I'd like to know the details of a project before I decide whether to fund it. Including things like a name, the project starters/managers, a description, the amount of money the project is hoping to raise, what they'll do with the funds raised, and whether I get any cool swag or rewards for funding a project.

* As a user, I want to be able to filter projects as I browse them. Perhaps by the amount of funding they still require, or whether they're charitable acts, ideas for products, or other.
As a user, I want to click a button or fill out a form to fund a project.

* As a user, I want the option to post my own project or charitable act that seeks funding.

* As an administrator, I want to add, update, or delete projects as necessary. (User authentication is not required).

* As a user, as the site grows I want ideas, projects, and charitable acts to be separate types of objects, each residing on their own page. Things like charitable acts might have different types of properties/details than companies seeking startup funding, too.

* As a user, I want to select a category to view a page containing all projects in that category.

##  Configuration/Dependencies

    * NPM (Development)

    * @angular/cli (Populates  an Angular application)

    * @angular/compiler-cli (Compiles TypeScript into JavaScript in which browsers can understand)

    * Jasmine - core, spec-reporter  (Behavior-driven development framework for testing JavaScript code)

    * Node (JavaScript runtime built on Chrome's V8 JavaScript engine)

    * ts-node (TypeScript execution environment for node)
    * typescript (A superset of JavaScript that compiles to clean JavaScript output)

    * codelyzer (Helps write consistent code, and discover potential errors)

    * gulp-concat (concatenates files into one)

    * karma - chrome-launcher, cli, jasmine, jasmine-html-reporter, coverage-istanbul-reporter (Allows you to execute JavaScript code in multiple real browsers)

    * protractor (end-to-end test framework for Angular and AngularJS applications)

    * tslint (Checks your TypeScript code for readability, maintainability, and functionality errors)

    * bower (Production)

    * Bootstrap

    * Firebase (data management)

    ## Implementation Plan  

| Objective | Implementation | Status |
|:-------------:|:-------------:|:-------------:|
| Create a new project | follow Configuration/dependencies | completed |
| Application has a well thought out README | Set up README with implementation plan and all other necessary information. | completed |
| Create seed for firebase | projects.json | complete |
| Application has imported firebase | ( "title": , "authors": ["$key"], "synopsis":, "description":, "img":, "goal":, "deadline":, "post-date") | complete |
| Create routing | $ touch app.router.ts | complete |
| Route to homepage(splash) in navbar | <a (routerLink)="/"> | complete |
| Create service for project | $ ng g service project.service | complete |
| Implement ProjectService | import ProjectService | complete |
| Retrieve data from firebase | Import FirebaseListObservables<any[]> and add to constructor(s) private  angularfire: AngularFire (in service as well as .ts files using the service) | complete |
| Create components | ( splash, login, user-page, project-page, new-project ) | started (splash, login, user-page )|
| Implement routing for all components | add to routes to router.ts and module.ts | incomplete|
| Create user authorization | implement angular 2 Oauth | complete |
| Create route for new-project from user-page | add button for new-project form on user-page | complete |
| Implement post request to Firebase  (form on component new-project) | push to firebase (new project)| complete |
| Create dynamic routing between components | get project by $key | complete |
| Create dynamic routing for user-page |  use the $key provided by Oauth | complete |
| Query the database for AuthorID | Add query to ProjectService | complete | 
| Create one to many relationship for new project form | update firebase and created the one to many relationship using the userId | incomplete |
| Create pipe for generating projects on the splash page and user-page | $ng g pipe project.pipe | incomplete |
| Create form for updating projects | project-page (? admin project-page) | incomplete |
| (Extra) Project is portfolio-quality | Removed unnecessary code and use SASS or CSS for styling | incomplete |


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Bugs

There are no known bugs at this time.

## Technologies Used
* JavaScript
* TypeScript
* Angular 2
* Node
* Bower
* Bootstrap
* HTML
* CSS
* Git
* FireBase

## Licensing

This application features MIT licensing.

Copyright &copy; 2017 **Xia Amendolara and Philip Putnam** All Rights Reserved.
