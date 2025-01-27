let Usertext = prompt("Введите текст");
let wordFromText = prompt("Введите слово из текста").trim();
let index = Usertext.indexOf(wordFromText);
string = Usertext.substring(0, index);
alert(string);
