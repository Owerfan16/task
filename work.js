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

const result2 = `\nВсем привет, меня зовут ${Myname}, сейчас я изучаю язык программирования ${programmingLangue} на курсе по ${programmingLangue} у ${CourseCreatorName}, Я хочу стать веб разработчиком, потому что ${ReasonText}, до этого я изучал ${programmingLangue} ${numberoffMoth} месяцев. Я уверен что пройду этот курс до конца.`;

const test = result2.replaceAll("Java script", programmingLangue.toUpperCase());
const long = result2.length;
const last = result2[result2.length - 1];
console.log(test, long + " длина строки в тексте" + last);
