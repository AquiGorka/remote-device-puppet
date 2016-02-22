"use strict";

//
var React = require('react'),
    Router = require('react-router'),
    { Route, NotFoundRoute, DefaultRoute } = Router;

//
var App = require('./app.jsx'),
    Home = require('./modules/home/home.jsx'),
    NotFound = require('./modules/not-found/not-found.jsx');
//
var Puppet = require('./libs/remote-device/puppet.js');
window.onunload = function () {
    Puppet.destroy();
};

//
var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        //
        <NotFoundRoute handler={NotFound} />
    </Route>
);

//
document.addEventListener('DOMContentLoaded', function () {
    Router.run(routes, function (Handler, state) {
        // Google Analytics
        ga('send', 'pageview', { 'page': state.path });
        //
        React.render(<Handler />, document.body);            
    });
});
