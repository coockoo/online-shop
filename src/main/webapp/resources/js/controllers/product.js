/**
 * Created by coockoo on 5/10/14.
 */

define([
    ], function () {
        function ProductController () {

            this.showProducts = function () {
                require(['collections/product', 'views/appView', 'views/product/collection'],
                    function (ProductCollection, appView, ProductCollectionView, ProductsPageView) {
                    var productCollection = new ProductCollection();
                    productCollection.fetch({
                        success:  function (collection) {
                            var view = new ProductCollectionView({collection: collection});
                            appView.setContainerView(view);
                        }
                    });

                })
            };

            this.showProduct = function (id) {
                require(['models/product', 'views/appView', 'views/product/model', 'views/app/product_page'],
                    function (Product, appView, ProductView, ProductPageView) {
                    var product = new Product({id: id});
                    product.fetch({
                        success: function (model) {
                            var productPage = new ProductPageView();
                            var view = new ProductView({model: model});
                            productPage.setContainerView(view);
                            appView.setContainerView(productPage);
                        }

                    })

                })


            };


        }
        return ProductController;

    }
);
