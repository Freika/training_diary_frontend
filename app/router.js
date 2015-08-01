import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('workouts', function() {
    this.route('new');

    this.route('show', {
      path: ':workout_id'
    });

    this.route('edit', {
      path: ':workout_id/edit'
    });

  });
});

export default Router;
