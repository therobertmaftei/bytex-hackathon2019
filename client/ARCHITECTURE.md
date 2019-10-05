# NgrxArch

## TechStack

* [Angular 9](https://angular.io)
* [Material Design](https://material.io/design/)
* [Angular Material](https://material.angular.io/)
* [Bazel](https://docs.bazel.build/versions/0.28.0/bazel-overview.html)
* [RxJS](https://rxjs-dev.firebaseapp.com/)
* [NgRx](https://ngrx.io)
* [immutableJS](https://immutable-js.github.io/immutable-js)
* [memo-decorator](https://www.npmjs.com/package/memo-decorator)
* [moment](https://momentjs.com/)
* [ngx-translate](https://github.com/ngx-translate/core)
* [SCSS](https://sass-lang.com) - recommended by Angular Team
* HTML
* [Jest](https://jestjs.io/en/)

## Todo

* add prepush hooks (eslint and unit tests)
* write flow documentation
* write unit testing documentation
* add [Bazel](https://docs.bazel.build/versions/0.28.0/bazel-overview.html) to improve build time


## Architecture Documentation

### Angular 9

#### Cheat Sheet

* [Angular Official Cheat Sheet](https://angular.io/guide/cheatsheet)

#### Style Guide

* [Angular Official Style Guide](https://angular.io/guide/styleguide)

#### Best Practice

* [Angular Development Best Practices](https://code-maze.com/angular-best-practices/) by Code Maze
* [Clean Code Checklist in Angular](https://itnext.io/clean-code-checklist-in-angular-%EF%B8%8F-10d4db877f74)
* [Best Practices for Writing Angular Apps](https://blog.usejournal.com/best-practices-for-writing-angular-6-apps-e6d3c0f6c7c1)

### Bazel

Bazel offers the following advantages:

* **High-level build language**. Bazel uses an abstract, human-readable language to describe the build properties of your project at a high semantical level. Unlike other tools, Bazel operates on the concepts of libraries, binaries, scripts, and data sets, shielding you from the complexity of writing individual calls to tools such as compilers and linkers.
* **Fast and reliable**. Bazel caches all previously done work and tracks changes to both file content and build commands. This way, Bazel knows when something needs to be rebuilt, and rebuilds only that. To further speed up your builds, you can set up your project to build in a highly parallel and incremental fashion.
* **Scales**. Bazel maintains agility while handling builds with 100k+ source files. It works with multiple repositories and user bases in the tens of thousands.
* **Extensible**. Many languages are supported, and you can extend Bazel to support any other language or framework.

#### Documentation

* [Official](https://docs.bazel.build/versions/0.28.0/bazel-overview.html)

### RxJS

#### Documentation

* [Lean RxJS](https://www.learnrxjs.io/)
* [Angular RX](https://angular.io/guide/rx-library)
* [Marbles](https://rxmarbles.com/)

### NgRx

At the moment, Angular can use 4 solutions for store and share the data between components and modules.

1. [Services (DI)](https://angular.io/guide/architecture-services)
2. [NgRx](https://ngrx.io/)
3. [ngrx-data](https://github.com/johnpapa/angular-ngrx-data)
4. [Observable Store](https://github.com/DanWahlin/Observable-Store)

| Goal | NgRx | ngrx-data | Observable Store | Services |
|---|---|---|---|---|
| Simple | No | Yes | Yes | Yes |
| Scalability | Yes | Yes | No | No |
| Flexibility | Yes | No | No | Yes |
| Provides Store | Yes | Yes | Yes | No |
| Immutable Data | Yes | Yes | Yes  | No |
| State History | Yes | Yes | Yes | No |
| Change notifications | Yes | Yes | Yes | No |
| State History | Yes | Yes | Yes | No |
| Debugging | Yes | Yes |  No | No |

#### Style Guide

* TBD

#### Best Practice

* [AngularConnect 2017](https://www.youtube.com/watch?v=FQ6fzkHvCEY) - Victor Savkin

### immutable.js

 [immutable.js](https://immutable-js.github.io/immutable-js/) offer the tools to update the state in a simple way without deconstructing the state

* `getIn`, `setIn`, `updateIn`, `removeIn` type safe [immutable.js issue](https://github.com/immutable-js/immutable-js/issues/1462) and [typescript issue](https://github.com/Microsoft/TypeScript/issues/12290) (fixed with `@shared/models/record.interface`)

#### Best Practice

* [Angular 2 with Immutable. JS](https://blog.scottlogic.com/2016/01/05/angular2-with-immutablejs.html)
* [How to use ImmutableJS without going crazy](https://hackernoon.com/how-to-use-immutablejs-without-going-crazy-bfcb805a0043)

### ngx-translate

#### Documentation

* [Official](http://www.ngx-translate.com/)

### Jest

A delightful JavaScript Testing Framework with a focus on simplicity.

#### Documentation

* [Official](https://jestjs.io/docs/en/getting-started)

#### Guide

* [Angular testing](https://angular.io/guide/testing)
