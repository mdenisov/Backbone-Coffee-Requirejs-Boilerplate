// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["jquery", "backbone", "hbs!templates/test"], function($, Backbone, tmplTest) {
    var ExampleView;
    return ExampleView = (function(_super) {

      __extends(ExampleView, _super);

      function ExampleView() {
        return ExampleView.__super__.constructor.apply(this, arguments);
      }

      ExampleView.prototype.initialize = function(opts) {
        return _.bindAll(this);
      };

      ExampleView.prototype.render = function() {
        return this.$el.html(tmplTest());
      };

      ExampleView;


      return ExampleView;

    })(Backbone.View);
  });

}).call(this);