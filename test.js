var sidenote = require('./')
var test = require('tape')

test('simple case', function(t) {
  t.deepEqual(sidenote([
      ['HELLO WORLD', '[COMPLETE]']
    , ['LOREM IPSUM', '']
    , ['ANOTHER', '[THING GOES HERE]']
  ]), [
      'HELLO WORLD        [COMPLETE]'
    , 'LOREM IPSUM                  '
    , 'ANOTHER     [THING GOES HERE]'
  ], 'produces the expected output')

  t.end()
})

test('opts.character', function(t) {
  t.deepEqual(sidenote([
      ['HELLO WORLD', '[COMPLETE]']
    , ['LOREM IPSUM', '']
    , ['ANOTHER', '[THING GOES HERE]']
  ], {
    character: '-'
  }), [
      'HELLO WORLD--------[COMPLETE]'
    , 'LOREM IPSUM------------------'
    , 'ANOTHER-----[THING GOES HERE]'
  ], 'uses "-" instead of " "')

  t.end()
})

test('opts.distance', function(t) {
  t.deepEqual(sidenote([
      ['HELLO WORLD', '[COMPLETE]']
    , ['LOREM IPSUM', '']
    , ['ANOTHER', '[THING GOES HERE]']
  ], {
    distance: 2
  }), [
      'HELLO WORLD         [COMPLETE]'
    , 'LOREM IPSUM                   '
    , 'ANOTHER      [THING GOES HERE]'
  ], 'handles even distances')

  t.deepEqual(sidenote([
      ['HELLO WORLD', '[COMPLETE]']
    , ['LOREM IPSUM', '']
    , ['ANOTHER', '[THING GOES HERE]']
  ], {
    distance: 5
  }), [
      'HELLO WORLD            [COMPLETE]'
    , 'LOREM IPSUM                      '
    , 'ANOTHER         [THING GOES HERE]'
  ], 'handles odd distances')

  t.end()
})
