

$(document).ready(function() {
  function triangleTest(a,b,c);
    if (a === b && b === c) return "Equilateral";
    if (a === b || b === c || c === a) return "Isosceles";
    if (a != b && b != c && c != a) return "Scalene";
    if (a <= b+c || b <= a+c || c <= a+b) return "Invalid Triangle";
//start of triangle check logic, still needs corresponding variables from form inputs to check
});