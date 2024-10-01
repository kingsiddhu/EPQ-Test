var quizdata = [
    {
        question : "Would you take drugs which may have strange or dangerous side effects?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    }/*,
    {
        question : "Do you enjoy hurting people you love?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you have enemies who want to harm you?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you enjoy practical jokes that can sometimes really hurt people?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do good manners and cleanliness matter much to you?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you lock up your house carefully at night?",
        options : ["Yes","No"],
        answer : "No",
        type : "1"
    },
    {
        question : "Would it upset you a lot to see a child or an animal suffer?",
        options : ["Yes","No"],
        answer : "No",
        type : "1"
    },
    {
        question : "Do you try not to be rude to people?",
        options : ["Yes","No"],
        answer : "No",
        type : "1"
    },
    {
        question : "Does your mood often go up and down?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Do you often worry about things you should not have done or said?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Are you an irritable person?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Are your feelings easily hurt?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Do you worry about your health?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Do you suffer from sleeplessness?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Do you often feel life is very dull?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Have you ever wished that you were dead?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "2"
    },
    {
        question : "Do you have many different hobbies?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "3"
    },
    {
        question : "Are you a talkative person?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "3"
    },
    {
        question : "Can you usually let yourself go and enjoy yourself at a lively party?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "3"
    },
    {
        question : "Do you enjoy meeting new people?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "3"
    },
    {
        question : "Do you like going out a lot?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "3"
    },
    {
        question : "Do you like telling jokes or funny stories to your friends?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "3"
    },
    {
        question : "Do you like plenty of bustle and excitement around you?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "3"
    },
    {
        question : "Do you tend to keep in the background on social occasions?",
        options : ["Yes","No"],
        answer : "No",
        type : "3"
    },
    {
        question : "If you say you will do something, do you always keep your promise no matter how inconvenient it might be?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "4"
    },
    {
        question : "Do you always practice what you preach?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "4"
    },
    {
        question : "Are you always willing to admit it when you have made a mistake?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "4"
    },
    {
        question : "Have you ever taken the praise for something you knew someone else had really done?",
        options : ["Yes","No"],
        answer : "No",
        type : "4"
    },
    {
        question : "Were you ever greedy by helping yourself to more than your share of anything",
        options : ["Yes","No"],
        answer : "No",
        type : "4"
    },
    {
        question : "Have you ever blamed someone for doing something you knew was really your fault?",
        options : ["Yes","No"],
        answer : "No",
        type : "4"
    }*/
    

];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

quizdata = shuffleArray(quizdata);
console.log(quizdata);
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;

let Psychotism_score = 0
let neuroticism_score = 0
let extraversion_score = 0
let lie_score = 0

let optionchoosen ='';

function showQuestion(){
    const question = quizdata[currentQuestion];
    questionElement.innerHTML =currentQuestion+1 +". " + question.question;

}

function selectAnswer(e){
    optionchoosen = e;
    console.log(optionchoosen,"ss");
    
}

function nextQuestion(){
    const answer = quizdata[currentQuestion].answer;
    const type = quizdata[currentQuestion].type;
    console.log(optionchoosen === answer,optionchoosen == answer,optionchoosen, answer)
    if (optionchoosen != ""){
        if (optionchoosen === answer){
            if (type=="1"){
                Psychotism_score++;
            } else if (type=="2"){
                neuroticism_score++;
            } else if (type=="3"){
                extraversion_score++;
            } else if (type=="4"){
                lie_score++;
            }
            console.log(Psychotism_score, neuroticism_score, extraversion_score, lie_score);
        }
        if (currentQuestion+1<quizdata.length) {
            console.log(currentQuestion,quizdata.length);
            currentQuestion++;
            showQuestion();
        } else {
            showResult();
        }
    }
    
    optionchoosen ='';
}

function showResult(){

    document.getElementById('quiz').innerHTML = "<h3>Psycotism Score: "+Psychotism_score+ "</h3><h3>Extraversion Score: "+extraversion_score+"</h3><h3>Neurotism Score: "+neuroticism_score+"</h3><h3>Lie Score: "+lie_score+"</h3>";
}
showQuestion();