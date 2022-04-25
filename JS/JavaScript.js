// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Primeira mensagem
function firstBotMessage() {
    let firstMessage = "Como você esta?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Absorve as resposta
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Obtém o texto de texto da caixa de entrada e o processa
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "kkjdjl!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Lida com o envio de texto por meio de cliques de botão
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("coração clicado!")
}

// Pressione enter para enviar uma mensagem
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

//Respostas

function getBotResponse(input) {
    //rock paper scissors
    if (input == "Pedra") {
        return "Papel";
    } else if (input == "Papel") {
        return "tesoura";
    } else if (input == "tesoura") {
        return "pedra";
    }

    // Simple responses
    if (input == "Ola") {
        return "Ola";
    } else if (input == "Adeus") {
        return "Falo com você mais tarde!";
    } else {
        return "Tente perguntar outra coisa!";
    }
}