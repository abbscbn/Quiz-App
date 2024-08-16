function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
  }
  
  Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
  };
  const sorular = [
    new Soru(
      "1-Hangisi javascript paket yönetim uygulasıdır?",
      { a: "1-Node.js", b: "Typescript", c: "Npm", d: "Nugget" },
      "c"
    ),
    new Soru(
      "2-Hangisi javascript paket yönetim uygulasıdır?",
      { a: "2-Node.js", b: "Typescript", c: "Npm", d: "Nugget" },
      "c"
    ),
    new Soru(
      "3-Hangisi javascript paket yönetim uygulasıdır?",
      { a: "3-Node.js", b: "Typescript", c: "Npm", d: "Nugget" },
      "c"
    ),
    new Soru(
      "4-Hangisi javascript paket yönetim uygulasıdır?",
      { a: "4-Node.js", b: "Typescript", c: "Npm", d: "Nugget" },
      "c"
    ),
    new Soru(
      "5-Hangisi javascript paket yönetim uygulasıdır?",
      { a: "4-Node.js", b: "Typescript", c: "Npm", d: "Nugget" },
      "c"
    ),
  ];
  
  