var quizdata = [
    {
        question : "Would you take drugs which may have strange or dangerous side effects?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "1.	Do you generally stutter while taking to strangers?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "o you sometimes feel that your life is useless?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you weep very easily?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you occasionally have fear while going out that you may miss your train?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you feel the lack of sleep?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you want to run away to some distant place having got tired of your [problems?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally commit such errors which are difficult to correct?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Are you afraid of going to high places?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you shed tears at the time of your troubles by the little sympathy of others?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you work under the condition of strain?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you become very sad by the contradiction of your own statement?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you have the fear of being unsuccessful even after thorough preparations?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally feel so that you are going to lose everything?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally think over the past events?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally have the fear of being caught by epidemic disease?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you become afraid of even the imagination of failure?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally get disturbed by imaginary evils?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally feel difficulty in making decisions?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you think yourself to be more unfortunate than others?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you feel that others generally misunderstand you?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally get so restless that it is difficult for you to sit in one place?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you feel that people taunt at your talks?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you think that death might have been somehow better?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you generally get lost in daydreaming?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Are you generally afraid to seeing a crowd?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you have difficulty concentrating at a certain object?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Does ordinary criticism of yourself make you restless?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Are you generally in high tension when your work is not completed?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you have such thoughts in your mind that you don’t like?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    },
    {
        question : "Do you have difficulty in respiration?",
        options : ["Yes","No"],
        answer : "Yes",
        type : "1"
    }

    

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