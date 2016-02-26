var foo = require('../index'),
    assert = require('assert');

describe('foo', function () {
    it('should return the property', function () {
        var result = foo({ a: 'b' }, 'a');
        assert.ok(result === 'b');
    });

    it('should return the primitive value', function () {
        var result = foo(42);
        assert.ok(result === 42);
    });
});

