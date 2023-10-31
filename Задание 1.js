/**
 * Переменные
 * 
 * @param {Array} array - массив
 * @param {Function} filterFn - фильтрующая функция
 * @param {Boolean} inplace - флаг "модифицируем исходный массив или нет"
 * @returns {Array} - отфильтрованный массив
 */

const numbers = [4, 66, 6, 78, 34, 15000];

function filter(array, filterFn, inplace = false) {
    if (inplace) {
        return array.filter(filterFn);
    } else {
        return array.slice().filter(filterFn);
    }
}

//Пример
const filterNumber = filter(
    numbers, 
    (number) => number > 9, 
    false);

console.log(filterNumber);
