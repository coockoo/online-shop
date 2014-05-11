/**
 * Created by coockoo on 5/11/14.
 */

define([
    ], function () {
        function OrderController () {

            this.send = function (data) {
                require(['models/order'], function (Order) {
                    var order = new Order(data);
                    console.log('asdf');
                    order.save(null, {
                        success: function (model) {
                            console.log(model);
                            localStorage.removeItem('cart');
                        },
                        error: function (data) {
                            console.log('error: ', data);

                        }
                    });
                });
            }

        }
        return OrderController;
    }
);
