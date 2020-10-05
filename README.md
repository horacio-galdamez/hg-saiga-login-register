# hg-saiga-login-register

## Summary
This is a very small and simple demo of a login and registrations screens, to submit for Saiga GmbH.

## Demo Features
* Ease of switching between login and registration screens
* Form validations
* Authentication mock workflow
* UI Responsiveness for mobile

## Tech Stack Used
* Vue.js as a front-end framework
* Vuex as a state management tool. Maybe overkill for such a small project but wanted to show I can use Vuex!
* Vue Router to handle SPA redirection (and also checking for user tokens before entering a particular URL)
* Vuetify as a component framework for the UI

## Observations
* I split the login and registration screens into components that were children for a parent component called Authentication.vue. This is a valid real life case, but in practice, this can be done way more efficiently by the use of props and dynamic component rendering possible through Vue, but I wanted to showcase my knowledge of components and how to break entire UIs into smaller components for better code maintenance.
* Google Chrome has a behavior in which it attempts to auto-correct fields, but destroys their CSS completely. The Vuetify docs themselves say its a chrome bug and will not be solved on their side.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
