function submitScore() {
    let score = 0;

    // Get the selected answer from question 1
    const qOneAns = document.getElementsByName("qOne");
    let ansOne = "";

    for(let i = 0; i < qOneAns.length; i++) {
        if(qOneAns[i].checked)
            ansOne = qOneAns[i].value;
    }

    // Get the selected answer from question 2
    const qTwoAns = document.getElementsByName("qTwo");
    let ansTwo = "";

    for(let i = 0; i < qTwoAns.length; i++) {
        if(qTwoAns[i].checked)
            ansTwo = qTwoAns[i].value;
    }

    // Get the selected answer from question 3
    const qThreeAns = document.getElementsByName("qThree");
    let ansThree = "";

    for(let i = 0; i < qThreeAns.length; i++) {
        if(qThreeAns[i].checked)
            ansThree = qThreeAns[i].value;
    }

    // Get the selected answer from question 4
    const qFourAns = document.getElementsByName("qFour");
    let ansFour = "";

    for(let i = 0; i < qFourAns.length; i++) {
        if(qFourAns[i].checked)
            ansFour = qFourAns[i].value;
    }

    // Get the selected answer from question 5
    const qFiveAns = document.getElementsByName("qFive");
    let ansFive = "";

    for(let i = 0; i < qFiveAns.length; i++) {
        if(qFiveAns[i].checked)
            ansFive = qFiveAns[i].value;
    }

    // If answer 1 is correct add a point
    if (ansOne === "mercury"){
        score ++;
    }

    // If answer 2 is correct add a point
    if (ansTwo === "gas"){
        score ++;
    }

    // If answer 3 is correct add a point
    if (ansThree === "mer"){
        score ++;
    }

    // If answer 4 is correct add a point
    if (ansFour === "mar-jup"){
        score ++;
    }

    // If answer 5 is correct add a point
    if (ansFive === "storm"){
        score ++;
    }

    // USerr feedback about the result
    alert("You got " + score + " out of 5 correct");
}
