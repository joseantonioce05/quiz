const bd_game = [
    {
        id:0,
        question:"¿Quien es el padre de la saga?",
        op0:"Shigeru Miyamoto",
        op1:"Eiji Aonuma",
        op2:"Satoru Iwata",
        correct:"0"
    },
    {
        id:1,
        question:"¿En que se inspiro su creador para realizar el primer The Legend of Zelda?",
        op0:"Leyendo sobre aventuras en libros",
        op1:"Haber cazado bichos en el bosque",
        op2:"En sus aventuras en el bosque de niño",
        correct:"2"
    },
    {
        id:2,
        question:"¿En que año se lanzo el primer The Legend of Zelda?",
        op0:"1998",
        op1:"1986",
        op2:"1990",
        correct:"1"
    },
    {
        id:3,
        question:"¿Cual es la entrega que fue un antes y despues para la saga?",
        op0:"The Legend of Zelda: Ocarina of Time",
        op1:"The Legend of Zelda: Skyward Sword",
        op2:"The Legend of Zelda: A Link to Past",
        correct:"0"
    },
    {
        id:4,
        question:"¿Cual es la entrega que se considera mas oscura de la saga?",
        op0:"The Legend of Zelda: Twilight Princess",
        op1:"The Legend of Zelda: A Link to Past",
        op2:"The Legend of Zelda: Majora Mask",
        correct:"2"
    },
    {
        id:5,
        question:"¿Cual es la ultima entrega de la saga?",
        op0:"The Legend of Zelda: Echoes of Wisdom",
        op1:"The Legend of Zelda: Tears of the Kingdom",
        op2:"The Legend of Zelda: The Wind Waker",
        correct:"0"
    },
]

let answers = [];
let amountQuestionCorrect = 0;
let amountQuestion = 0;

function uploadQuestions(){

    const question = bd_game[amountQuestion];
    const container = document.createElement("div");
    container.className = "question-container";
    container.id = question.id;
    const h2 = document.createElement("h2");
    h2.textContent = question.id + 1 + " - " + question.question;
    container.appendChild(h2);
    const options = document.createElement("div");

    const label1 = createLabel("0",question.op0);
    const label2 = createLabel("1",question.op1);
    const label3 = createLabel("2",question.op2);

    options.appendChild(label1);
    options.appendChild(label2);
    options.appendChild(label3);

    container.appendChild(options);
    document.getElementById("game").appendChild(container);
}

function createLabel(num, textOption){
    const label = document.createElement("label");
    label.id = "l" + amountQuestion + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + amountQuestion;
    input.setAttribute("onclick", "selectOption(" + amountQuestion+","+num+")");
    const span = document.createElement("span");
    const correction = document.createElement("span");
    correction.id = "p" + amountQuestion + num;
    span.textContent = textOption;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correction);

    return label;
}

for(i=0;i < bd_game.length;i++){
    uploadQuestions();
    
    amountQuestion++;
}

function selectOption(pos, optionSelect){
    answers[pos] = optionSelect;
}

let correction = document.getElementById("correction");
correction.onclick = function(){
    for(i=0;i<bd_game.length;i++){
        const question = bd_game[i];
        if(question.correct == answers[i]){
            amountQuestionCorrect++;
            let idCorreccion = "p" + i + question.correct;
            document.getElementById(i).className = "question-container correct";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "success";
        }else{
            let id = "p" + i + answers[i];
            let idCorreccion = "p" + i + question.correct;
            document.getElementById(i).className = "question-container incorrect";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-success";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "success";
        }
    }

    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    window.scrollTo(0,0);
    h2 = document.createElement("h2");
    h2.className = "result";
    h2.textContent = amountQuestionCorrect + " CORRECTAS - " + (amountQuestion-amountQuestionCorrect) + " INCORRECTAS";
    document.getElementById("game").appendChild(h2);
}