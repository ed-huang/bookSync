import {
  collection,
  create,
  text,
  visitable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/rentals'),
  rentalCollection: collection({
    itemScope: '.rentals li',
    item: {
      name: text('.rentals li span', { at: 0 })
    }
  })
});
