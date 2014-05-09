/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'controllers/product'
    ], function (Backbone, ProductController) {
        var Router = Backbone.Router.extend({
            routes: {
                '!/': 'showRoot',
                '!/products': 'showProducts'
            },
            initialize: function () {
                var productController = new ProductController();
                this.on('route:showRoot', function () {
                });

                this.on('route:showProducts', function () {
                    productController.showProducts();
                })
            }
        });
        Backbone.history.start();

        return Router;

    }
);
