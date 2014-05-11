/**
 * Created by coockoo on 5/11/14.
 */

define([
    'backbone'
    ], function (Backbone) {
        var AppView;
        AppView = Backbone.View.extend({
            el: '.container',

            setContainerView: function (view) {
                this.$el.html(view.render().$el);
            }

        });
        return new AppView;

    }
);
