/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'models/product'
    ], function (Backbone, Product) {
        var ProductCollection;
        ProductCollection = Backbone.Collection.extend({
            url: function () {
                return 'http://localhost:8080/shop/api/products';
            },
            model: Product
        });
        return ProductCollection;

    }
);
