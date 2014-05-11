/**
 * Created by coockoo on 5/11/14.
 */

define([
    'backbone',
    'underscore',
    'text!../../../templates/app/cartPage.ejs'
    ], function (Backbone, _, template) {
        var CartPageView;
        CartPageView = Backbone.View.extend({

            template: _.template(template),
            containerView: null,
            orderView: null,

            setContainerView: function (view) {
                this.containerView = view;
            },
            setOrderView: function (view) {
                this.orderView = view;
            },
            render: function () {
                this.$el.html(this.template({isFull: this.containerView.collection.length}));
                if (this.containerView != null) {
                    this.$el.find('.product-container').html(this.containerView.render().$el);
                }
                if (this.orderView != null) {
                    this.$el.find('.order-container').html(this.orderView.render().$el);
                }
                return this;
            }

        });

        return CartPageView;

    }
);
