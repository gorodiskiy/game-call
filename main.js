var btn = document.querySelector(".send");
var input = document.querySelector(".form-control");
var resultGame = document.querySelector(".game");
var resultPodkol = document.querySelector(".podkol");
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
	resultGame.style.display = "none";
	resultPodkol.innerText = return_podeb();
    btn.removeAttribute('disabled');
	btn.removeAttribute('title');
});
btn.addEventListener("click", function() {
    var userChoice = document.querySelector("input.checkbox:checked").value;
    resultGame.innerText = render(userChoice, Math.floor(Math.random() * 3));
	resultPodkol.innerText = return_phrase_lp();
	resultGame.style.display = "block";
});

function render(user, pc) {
    if (user == pc) {
        return "Никто не победил! Попробуй еще раз";
    } else if (user == 0) {
        if (pc == 1) {
            return "Сегодня твой день! Камень победил!";
        } else {
            return "Не повезло, дружок! Бумага победила!";
        }
    } else if (user == 2) {
        if (pc == 0) {
            return "Сегодня твой день! Бумага победила!";
        } else {
            return "Не повезло, дружок! Ножницы победили!";
        }
    } else if (user == 1) {
        if (pc == 2) {
            return "Сегодня твой день! Ножницы победили!";
        } else {
            return "Не повезло, дружок! Камень победил!";
        }
    }
};

function return_podeb() {
	let phrases = [
	  "хм... неплохой выбор",
	  "Уверен?",
	  "Говно выбор",
	  "Ты говно как и твой выбор",
	  "Мне кажется ты продуешь :)",
	  "Выбор хорош, но ты гей",
	  "Гейский выбор...",
	];
	
	return phrases[Math.floor(Math.random() * phrases.length)];	
};

function return_phrase_lp() {
	let phrases = [
	  "Сделай выбор!",
	  "Давай сыграем еще!",
	  "Куколд выбирай давай!",
	  "Камень? Ножницы? или Бумага? что выберешь?",
	  "Если не выберешь в течении 5 секунд ты ГЕЙ!",
	  "Давай еще!",
	  "Если не сыкун, сделаешь выбор :D",
	];
	
	return phrases[Math.floor(Math.random() * phrases.length)];	
};		
	
	
	