import WorkoutsBaseController from './base';

export default WorkoutsBaseController.extend({
  actions: {
    cancel () {
      this.transitionToRoute('workouts');
      return false;
    }
  }
});
