$(function() {

    for (i=0; i < 3; i++)
    {
    
    
        var computerChoice = null;
        var userChoice = null;
    
    
    
        $('#rock').click(function(){
            userChoice = "rock";
        });
        $('#paper').click(function(){
            userChoice = "paper";
        });
        $('#scissors').click(function(){
            userChoice = "scissors";
        });
    
    
        function newComputerChoice ()
        {
            computerChoice = Math.floor(Math.random() * 3) + 1;
            //take the random number from computerChoice above and assign it rock paper or scissors.
            if (computerChoice == 1)
                {
                    computerChoice = "rock";
                }
            else if (computerChoice == 2)
                {
                    computerChoice = "paper";
                }
            else 
                {
                    computerChoice = "scissors";
                }
    
        }
    
        if (userChoice == computerChoice){
            alert ("Tie!");
        } else if (userChoice == "rock" && computerChoice == "scissors"){
            alert ("You win!");
        } else if (userChoice == "paper" && computerChoice == "rock"){
            alert ("You win!");
        } else if (userChoice == "scissors" && computerChoice == "paper"){
            alert ("You win!");
        } else if (computerChoice == "rock" && userChoice == "scissors"){
            alert ("Sorry, you lose.")
        } else if (computerChoice == "paper" && userChoice == "rock"){
            alert ("Sorry, you lose.")
        } else if (computerChoice == "scissors" && userChoice == "paper"){
            alert ("Sorry, you lose.")
        }
    
    
    }  
    
    