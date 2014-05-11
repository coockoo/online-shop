/**
 * Created by coockoo on 5/11/14.
 */

define([
    'backbone',
    'collections/product',
    'config'
    ], function (Backbone, ProductCollection, config) {
        var Order;
        Order = Backbone.Model.extend({
            initialize: function (options) {
                this.products = new ProductCollection(options?options.products?options.products:[]:[]);
            },
            defaults: {
                district: "",
                city: "",
                street: "",
                house: "",
                apartment: "",
                email: "",
                phone: ""
            },
            urlRoot: function () {
                return config.getUrlRoot() + '/orders';
            }

        });
        return Order;
    }
);
