/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var repositories = {}
    repositories['answers'] = require('./answers').createRepository(options);
    repositories['questions'] = require('./questions').createRepository(options);
    return repositories;
};
