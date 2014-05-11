/**
 * Created by coockoo on 5/10/14.
 */

define([
    'underscore',
    'jquery'
    ], function (_, $) {
        function Config () {
            var urlRoot = 'http://localhost:8080/shop/api';

            this.getUrlRoot = function () {
                return urlRoot;
            }
        }
        $.fn.serializeObject = function() {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function() {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };
        return new Config();
    }
);
