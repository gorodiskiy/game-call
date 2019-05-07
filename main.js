var btn = document.querySelector(".send");
var input = document.querySelector(".form-control");
var resultGame = document.querySelector(".game");
var rndnubmer;
var result;

// btn.addEventListener("click", function() {
//   var userChoice = input.value;
//   if (input.value.length > 0) {
//     random();
//     render(userChoice, rndnubmer);
//     resultGame.innerText = result;
//   } else {
//     alert("Введи значения");
//     input.style.cssText = "outline:1px solid red";
//   }
// });
document.querySelector(".select-group").addEventListener("click", function(event) {
    var target = event.target;
    btn.removeAttribute('disabled');
	btn.removeAttribute('title');
})
btn.addEventListener("click", function() {
    random();
    var userChoice = document.querySelector("input.checkbox:checked").value;
    render(userChoice, rndnubmer);
    resultGame.innerText = result;
});

function random() {
    rndnubmer = Math.random();
    if (rndnubmer < 0.34) {
        rndnubmer = "Камень";
    } else if (rndnubmer <= 0.67) {
        rndnubmer = "Ножницы";
    } else {
        rndnubmer = "Бумага";
    }
}

// render function

function render(user, pc) {
    if (user === pc) {
        result = "Никто не победил! Попробуй еще раз";
    } else if (user === "Камень") {
        if (pc === "Ножницы") {
            result = "Сегодня твой день! Камень победил!";
        } else {
            result = "Не повезло, дружок! Бумага победила!";
        }
    } else if (user === "Бумага") {
        if (pc === "Камень") {
            result = "Сегодня твой день! Бумага победила!";
        } else {
            result = "Не повезло, дружок! Ножницы победили!";
        }
    } else if (user === "Ножницы") {
        if (pc === "Бумага") {
            result = "Сегодня твой день! Ножницы победили!";
        } else {
            result = "Не повезло, дружок! Камень победил!";
        }
    }
}