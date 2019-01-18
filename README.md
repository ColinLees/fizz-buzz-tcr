<div align="center">
<h1>Fizz Buzz TCR</h1>
</div>

<div align="center">
  <strong>Commit often and with small changes! Influenced by <a href="http://www.marcusoft.net/2019/01/trying-out-test-commit-or-revert.html">Marcusoft's post</a>.</strong>
</div>

<br />

## Table of Contents
- [Initilaization](#initilaization)
- [Talks](#talks)
- [Showcases](#showcases)
- [Completed challanges](#completed-challanges)
- [Challange ideas](#challange-ideas)

## Initilaization
- `mkdir fizz-buzz-tcr && cd fizz-buzz-tcr`
- `npm init -y`
- `npm i -D mocha chai standard`
- `touch index.js and index.test.js`
- Add test, lint and pretest scripts
```JSON
"scripts": {
    "lint": "standard",
    "pretest": "standard",
    "test": "mocha -D bdd -R list ."
  }
```
- Wrote a first test to check that tools works
```javascript
/* global describe, it */
const assert = require('chai').assert
   
describe('Testing', () => {
  it('should work', () => {
    assert.isTrue(true)
  })
})
```
- Created .gitignore from [Gitignore.io](https://www.gitignore.io/)
- `git init` and initial commit