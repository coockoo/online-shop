/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'config'
    ], function (Backbone, config) {
        var Product;
        Product = Backbone.Model.extend({
            urlRoot: function () {
                return config.getUrlRoot() + '/products';
            }
        });
        return Product;


    }
);
