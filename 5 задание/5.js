let UserString = prompt("Введите строку необходимую для обрезки").trim();
let startInput = prompt(
  "Введите индекс с которого нужно начать обрезку строки"
);
let endInput = prompt("Введите индекс с которого нужно начать обрезку строки");
let start = Number(startInput);
let end = Number(endInput);
string = UserString.substring(start, end);
alert(string);