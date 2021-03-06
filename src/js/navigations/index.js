/*jslint node: true, nomen: true */
"use strict";

exports.createNavigations = function (options) {
    return {
        'system-event-back-7': require('./system-event-back-7').createNavigation(options)
        ,'system-event-back-3': require('./system-event-back-3').createNavigation(options)
        ,'event-update-level-1-done': require('./event-update-level-1-done').createNavigation(options)
        ,'system-event-back-6': require('./system-event-back-6').createNavigation(options)
        ,'event-question-explanation-continue': require('./event-question-explanation-continue').createNavigation(options)
        ,'event-save-settings': require('./event-save-settings').createNavigation(options)
        ,'system-event-back-0': require('./system-event-back-0').createNavigation(options)
        ,'system-event-qr-decode': require('./system-event-qr-decode').createNavigation(options)
        ,'selected-card-answer': require('./selected-card-answer').createNavigation(options)
        ,'event-random-question-2-done': require('./event-random-question-2-done').createNavigation(options)
        ,'system-event-back-5': require('./system-event-back-5').createNavigation(options)
        ,'event-card-explanation': require('./event-card-explanation').createNavigation(options)
        ,'event-random-question-1-done': require('./event-random-question-1-done').createNavigation(options)
        ,'event-home-decode-a-card': require('./event-home-decode-a-card').createNavigation(options)
        ,'event-question-result-continue': require('./event-question-result-continue').createNavigation(options)
        ,'event-read-card-done': require('./event-read-card-done').createNavigation(options)
        ,'event-save-settings-done': require('./event-save-settings-done').createNavigation(options)
        ,'system-event-back-4': require('./system-event-back-4').createNavigation(options)
        ,'system-event-back-1': require('./system-event-back-1').createNavigation(options)
        ,'selected-question-answer': require('./selected-question-answer').createNavigation(options)
        ,'system-event-back-2': require('./system-event-back-2').createNavigation(options)
        ,'event-home-single-player': require('./event-home-single-player').createNavigation(options)
        ,'event-load-settings-done': require('./event-load-settings-done').createNavigation(options)
        ,'event-update-level-2-done': require('./event-update-level-2-done').createNavigation(options)
        ,'event-home-settings': require('./event-home-settings').createNavigation(options)
        ,'event-random-question-3-done': require('./event-random-question-3-done').createNavigation(options)
        ,'event-question-explaination': require('./event-question-explaination').createNavigation(options)
    };
};
