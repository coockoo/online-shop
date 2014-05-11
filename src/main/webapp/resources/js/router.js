/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'controllers/product',
    'controllers/cart',
    'controllers/order'
    ], function (Backbone, ProductController, CartController, OrderController) {
        var Router;
        var productController = new ProductController();
        var cartController = new CartController();
        var orderController = new OrderController();
        Backbone.Events.on('cart:add', cartController.add);
        Backbone.Events.on('order:send', orderController.send);
        Router = Backbone.Router.extend({
            routes: {
                '!/products(/)': 'showProducts',
                '!/products/:id': 'showProduct',
                '!/': 'showRoot',
                '!/cart': 'showCart',
                '*actions': 'error'
            },
            showRoot: function () {
                console.log('root');
            },
            error: function () {
                console.log('page not found');
            },
            showCart: function () {
                cartController.showCart();
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
