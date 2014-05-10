/**
 * Created by coockoo on 5/10/14.
 */

define([
    ], function () {
        function ProductController () {

            this.showProducts = function () {
                //TODO: remove jquery from here
                require(['jquery','collections/product', 'views/product/collection'], function ($, ProductCollection, ProductCollectionView) {
                    var productCollection = new ProductCollection();
                    productCollection.fetch({
                        success:  function (collection) {
                            var view = new ProductCollectionView({collection: collection});
                            $('.container').html(view.render().el);
                            console.log(collection);
                        }
                    });

                })

            }


        }
        return ProductController;

    }
);
