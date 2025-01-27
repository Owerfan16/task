const Myname = "Максим";
const programmingLangue = "Java script";
const CourseCreatorName = "Nikita";
const ReasonText = "по пене";
const numberoffMoth = "0";
const result1 =
  "Всем привет, меня зовут " +
  Myname +
  ", сейчас я изучаю язык программирования " +
  programmingLangue +
  " на курсе по " +
  programmingLangue +
  " у " +
  CourseCreatorName +
  ", Я хочу стать веб разработчиком, потому что " +
  ReasonText +
  ", до этого я изучал " +
  programmingLangue +
  numberoffMoth +
  " месяцев. Я уверен что пройду этот курс до конца.";

let result2 = `Всем привет, меня зовут ${Myname}, сейчас я изучаю язык программирования ${programmingLangue} на курсе по ${programmingLangue} у ${CourseCreatorName}, Я хочу стать веб разработчиком, потому что ${ReasonText}, до этого я изучал ${programmingLangue} ${numberoffMoth} месяцев. Я уверен что пройду этот курс до конца.`;
/* result2 = result2.replaceAll("Java script", programmingLangue.toUpperCase());

console.log("Первый символ:", result2[0]);
console.log("Последний символ:", result2[long - 1]);

const userName = prompt("Как вас зовут?");
const userAge = Number(prompt("Сколько вам лет?").replaceAll(" ", ""));
const noSpaces = userName.trim().toLowerCase();
console.log(noSpaces);
alert("Вас зовут " + noSpaces + " и вам " + userAge + " лет"); */
const long = result2.length;
const sred = (long/2)
console.log("символ по середине", result2[sred])
