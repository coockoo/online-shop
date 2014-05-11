/**
 * Created by coockoo on 5/11/14.
 */

define([
    'backbone',
    'text!../../../templates/app/productPage.ejs'
    ], function (Backbone, template) {
        var ProductPageView;
        ProductPageView = Backbone.View.extend({

            template: _.template(template),
            containerView: null,
            setContainerView: function (view) {
                this.containerView = view;
            },
            render: function () {
                this.$el.html(this.template());
                if (this.containerView != null) {
                    this.$el.find('.product-container').html(this.containerView.render().$el);
                }
                return this;
            }

        });
        return ProductPageView;

    }
);
