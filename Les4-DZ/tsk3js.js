let f1 = document.forms.CoffeeMake;
let shugarNum = 0;
let Ncup = 1;
let M = false;

//************************** */

class CoffeeMake {
  constructor(coffe, shugar) {
    this.coffe = coffe;
    this.shugar = shugar;
  }
  On() {
    return console.log("Making a coffe...");
  }
  Off() {
    return console.log(
      `Your ${this.coffe} with ${this.shugar} shugar is ready`
    );
  }
}

///

class Kapelna extends CoffeeMake {
  constructor(coffe, shugar) {
    super(coffe, shugar);
  }
}

//
class Rizcova extends CoffeeMake {
  constructor(coffe, shugar, numbOfCups) {
    super(coffe, shugar);
    this.numbOfCups = numbOfCups;
  }
  NumCups() {
    console.log(`You choose :${Ncup} cups `);
  }
}

//
class AutoCoffe extends CoffeeMake {
  constructor(coffe, shugar, milk) {
    super(coffe, shugar);
    this.milk = milk;
  }
  Mlecko() {
    console.log("add milk in your coffe");
  }
}

//

////////******************************************** */

//    number of cups
$(".check").on("click", () => {
  let c = document.querySelectorAll(".check");
  for (let i = 0; i < c.length; i++) {
    if (c[i].checked == true) {
      Ncup = c[i].value;
    }
  }
});

//    shugar
$(".add").on("click", () => {
  shugarNum++;
  $("p#shNum").text(shugarNum);
});
$(".takeOf").on("click", () => {
  if (shugarNum == 0) {
    return shugarNum;
  }
  shugarNum--;
  $("p#shNum").text(shugarNum);
});

// make coffe button On
$(".form").on("input", () => {
  if (f1.ChooseCoffeMaker.value == "Rizcova") {
    $(".numberOfCupsC").css({
      display: "block",
    });
    $(".milk").css({
      display: "none",
    });
    rizcova2();
  }
  if (f1.ChooseCoffeMaker.value == "Kapelna") {
    $(".numberOfCupsC").css({
      display: "none",
    });
    $(".milk").css({
      display: "none",
    });
    kapelna2();
  }
  if (f1.ChooseCoffeMaker.value == "AutoCoffe") {
    $(".numberOfCupsC").css({
      display: "none",
    });
    $(".milk").css({
      display: "block",
    });
    autoCoffe2();
  }
});
///////////////////////////MAKE COFFE

// function for kapelna
function kapelna2() {
  $(".On").one("click", function () {
    let cup = new CoffeeMake(f1.select1.value, shugarNum);
    cup.On();
    let time = 0;

    let interval = setInterval(function () {
      if (time == 2) {
        return clearInterval(interval), cup.Off();
      }
      time++;
    }, 1000);
    $("#formId")[0].reset();
    shugarNum = 0;
    $("p#shNum").text(shugarNum);
  });
}

// function for rizcova
function rizcova2() {
  $(".On").one("click", function () {
    let cup = new Rizcova(f1.select1.value, shugarNum, 2);
    cup.NumCups();
    cup.On();
    let time = 0;
    let interval = setInterval(function () {
      if (time == 2) {
        return clearInterval(interval), cup.Off();
      }
      time++;
    }, 1000);
    $("#formId")[0].reset();
    shugarNum = 0;
    $("p#shNum").text(shugarNum);
    $(".numberOfCupsC").css({
      display: "none",
    });
  });
}

// function for autoCoffe
function autoCoffe2() {
  $(".On").one("click", function () {
    let cup = new AutoCoffe(f1.select1.value, shugarNum, false);
    cup.On();
    let time = 0;
    let m = document.querySelector(".milk2");
    if (m.checked == true) {
      cup.Mlecko();
    }
    let interval = setInterval(function () {
      if (time == 2) {
        return clearInterval(interval), cup.Off();
      }
      time++;
    }, 1000);
    $("#formId")[0].reset();
    shugarNum = 0;
    $("p#shNum").text(shugarNum);
    $(".numberOfCupsC").css({
      display: "none",
    });
    $(".milk").css({
      display: "none",
    });
  });
}
