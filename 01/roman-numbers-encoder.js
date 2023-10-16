/* Steps to follow when solving:
    - Outline every breakpoints of roman numbers
    - Make switch which checks every breakpoints and assign corresponding letters
    - Function must be recursive to loop in numbers easily
*/

function solution(number) {
  switch (true) {
    case number >= 1000:
      return "M" + solution(number - 1000);

    case number >= 900:
      return "CM" + solution(number - 900);

    case number >= 500:
      return "D" + solution(number - 500);

    case number >= 400:
      return "CD" + solution(number - 400);

    case number >= 100:
      return "C" + solution(number - 100);

    case number >= 90:
      return "XC" + solution(number - 90);

    case number >= 50:
      return "L" + solution(number - 50);

    case number >= 40:
      return "XL" + solution(number - 40);
    case number >= 10:
      return "X" + solution(number - 10);

    case number >= 9:
      return "IX" + solution(number - 9);

    case number >= 5:
      return "V" + solution(number - 5);
    case number >= 4:
      return "IV" + solution(number - 4);

    case number >= 1:
      return "I" + solution(number - 1);

    default:
      return "";
  }
}
