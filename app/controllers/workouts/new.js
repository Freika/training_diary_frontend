import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.trained_at',
    'model.day',
    'model.description',
    {
      get() {
        return !Ember.isEmpty(this.get('model.trained_at')) &&
               !Ember.isEmpty(this.get('model.day')) &&
               !Ember.isEmpty(this.get('model.description'));
      }
    }
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((workout) => {
          this.transitionToRoute('workouts.show', workout);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields.');
      }

      return false;
    },
    cancel () {
      this.transitionToRoute('workouts');

      return false;
    }
  }
});
