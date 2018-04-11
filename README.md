# Angular Starter

[![CircleCI](https://circleci.com/gh/thisissoon/angular-starter.svg?style=shield)](https://circleci.com/gh/thisissoon/angular-starter)
[![Coverage Status](https://coveralls.io/repos/github/thisissoon/angular-starter/badge.svg?branch=master)](https://coveralls.io/github/thisissoon/angular-starter?branch=master)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Making Commits

This repo uses [Commitizen CLI](http://commitizen.github.io/cz-cli/) and [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog) to create commits and generate changelogs. Instead of running `git commit` run `git cz` and follow the prompts. Changelogs will then be generated when creating new releases by running `npm run release`.

## Making Releases

Run `npm run release` to create a new release. This will use [Standard Version](https://github.com/conventional-changelog/standard-version) to create a new release. [Standard Version](https://github.com/conventional-changelog/standard-version) will generate / update the changelog based on commits generated using [Commitizen CLI](http://commitizen.github.io/cz-cli/), update the version number following semantic versioning rules and then commit and tag the commit for the release. Simply run `git push --follow-tags origin master`.
