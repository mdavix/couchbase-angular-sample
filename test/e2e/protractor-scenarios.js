'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('The App', function() {

  beforeEach(function() {
    browser.get('/');
  });

  it('should have beers', function() {
      var beerList = element.all(by.repeater('beer in beers'));
      expect(beerList.count()).toBe(20);
  });

  it('the sockets should work', function() {
      var probeMessage='myLittleMessage';

      element(by.model('message')).sendKeys(probeMessage);
      element(by.id('sendmsg')).click();

      var lastMessage = element.all(by.repeater('message in messages')).last();
      expect(lastMessage.getText()).toContain(probeMessage);

  });
});
