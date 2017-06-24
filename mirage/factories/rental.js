import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.internet.userName();
  },
  dailyRate() {
    return faker.list.random(100, 120, 130, 140, 150);
  }
});
