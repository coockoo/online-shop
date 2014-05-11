/**
 * Created by coockoo on 5/10/14.
 */

define([
    'underscore'
    ], function (_) {
        function Config () {
            this.urlRoot = 'http://localhost:8080/shop/api';
        }
        return new Config();
    }
);
