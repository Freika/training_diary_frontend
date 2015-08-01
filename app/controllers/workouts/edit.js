import WorkoutBaseController from './base';
export default WorkoutBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('workouts.show', this.get('model'));
      return false;
    }
  }
});
