/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var repositories = {}
    repositories['questions'] = require('./questions').createRepository(options);
    repositories['answers'] = require('./answers').createRepository(options);
    return repositories;
};
