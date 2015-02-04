import Ember from 'ember';

var Router = Ember.Router.extend({

});

Router.map(function() {
  this.resource('todos', { path: '/' });
});

export default Router;
