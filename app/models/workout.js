import DS from 'ember-data';

export default DS.Model.extend({
  trainedAt: DS.attr('date'),
  day: DS.attr('number'),
  description: DS.attr('string')
});
