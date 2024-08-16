// OOP: Nesne Tabanlı Programlama

const ui = new UI();

dogru_ikon = 0;

ui.btn_start.addEventListener("click", function () {
  startTimerLine();
  ui.quiz_box.classList.add("active");
  startTimer(10);
  let soru = quiz.soruGetir();
  ui.soruGöster(soru);
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.btn_next.classList.remove("show");
});

function optionSelected(option) {
  clearInterval(counterLine);
  clearInterval(counter);
  let cevap = option.querySelector("span b").textContent;

  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi++;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correct);
    dogru_ikon++;
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrect);
  }

  for (let option of ui.option_list.children) {
    option.classList.add("disabled");
    if (
      option.querySelector("span b").textContent == quiz.soruGetir().dogruCevap
    ) {
      option.classList.add("correct");
      if (dogru_ikon == 0) {
        option.insertAdjacentHTML("beforeend", ui.correct);
        dogru_ikon++;
      }
    }
  }
  dogru_ikon--;
  ui.btn_next.classList.add("show");
}

ui.btn_next.addEventListener("click", function () {
  
  startTimerLine();

  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex++;
    let soru = quiz.soruGetir();
    ui.soruGöster(soru);
    startTimer(10);
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
  } else {
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
  clearInterval(counterLine);
});
ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  clearInterval(counterLine);
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
  
});

let counter;
function dogruCevabıGoster() {
  for (let option of ui.option_list.children) {
    option.classList.add("disabled");
    if (
      option.querySelector("span b").textContent == quiz.soruGetir().dogruCevap
    ) {
      option.classList.add("correct");
      if (dogru_ikon == 0) {
        option.insertAdjacentHTML("beforeend", ui.correct);
        dogru_ikon++;
      }
    }
  }

  dogru_ikon--;
  ui.btn_next.classList.add("show");
}
function startTimer(time) {
  ui.time_second.textContent = time;
  counter = setInterval(timer, 1000);

  function timer() {
    time--;
    ui.time_second.textContent = time;
    if (time == 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Süre Bitti.";
      dogruCevabıGoster();
    }
  }
}
let counterLine;

function startTimerLine(){
  let line_width = 0;
  counterLine= setInterval(timer,20);
  function timer(){
        line_width += 1.1;
        ui.time_line.style.width=line_width+"px";
        if(line_width>549){
          clearInterval(counterLine);
        }
  }
}
