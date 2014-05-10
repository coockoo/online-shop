/**
 * Created by coockoo on 5/10/14.
 */

define([
    ], function () {
        var ProductCollectionView;
        ProductCollectionView = Backbone.View.extend({

            render: function () {
                this.$el.html('<p>Life is amazing</p>');
                return this;
            }

        });

        return ProductCollectionView;
    }
);
