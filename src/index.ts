import 'core-js/es6/array';
// import 'core-js/es/object/entries';
import 'core-js/es6/object';

const testArrayFind = () => {
  const target = [
    {id: 1},
    {id: 2},
    {id: 3},
  ];

  console.info(target.find(x => x.id === 2));
}

const testObjectEntries = () => {
  const target = {
    a: 1,
    b: 1,
    c: 1,
  };

  console.info(Object.entries(target));
};

console.info('testArrayFind');
testArrayFind();

console.info('testObjectEntries');
testObjectEntries();
