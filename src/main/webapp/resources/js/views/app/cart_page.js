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
            events: {
                'click a.order': 'order'
            },
            order: function (e) {
                var data = $('form').serializeObject();
                for (var key in data) {
                    if (data[key] == null) {
                        alert('please, fill all fields');
                    }
                }
                Backbone.Events.trigger('order:send', {
                    products: this.containerView.collection
                });
                e.preventDefault();
            },
            setContainerView: function (view) {
                this.containerView = view;
            },
            render: function () {
                this.$el.html(this.template({isFull: this.containerView.collection.length}));
                if (this.containerView != null) {
                    this.$el.find('.product-container').html(this.containerView.render().$el);
                }
                return this;
            }

        });

        return CartPageView;

    }
);
