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

## With SAGAS

In case you are interested to see how this example works with [sagas](https://redux-saga.js.org/), then you can check in the corresponding [branch](https://github.com/cristofer/react-rails_with_redux/tree/redux-saga)
