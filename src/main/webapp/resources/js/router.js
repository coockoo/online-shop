/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'controllers/product'
    ], function (Backbone, ProductController) {
        var Router;
        var productController = new ProductController();
        Router = Backbone.Router.extend({
            routes: {
                '!/products(/)': 'showProducts',
                '!/products/:id': 'showProduct',
                '!/': 'showRoot',
                '*actions': 'error'
            },
            showRoot: function () {
                console.log('root');
            },
            error: function () {
                console.log('page not found');
            },
            initialize: function () {

                this.on('route:showProducts', function () {
                    productController.showProducts();
                });

                this.on('route:showProduct', function (id) {
                    productController.showProduct(id);

                });

                Backbone.history.start({ root: '/shop/'});
            }
        });


        return Router;

    }
);
