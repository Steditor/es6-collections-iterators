require('../iterators.js');
chai = require('chai');
expect = chai.expect;

var map, emptymap;

describe('Map prototype functions', function(){
  beforeEach(function(){
    map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);
    emptymap = new Map();
  });

  it('should iterate over keys of a filled map', function() {
    var iterator = map.keys();
    var first = iterator.next();
    var second = iterator.next();
    var third = iterator.next();
    var fourth = iterator.next();
    var fifth = iterator.next();

    expect(first.done).to.be.false;
    expect(first.value).to.equal('a');

    expect(second.done).to.be.false;
    expect(second.value).to.equal('b');

    expect(third.done).to.be.false;
    expect(third.value).to.equal('c');

    expect(fourth.done).to.be.true;
    expect(fourth.value).to.equal(undefined);

    expect(fifth).to.deep.equal(fourth);
  });

  it('should iterate over keys of an empty map', function() {
    var iterator = emptymap.keys();
    var first = iterator.next();
    var second = iterator.next();

    expect(first.done).to.be.true;
    expect(first.value).to.equal(undefined);

    expect(second).to.deep.equal(first);
  });

  it('should iterate over values of a filled map', function() {
    var iterator = map.values();
    var first = iterator.next();
    var second = iterator.next();
    var third = iterator.next();
    var fourth = iterator.next();
    var fifth = iterator.next();

    expect(first.done).to.be.false;
    expect(first.value).to.equal(1);

    expect(second.done).to.be.false;
    expect(second.value).to.equal(2);

    expect(third.done).to.be.false;
    expect(third.value).to.equal(3);

    expect(fourth.done).to.be.true;
    expect(fourth.value).to.equal(undefined);

    expect(fifth).to.deep.equal(fourth);
  });

  it('should iterate over values of an empty map', function() {
    var iterator = emptymap.values();
    var first = iterator.next();
    var second = iterator.next();

    expect(first.done).to.be.true;
    expect(first.value).to.equal(undefined);

    expect(second).to.deep.equal(first);
  });
});
