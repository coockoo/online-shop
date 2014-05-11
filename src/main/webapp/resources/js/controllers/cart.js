/**
 * Created by coockoo on 5/11/14.
 */

define([
    'models/product',
    'storages/cart'
    ], function (Product, CartStorage) {
        function CartController () {
            var cartStorage = new CartStorage();

            this.add = function (model) {
                cartStorage.add(model);
            }

        }
        return CartController;

    }
);
