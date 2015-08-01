import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      return true;
    },
    cancel() {
      return true;
    },
    delete: function(workout) {
      workout.destroyRecord().then(() => {
        this.transitionTo('workouts.index');
      });
    }
  }
});
