console.log("********** TASK 1 **********");
class Worker {
  constructor(firstName, secondName, rate, days) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
  }
  getSalery() {
    return this.rate * this.days;
  }
}
let ant = new Worker("Anton", "Antonovich", 1000, 7);
console.log(ant);
console.log(ant.firstName);
console.log(ant.secondName);
console.log(ant.rate);
console.log(ant.days);
console.log(ant.getSalery());
let tar = new Worker("Taras", "Tarasov", 1250, 14);
console.log(tar);
console.log(tar.getSalery());

//////////////////////////////////// Task 2
console.log("********** TASK 2 **********");
class MyString {
  reverse(string) {
    let b = "";
    for (let i = string.length - 1; i >= 0; i--) {
      b += string[i];
    }
    return b;
  }
  ucFirst(string) {
    let a = string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  ucWords(string) {
    let result = "";
    let split = string.split(" ");
    for (let i = 0; i < split.length; i++) {
      result += split[i].charAt(0).toUpperCase() + split[i].slice(1) + " ";
    }
    return result;
  }
}

const str = new MyString();
console.log(str.ucFirst("picola"));
console.log(str.reverse("Italia"));
console.log(str.ucWords("picola pipi popo"));
