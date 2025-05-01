function scrollAnswer(answerNumber){
    let answer = document.getElementById("answer"+answerNumber);
    answer.scrollIntoView({behavior:"smooth"});
}
function goToTop(){
    let question = document.getElementById("questionHeader");
    question.scrollIntoView({behavior:"smooth"});
}