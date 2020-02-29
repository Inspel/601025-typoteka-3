'use strict';

const {Router} = require(`express`);
const homeRoute = new Router();

homeRoute.get(`/`, (req, res) => res.send(`/`));

module.exports = homeRoute;
