function chooseObject(Obj) {
    const result = {};

    for (const key in Obj) {
      const type = typeof Obj[key];
      if (result[type] === undefined) {
        result[type] = 1;
      } else {
        result[type]++;
      }
    }
    return result;
  }

//Пример:

const objType = {
    a: 'string 1',
    b: 42,
    c: { c1: 'random word' },
    d: 123,
    e: "hi",
    f: [1,2,3],
    g: 123
};

const results = chooseObject(objType);

console.log(results);