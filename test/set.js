require('../iterators.js');
chai = require('chai');
expect = chai.expect;

var set, emptyset;

describe('Set prototype functions', function(){
  beforeEach(function(){
    set = new Set();
    set.add('a');
    set.add('b');
    set.add('c');
    emptyset = new Set();
  });

  it('should iterate over keys of a filled set', function() {
    var iterator = set.keys();
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

  it('should iterate over keys of an empty set', function() {
    var iterator = emptyset.keys();
    var first = iterator.next();
    var second = iterator.next();

    expect(first.done).to.be.true;
    expect(first.value).to.equal(undefined);

    expect(second).to.deep.equal(first);
  });

  it('should iterate over values of a filled set', function() {
    var iterator = set.values();
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

  it('should iterate over values of an empty set', function() {
    var iterator = emptyset.values();
    var first = iterator.next();
    var second = iterator.next();

    expect(first.done).to.be.true;
    expect(first.value).to.equal(undefined);

    expect(second).to.deep.equal(first);
  });
});
