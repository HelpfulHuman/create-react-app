# Helpful React Scripts

##### Usage:

`npm i create-react-app -g`<br>

`create-react-app my-app --scripts-version helpful-react-scripts`

##### This package is modified to include the following additional functionality:

###### Accessibility Tools
- `react-aXe`

###### React Addons
- `classnames`
- `prop-types`

###### React Router
- `react-router-dom`

###### Redux
- `redux`
- `react-redux`
- `redux-thunk`
- `redux-logger`

###### Stylus
- `stylus`
- `poststylus`
- `stylus-loader`

###### Gzip
- `compression-webpack-plugin`

### Roadmap:
###### Fontloader
###### Configure ESLint Rules
###### Explore perf optimizations
- `webpack-bundle-analyzer`
###### Animated Page Transitions
- `react-transition-group`
- `animated`

---
Migrating from `1.0.9` to `1.0.10`

Inside any created project that has not been ejected, run:

npm install --save --save-exact react-scripts@1.0.10

---
We plan to stay up to date with create-react-app as often as possible.

Note: This package is maintained for our specific needs at Helpful Human and while feature requests are encouraged, they may not align with the needs of Helpful Human.

Note: There is a problem with Stylus reporting error locations correctly in `Node v7.x.x^`. Use Node v6.x.x to remedy.

For additional information, please refer to the following documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.
