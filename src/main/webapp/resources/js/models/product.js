/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone'
    ], function (Backbone) {
        var Product;
        Product = Backbone.Model.extend({
            urlRoot: function () {
                return 'http://localhost:8080/shop/api/products';
            }
        });
        return Product;


    }
);
