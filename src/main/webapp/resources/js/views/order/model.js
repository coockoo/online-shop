/**
 * Created by coockoo on 5/11/14.
 */

define([
    'backbone'
    ], function (Backbone) {
        var OrderView;
        OrderView = Backbone.View.extend({
            tagName: 'form',
            events: {
                'submit': 'sendOrder'
            },
            sendOrder: function (e) {
                e.preventDefault();
                var data = this.$el.serializeObject();
                for (var key in data) {
                    if (data[key] == '') {
                        alert('please, fill all fields');
                        return;
                    }
                }
                this.model.set(data);
                console.log(this.model.toJSON());
                Backbone.Events.trigger('order:send', this.model);
            },
            render: function () {
                var data = this.model.toJSON();
                for (var key in data) {
                    if (typeof data[key] === 'string') {
                        this.addOne(key);
                    }
                }
                this.$el.append('<input type="submit" value="Order!">');
                return this;
            },
            addOne: function (name) {
                var html = '<label for="' + name +'">' + name + '</label>' +
                    '<input type="text" id="'+ name + '" name="' + name + '"/>';
                this.$el.append(html);

            }
        });
        return OrderView;
    }
);
