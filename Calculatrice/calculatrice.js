class BaseCalculator {
    constructor(){
        this.texte = document.getElementById("ecran");
        this.result = undefined;
        this.buttons = document.getElementsByTagName("button");
    }
    operation(){
        this.result = eval(this.texte.textContent);
        console.log(this.result);
    }
    
    affichage(value){
        console.log(value);
        if (value != '=' && value != 'C' && value != 'supp'){
            this.texte.innerHTML = this.texte.textContent + value;
        }
        if (value == '='){
            try {
                this.operation();
                this.texte.innerHTML = this.result;
            } catch {
                this.texte.innerHTML = "ERREUR";
                for (let i = 0; i < this.buttons.length; i++) {
                    if (this.buttons[i].value != "C") {
                      this.buttons[i].disabled = true;
                    }
                }
            }
        }
    }
    
    effacer(){
        this.texte.textContent = "";
        for (let i = 0; i < this.buttons.length; i++) {
            if (this.buttons[i].value != "C") {
                this.buttons[i].disabled = false;
            }
        }
    }

    supprimer(){
        this.texte.innerHTML = this.texte.innerHTML.substring(0,this.texte.innerHTML.length-1);
    }
}

let baseCalculator = new BaseCalculator();




const egal = document.getElementById("result");
const echap = document.getElementById("escape_");
const plus = document.getElementById("plus");
const fois = document.getElementById("fois");
const moins = document.getElementById("moins");
const divise = document.getElementById("divise");
const mod = document.getElementById("mod");
const point = document.getElementById("point");
const ouvert = document.getElementById("ouvert");
const ferme = document.getElementById("ferme");
const un = document.getElementById("un");
const deux = document.getElementById("deux");
const trois = document.getElementById("trois");
const quatre = document.getElementById("quatre");
const cinq = document.getElementById("cinq");
const six = document.getElementById("six");
const sept = document.getElementById("sept");
const huit = document.getElementById("huit");
const neuf = document.getElementById("neuf");
const zero = document.getElementById("zero");
const supp = document.getElementById("supp");


document.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === "=") {
    egal.click();
  }

  if (event.key === "c" || event.key === "Escape" || event.key === "C") {
    echap.click();
  }

  if (event.key === "+") {
    plus.click();
  }

  if (event.key === "*" || event.key === "µ" || event.key === "X" || event.key === "x") {
    fois.click();
  }

  if (event.key === "-") {
    moins.click();
  }

  if (event.key === "/" || event.key === ":") {
    divise.click();
  }

  if (event.key === "%" || event.key === "ù") {
    mod.click();
  }

  if (event.key === "." || event.key === ";" || event.key === "," || event.key === "?") {
    point.click();
  }

  if (event.key === "(") {
    ouvert.click();
  }

  if (event.key === ")" || event.key === "°") {
    ferme.click();
  }

  if (event.key === "1" || event.key === "&") {
    un.click();
  }

  if (event.key === "2" || event.key === "é") {
    deux.click();
  }

  if (event.key === "3" || event.key === '"') {
    trois.click();
  }

  if (event.key === "4" || event.key === "'") {
    quatre.click();
  }

  if (event.key === "5") {
    cinq.click();
  }

  if (event.key === "6") {
    six.click();
  }

  if (event.key === "7" || event.key === "è") {
    sept.click();
  }

  if (event.key === "8" || event.key === "_") {
    huit.click();
  }

  if (event.key === "9" || event.key === "ç") {
    neuf.click();
  }

  if (event.key === "0" || event.key === "à") {
    zero.click();
  }
  
  if (event.key === "Backspace") {
    supp.click();
  }
});