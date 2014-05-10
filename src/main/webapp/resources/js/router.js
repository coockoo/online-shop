/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'controllers/product'
    ], function (Backbone, ProductController) {
        var Router;
        Router = Backbone.Router.extend({
            routes: {
                '!/products': 'showProducts',
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
                var productController = new ProductController();

                this.on('route:showProducts', function () {
                    console.log('router:products');
                    productController.showProducts();
                });

                Backbone.history.start({ root: '/shop/'});
            }
        });


        return Router;

    }
);
