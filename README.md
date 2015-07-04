# es6-collections-iterators
Adds missing values, keys and entries functions to native es6 collection implementations

This especially concerns Internet Explorer 11, which implements es6 collections,
but does not implement the functions to retreive their elements via iterators.

This polyfill tries to fix this to make IE 11 more compliant with the current
[standard](http://www.ecma-international.org/ecma-262/6.0/).

## Usage

[![NPM](https://nodei.co/npm/es6-collections-iterators.png)](https://nodei.co/npm/es6-collections-iterators/)

```js
require('es6-collections-iterators')
```

*Note that this polyfill only does something if the collections `Set` and `Map`
are available, but the respective prototype methods `entries`, `keys` and
`values` are not.*
