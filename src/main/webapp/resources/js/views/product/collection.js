/**
 * Created by coockoo on 5/10/14.
 */

define([
    'underscore',
    'backbone',
    'views/product/model'
    ], function (_, Backbone, ProductView) {
        var ProductCollectionView;
        ProductCollectionView = Backbone.View.extend({

            tagName: 'ul',

            className: 'product-collection',

            render: function () {
                this.collection.each(function (model) {
                    this.addOne(model);
                }.bind(this));
                return this;
            },
            addOne: function (model) {
                var view = new ProductView({model: model});
                var viewTemplate = view.render().$el;
                this.$el.append(viewTemplate.wrap('<li></li>'));
            }

        });

        return ProductCollectionView;
    }
);
