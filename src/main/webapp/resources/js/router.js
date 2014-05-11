/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'controllers/product',
    'controllers/cart'
    ], function (Backbone, ProductController, CartController) {
        var Router;
        var productController = new ProductController();
        var cartController = new CartController();
        Backbone.Events.on('cart:add', cartController.add);
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
