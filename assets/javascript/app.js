


//for keeping score!
var correctAnswerScore = 0;
var incorrectAnswerScore = 0;
var nonAnswer = 0;

var answered = false;

var userChoice0=""; //Question1 userChoice
var userChoice1="";//Question2
var userChoice2="";//Question3
var userChoice3="";//Question4
var userChoice4="";//Question5

var visibleTimer = 30;
var interval = setInterval(function(){
    visibleTimer--;
    $("#timer").html('<h3>Time Remaining: ' + visibleTimer + '</h3>');
    if (visibleTimer == 0) {
        clearInterval(interval);
    }
}, 1000);

        





var questions = [
    {
        question: "What is my favorite brand of boot?",
        choices: ["TonyLama","Justin","Moonshine","Luchesse"],
        
        
    },
    {
        question: "What is my favorite brand of hat?",
        choices: ["Stetson","Top","CodyJames","Bullhide"],
        

    },
    {
        question: "What are the names of my dogs?",
        choices: ["Bradley/Lulu","Gunner/Ranger","Ghost/Strudle","Dallas/Austin"],

    },
    {
        question: "Where was I born?",
        choices: ["Juneau","Denver","Nashville","Westlake"],
    },
    {
        question: "What's my middle name?",
        choices: ["Roger","Michael","James","Cody"],
    },
];//end of var questions

 



$("#game").hide();
$("#results").hide();

//Let's begin the game!

$("#startButton").on("click", function(){
    $("#startButton").hide();
    newGame();
    $("#timer").show();

    //let's build the visible countdown (as an additional timer to the intrinsic timeout)






        
    

    setTimeout(function() {
   
        
//Eval Logic
    if (userChoice0=="") {
    
    console.log("no answer!");
    nonAnswer++;


    }

    else if (userChoice0.attr('id') == 'Justin') {
    correctAnswerScore++;
    console.log("yes!");
   
    }

    else {
    incorrectAnswerScore++;
    console.log("wrong");
    
    
    
    };

    //Question2 Eval

    if (userChoice1=="") {
    nonAnswer++;
    console.log("no answer!");
        
        
    }
        
    else if (userChoice1.attr('id') == 'Stetson') {
    correctAnswerScore++;
    console.log("yes!");
           
    }
        
    else {
    incorrectAnswerScore++;
    console.log("wrong");
            
            
    
    };
    //Question 3 

    if (userChoice2=="") {
        nonAnswer++;
        console.log("no answer!");
            
            
    }
            
    else if (userChoice2.attr('id') == 'Bradley/Lulu') {
    correctAnswerScore++;
    console.log("yes!");
               
    }
            
    else {
    incorrectAnswerScore++;
    console.log("wrong");
                
                
                
    };
    //Question 4

    if (userChoice3=="") {
        nonAnswer++;
        console.log("no answer!");
            
            
    }
            
    else if (userChoice3.attr('id') == 'Westlake') {
    correctAnswerScore++;
    console.log("yes!");
               
    }
            
    else {
    incorrectAnswerScore++;
    console.log("wrong");
                
                
                
    };

    //Question 5

    if (userChoice4=="") {
        nonAnswer++;
        console.log("no answer!");
            
            
    }
            
    else if (userChoice4.attr('id') == 'James') {
    correctAnswerScore++;
    console.log("yes!");
               
    }
            
    else {
    incorrectAnswerScore++;
    console.log("wrong");
                
                
                
    };

            $("#game").hide();
            $("#results").show();
            

        $("#correctScore").text("Total Score: " + correctAnswerScore + " out of 5!");
        $("#incorrectScore").text("Incorrect: " + incorrectAnswerScore);
        $("#blank").text("Questions left unanswered: " + nonAnswer);
        
        


    }, 30000);

    });
//This is anticipatory! We still need to create / define newGame()!




function newGame(){
    $("#game").show();
    $("#results").hide();
    correctAnswerScore = 0;
    incorrectAnswerScore = 0;
    nonAnswer = 0
    questionFunction();
    //^^ Again, we need some function for displaying the questions!   Why not name our yet to be defined function, "questionFunction?"

};

function questionFunction () {
// $("#answers").hide();
$("#questions").show();

answered = true;


for (var i = 0; i < questions.length; i++) {
$("#questions").append(questions[i].question);
for (j=0; j< questions[i].choices.length; j++) {
    var newDiv = $("<div>");
    newDiv.html('<input type="radio" id=' + questions[i].choices[j] +' name=' + [i] +' value=' + [j] +' class="radioButtons">'+ questions[i].choices[j]);
    $("#questions").append(newDiv);

    // console.log(questions[i].choices[j]);//console logging the possible choices!


    };//end of inner forloop
    
   
};//end of outer forloop

$('input[name="0"]').on("click", function() {
    userChoice0 = $(this);
    // console.log("question " + $(this).attr('name'));
    // console.log("answer choice " + $(this).val());

});//end of userChoice0 selection (Question1)

$('input[name="1"]').on("click", function() {
    userChoice1 = $(this);
    // console.log("question " + $(this).attr('name'));
    // console.log("answer choice " + $(this).val());

});//end of userChoice1 selection (Question2)

$('input[name="2"]').on("click", function() {
    userChoice2 = $(this);
    // console.log("question " + $(this).attr('name'));
    // console.log("answer choice " + $(this).val());

});//end of userChoice1 selection (Question3)

$('input[name="3"]').on("click", function() {
    userChoice3 = $(this);
    // console.log("question " + $(this).attr('name'));
    // console.log("answer choice " + $(this).val());

});//end of userChoice1 selection (Question4)

$('input[name="4"]').on("click", function() {
    userChoice4 = $(this);
    
    // console.log("question " + $(this).attr('name'));
    // console.log("answer choice " + $(this).val());

});//end of userChoice1 selection (Question5)



}; // end of questionFunction ()



        





