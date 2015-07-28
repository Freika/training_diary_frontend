import Ember from 'ember';

export default Ember.Route.extend({
  workout() {
    return this.store.findAll('workout');
  }
});
