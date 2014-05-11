/**
 * Created by coockoo on 5/11/14.
 */

define([
    'collections/product'
    ], function (ProductCollection) {
        function CartStorage () {

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
            }
        }

        return CartStorage;


    }
);
