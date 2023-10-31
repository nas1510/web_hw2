/**
 * напишите функцию, которая:

 * Получает на вход натуральное число
 * Перемножает все цифры числа, до тех пор, пока оно не станет одноразрядным
 * Возвращает итоговое одноразрядное число
 */

//Пример функции:

function multiplyNumber(number) {
    function multiplier(num) {
      let result = 1;
      while (num > 0) {
        result *= num % 10;
        num = Math.floor(num / 10);
      }
      return result;
    }
    while (number >= 10) {
      number = multiplier(number);
    }
    return number;
  }
  