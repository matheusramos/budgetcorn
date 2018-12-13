# Budgetcorn :unicorn:

You personal budget manager with a little magic :unicorn:

## Dev

Install dependencies running

```
yarn
```

then, run the app with

```
yarn start
```

You could use **npm**, but it would ignore the lockfile and the project could just not run properly.

### Static typing

We use [flow](http://flow.org) for static typing.

There's also a `precommit` script to run flow before of each commit. You can bypass it with the `--no-verify` option, but it is recommended not to do it.

### Lint

Oh, there is a lot of opinionated lint rules here, check it out:

- jest/recommended
- react-app
- airbnb
- prettier
- strict-flowtype

Lint errors **will not break development**, they will only be shown on your editor. However, once
you commit the code, eslint will run on staged files and it may **fail the commit** if some rule
is broken.

### prettier

Why worry about code style if the machine can do it for us, right?

If you're using VSCode you can install the [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
and automatically format code on save by adding the following rule in your `.vscode/settings.json` file:

```json
"editor.formatOnSave": true
```

If you don't care for it, no worries. The code will be formatted before commiting.

### Test

To test, run

```
yarn test
```

for test coverage report, run

```
yarn coverage
```

and then check the `coverage/` dir for the report.

### Build

To build, run

```
yarn build
```

You can find the build app at the `build/` directory.

## Architecture

This app is bootstraped with [create-react-app](https://github.com/facebook/create-react-app).

### Redux and Ducks

For state management, we use redux with the [re-ducks architecture](https://github.com/alexnm/re-ducks). They can be found at `src/ducks`.

Also, it tries to follow the [container/component](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) as much as possible.

### IndexedDB

We are using native [IndexedDB](https://developers.google.com/web/ilt/pwa/working-with-indexeddb) to store data. To migrate to something else we will need to refactor `src/api/transaction.js` file.

### Tests

The app is not thoroughly tested, but we use

- jest: for general testing
- react-test-renderer: for component testing

It's okay to use **snapshot testing** for really simple dummy components.

### Styling

#### Bulma

We user [Bulma](https://bulma.io) as a CSS framework. As it is modular by nature, only import
what you'll use.

#### Sass

`node-sass` + CRA 2.0 make sass support very easy. Here we are using it for global styling and
to import Bulma sass files.

#### styled-components

For component styling we use [styled-components](https://www.styled-components.com/).

#### Colors

We try as much as possible to use unicorn colors. Bulma palettes are pretty close to that.
We just added a pink secondary color (#ff639b) to make it more complete.

#### icons

Awesome icons from [Font awesome](https://fontawesome.com/). Use it with `@fortawesome/react-fontawesome`.

## TODO

- Add button should get position fixed if list of transactions is greater than browser height
- Edit and delete should not be a problem to implements since redux + api + formik are ready
- Responsiveness could be reviewed. App is looking too mobile on desktop.
- Add more unicorns
- i18n
- Currency are all in dollar, needs localization.
- Default input date looks good on native mobile picker (not so much on desktop browsers)
