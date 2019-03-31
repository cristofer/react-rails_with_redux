# README

This repo implements the Redux example [found here](https://redux.js.org/basics/example) with [React-Rails](https://github.com/reactjs/react-rails)

## How to test it

In one terminal:

```
bundle install
rails s
```

In another one:

```
./bin/webpack-dev-server
```

Then visit: `http://localhost:3000`

The main component (`Index`) is rendered in the Index view (`app/views/index/index.html.erb`)

## SAGAS

When clicking on a TODO item, in the console you will see the message from `SAGAS` indicating the `id` of the TODO, and after one second the TODO will be TOGGLE.
