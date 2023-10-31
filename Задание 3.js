/**
 * Напишите функцию sum, которая:
 *
 * Принимает два значения
 * Проверяет, является ли каждый из них числом
 * Если они оба числа, то возвращается их сумма
 * Если левый операнд не является числом, то выкидывается ошибка "The left operand is not number"
 * Если правый операнд не является числом, то выкидывается ошибка "The right operand is not number"
 * Если оба операнда не являются числами, то выкидывается ошибка "Operands are not numbers"

 */

//Пример функции

function sum(leftSide, rightSide) {
    if (typeof leftSide !== 'number' && typeof rightSide !== 'number') {
      throw new Error("Operands are not numbers");
    } else if (typeof leftSide !== 'number') {
      throw new Error("The left operand is not number");
    } else if (typeof rightSide !== 'number') {
      throw new Error("The right operand is not number");
    }
  
    return leftSide + rightSide;
  }