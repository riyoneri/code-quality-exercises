/* Steps to follow when solving:
    - Outline every breakpoints of roman numbers
    - Make switch which checks every breakpoints and assign corresponding letters
    - Function must be recursive to loop in numbers easily
*/

function numbersToRoman(number) {
  switch (true) {
    case number >= 1000:
      return "M" + numbersToRoman(number - 1000);

    case number >= 900:
      return "CM" + numbersToRoman(number - 900);

    case number >= 500:
      return "D" + numbersToRoman(number - 500);

    case number >= 400:
      return "CD" + numbersToRoman(number - 400);

    case number >= 100:
      return "C" + numbersToRoman(number - 100);

    case number >= 90:
      return "XC" + numbersToRoman(number - 90);

    case number >= 50:
      return "L" + numbersToRoman(number - 50);

    case number >= 40:
      return "XL" + numbersToRoman(number - 40);
    case number >= 10:
      return "X" + numbersToRoman(number - 10);

    case number >= 9:
      return "IX" + numbersToRoman(number - 9);

    case number >= 5:
      return "V" + numbersToRoman(number - 5);
    case number >= 4:
      return "IV" + numbersToRoman(number - 4);

    case number >= 1:
      return "I" + numbersToRoman(number - 1);

    default:
      return "";
  }
}
