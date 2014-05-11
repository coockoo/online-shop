/**
 * Created by coockoo on 5/10/14.
 */

define([
    'backbone',
    'text!../../../templates/product/model.ejs'
    ], function (Backbone, modelTemplate) {
        var ProductView;
        ProductView = Backbone.View.extend({

            template: _.template(modelTemplate),

            render: function () {
                this.$el.html(this.template({model: this.model}));
                return this;
            }

        });
        return ProductView;

    }
);
