function UI(){
    this.btn_start=document.querySelector(".btn_start"),
    this.btn_next=document.querySelector(".btn_next"),
    this.quiz_box=document.querySelector(".quiz_box"),
    this.btn_quit=document.querySelector(".btn_quit"),
    this.btn_replay=document.querySelector(".btn_replay"),
    this.option_list = document.querySelector(".option_list"),
    this.correct=`<div class="icon"><i class="fas fa-check" id="dogru"></i></div>`,
    this.incorrect=`<div class="icon"><i class="fas fa-times"></i></div>`
    this.score_box=document.querySelector(".score_box");
    this.time_text=document.querySelector(".time_text");
    this.time_second=document.querySelector(".time_second");
    this.time_line=document.querySelector(".time_line");


}
UI.prototype.soruGöster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = ``;
    for (let cevap in soru.cevapSecenekleri) {
      options += ` 
                <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div> 
                
                `;
    }
    
    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;
    const option = this.option_list.querySelectorAll(".option");
  
    for (let opt of option) {
      opt.setAttribute("onclick", "optionSelected(this)");
    }
  }
  UI.prototype.soruSayisiniGoster= function (soruSirasi, toplamSoru){

    let tag=`
    <span class="badge bg-warning">${soruSirasi}/${toplamSoru}</span>
    `;

    document.querySelector(".quiz_box .question_index").innerHTML=tag;
}
UI.prototype.skoruGoster=function(toplamSoru,dogruCevapSayisi){
let tag=`
Toplam ${toplamSoru} sorudan ${dogruCevapSayisi} Doğru cevap verdiniz.
`;
document.querySelector(".score_box .score_text").innerHTML=tag;
}