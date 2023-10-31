/** 
 * Напишите функцию, которая принимает на вход строку в snake_case и превращает её в строку в camelCase
 */

function Converter(input) {

    const words = input.split('_');
    const word_1 = words[0].toLowerCase();
    const word_2 = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const convert_word = [word_1, ...word_2].join('');
    return convert_word;
}

//Пример
const snakeData = 'data_in_snake_case';

const result = Converter(snakeData);
console.log(result);