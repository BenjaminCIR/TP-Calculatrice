function operation(value){
    console.log(value);
    texte = document.getElementById("ecran").textContent;
    console.log(texte);
    console.log('eval('+texte+')');
    result = eval(texte);
    console.log(result);
    return result;
}

function affichage(value){
    console.log(value);
    texte = document.getElementById("ecran").textContent;
    if (value != '=' && value != 'C'){
        document.getElementById("ecran").innerHTML = texte + value;
    }
    if (value == '='){
        let plus = "+";
        let moins = "-";
        let fois = "*";
        let sur = "/";
        let mod = "%";
        let dot = ".";
        let open_ = "(";
        let close_ = ")";

        let indexplus = texte.indexOf(plus);
        let indexmoins = texte.indexOf(moins);
        let indexfois = texte.indexOf(fois);
        let indexsur = texte.indexOf(sur);
        let indexmod = texte.indexOf(mod);
        let indexdot = texte.indexOf(dot);

        let count1 = 0;
        for (let i = 0; i < texte.length; i++) {
            if (texte[i] === open_) {
                count1++;
            }
        }
        let count2 = 0;
        for (let i = 0; i < texte.length; i++) {
            if (texte[i] === close_) {
                count2++;
            }
        }
        console.log(count1);
        console.log(count2);

        if(((texte.charAt(indexplus-1) === plus || texte.charAt(indexplus-1) === moins || texte.charAt(indexplus-1) === fois || texte.charAt(indexplus-1) === sur || texte.charAt(indexplus-1) === mod || texte.charAt(indexplus-1) === dot) || (texte.charAt(indexplus+1) === plus || texte.charAt(indexplus+1) === moins || texte.charAt(indexplus+1) === fois || texte.charAt(indexplus+1) === sur || texte.charAt(indexplus+1) === mod || texte.charAt(indexplus+1) === dot)) || ((texte.charAt(indexmoins-1) === plus || texte.charAt(indexmoins-1) === moins || texte.charAt(indexmoins-1) === fois || texte.charAt(indexmoins-1) === sur || texte.charAt(indexmoins-1) === mod || texte.charAt(indexmoins-1) === dot) || (texte.charAt(indexmoins+1) === plus || texte.charAt(indexmoins+1) === moins || texte.charAt(indexmoins+1) === fois || texte.charAt(indexmoins+1) === sur || texte.charAt(indexmoins+1) === mod || texte.charAt(indexmoins+1) === dot)) || ((texte.charAt(indexfois-1) === plus || texte.charAt(indexfois-1) === moins || texte.charAt(indexfois-1) === fois || texte.charAt(indexfois-1) === sur || texte.charAt(indexfois-1) === mod || texte.charAt(indexplus-1) === dot) || (texte.charAt(indexfois+1) === plus || texte.charAt(indexfois+1) === moins || texte.charAt(indexfois+1) === fois || texte.charAt(indexfois+1) === sur || texte.charAt(indexfois+1) === mod || texte.charAt(indexfois+1) === dot)) || ((texte.charAt(indexsur-1) === plus || texte.charAt(indexsur-1) === moins || texte.charAt(indexsur-1) === fois || texte.charAt(indexsur-1) === sur || texte.charAt(indexsur-1) === mod || texte.charAt(indexplus-1) === dot) || (texte.charAt(indexsur+1) === plus || texte.charAt(indexsur+1) === moins || texte.charAt(indexsur+1) === fois || texte.charAt(indexsur+1) === sur || texte.charAt(indexsur+1) === mod || texte.charAt(indexsur+1) === dot)) || ((texte.charAt(indexmod-1) === plus || texte.charAt(indexmod-1) === moins || texte.charAt(indexmod-1) === fois || texte.charAt(indexmod-1) === sur || texte.charAt(indexmod-1) === mod || texte.charAt(indexmod-1) === dot) || (texte.charAt(indexmod+1) === plus || texte.charAt(indexmod+1) === moins || texte.charAt(indexmod+1) === fois || texte.charAt(indexmod+1) === sur || texte.charAt(indexmod+1) === mod || texte.charAt(indexmod+1) === dot)) || ((texte.charAt(indexdot-1) === plus || texte.charAt(indexdot-1) === moins || texte.charAt(indexdot-1) === fois || texte.charAt(indexdot-1) === sur || texte.charAt(indexdot-1) === mod || texte.charAt(indexdot-1) === dot) || (texte.charAt(indexdot+1) === plus || texte.charAt(indexdot+1) === moins || texte.charAt(indexdot+1) === fois || texte.charAt(indexdot+1) === sur || texte.charAt(indexdot+1) === mod || texte.charAt(indexdot+1) === dot)) || (count1 != count2)){
            document.getElementById("ecran").innerHTML = "ERREUR";
            let buttons = document.getElementsByTagName("button");
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].value != "C") {
                  buttons[i].disabled = true;
                }
            }
        }
        else {
            document.getElementById("ecran").innerHTML = operation();;
        }
    }
}

function effacer(){
    document.getElementById("ecran").textContent = ""
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].value != "C") {
            buttons[i].disabled = false;
        }
    }
}