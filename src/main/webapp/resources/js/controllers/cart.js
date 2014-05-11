/**
 * Created by coockoo on 5/11/14.
 */

define([
    'collections/product'
    ], function (ProductCollection) {
        function CartController () {
            var cart = new ProductCollection(JSON.parse(localStorage.getItem('cart')));

            this.add = function (model) {
                var modelInCollection = cart.get(model);
                if (modelInCollection) {
                    modelInCollection.set('quantity', modelInCollection.get('quantity') + 1);
                    model.set(modelInCollection);
                } else {
                    cart.add(model);
                    model.set('quantity', model.get('quantity') + 1);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
            };

            this.showCart = function () {
                require(['views/app/cart_page', 'views/product/collection', 'views/appView'],
                    function (CartPageView, ProductCollectionView, appView) {
                    var cartPage = new CartPageView();
                    var view = new ProductCollectionView({collection: cart});
                    cartPage.setContainerView(view);
                    appView.setContainerView(cartPage);
                });
            };

        }
        return CartController;

    }
);
