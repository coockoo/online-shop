/**
 * Created by coockoo on 5/9/14.
 */


require.config({
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    },
    paths: {
        'text': '../../resources/bower_components/requirejs-text/text',
        'backbone': '../../resources/bower_components/backbone/backbone',
        'jquery': '../../resources/bower_components/jquery/dist/jquery',
        'underscore': '../../resources/bower_components/underscore/underscore'
    }
});

require([
    'router'
    ],
    function (Router) {
        console.log('in main');
        new Router();
    }
);
