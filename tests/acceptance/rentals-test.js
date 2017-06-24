import { test } from 'qunit';
import moduleForAcceptance from 'book-sync/tests/helpers/module-for-acceptance';
import page from 'book-sync/tests/pages/rental';

moduleForAcceptance('Acceptance | rentals', {
  beforeEach() {
    server.createList('rental', 10);
  }
});

test('visiting /rentals', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/rentals');
  });
});

test('There should be a list of 10 rentals', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(page.rentalCollection().count, 10, 'List of 10 shows up.');
  });
});
