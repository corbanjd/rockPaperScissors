

        // 3.) a function that randomly returns either rock, paper, or scissors.

        function computerPlay() {
            let computerArray = [
                "Rock",
                "Paper",
                "Scissors"

            ];

            return computerArray[Math.floor(Math.random() * computerArray.length)];

        }



        function inputFixer(value) {

            let firstLetter = value.charAt(0);
            let restOfString = value.slice(1).toLowerCase();
            value = firstLetter.toUpperCase() + restOfString;
            return value;


        }



        //4.) this plays a single round and returns whether you win or lose in a string variable, and why you lose.
        function playRound(playerSelection, computerSelection) {

            if (playerSelection == "Rock" && computerSelection == "Rock") {
                return "You tied! Rock equals rock.";
            }

            else if (playerSelection == "Rock" && computerSelection == "Paper") {
                return "You lost! Paper crumples rock.";

            }
            else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                return "You won! Rock crushes scissors.";

            }

            else if (playerSelection == "Paper" && computerSelection == "Rock") {
                return "You won! Paper crumples rock.";

            }
            else if (playerSelection == "Paper" && computerSelection == "Paper") {
                return "You tied! Paper equals paper.";

            }
            else if (playerSelection == "Paper" && computerSelection == "Scissors") {
                return "You lost! Scissors cuts paper.";

            }
            else if (playerSelection == "Scissors" && computerSelection == "Rock") {
                return "You lost! Rock crushes scissors.";

            }
            else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                return "You won! Scissors cuts paper.";

            }
            else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
                return "You tied! Scissors equals scissors.";

            }

            else {
                return 'Please type "Rock, Paper, or Scissors!" ';
            }



        }


        //this runs a 5 round game, and reports whjen someone wins or loses at the end.

        /*
                //a function that keeps track of how many times you've won/lost
                function winChecker() {
                    if (playRound.slice(0,8) == "You won!"){
                        return 
        
                    }
                }
                */

        // a function that keeps track of the score... It should return Player Score : x. Computer Score: y.

        /*
        let playerScoreTracker = 0;
        let computerScoreTracker = 0;



        function scoreChecker() {

            if (playRound.slice(0, 8) == "You won!") {
                return playerScoreTracker += 1;
                return computerScoreTracker;

            }

            else {
                return playerScoreTracker;
                return computerScoreTracker += 1;
            }

        }

        */

        let playerWinTracker = 0;
        let computerWinTracker = 0;
        let tieTracker = 0;

        function game() {

            for (i = 1; i <= 5; i++) {

                //tracking rounds.
                let roundNumber = "Round: " + i;
                console.log(roundNumber);
                //prompting for selection
                let playerSelection = window.prompt("Rock, Paper, or Scissors?");
                //computer playing / selection / printing to console....
                let computerSelection = computerPlay();
                console.log(`Computer choice: ${computerSelection}`);
                //this runs the functions that fixes the input...Probably best to run this before running the function playRound
                //also prints it to the console.
                playerSelection = inputFixer(playerSelection);
                console.log(`Player choice: ${playerSelection}`);
                //this plays a single round.
                console.log(playRound(playerSelection, computerSelection));
                // this slices a string to track if we've won.
                let winCheck = playRound(playerSelection, computerSelection).slice(0, 7);
                // this says if you've won, lost, or tied the round.
                function totalTracker() {
                    if (winCheck == "You won") {
                        return `Player Score: ${playerWinTracker += 1}`;
                    }
                    else if (winCheck == "You tie") {

                        return `Tie Score: ${tieTracker += 1}`;
                    }
                    else if (winCheck != "You tie" || "You won") {
                        return `Computer Score: ${computerWinTracker += 1}`;
                    }
                }
                //this sets up a variable to print who won what in a more formatted way:
                //EX: Computer:ScoreValue, or Player: ScorValuee, or Tie: ScoreValue
                //it also prints the value...
                let roundResult = totalTracker();
                console.log(roundResult);
                //This simply prints who run the round, or whether or not it was tied.
                // let roundWinner = roundWinChecker();

                // function roundWinChecker() {
                //     if (playerWinTracker > computerWinTracker && i == 5) {
                //         console.log("Player wins round.");

                //     }

                //     else if (computerWinTracker > playerWinTracker && i == 5) {
                //         console.log("Computer wins round.");
                //     }

                //     else if (computerWinTracker == playerWinTracker && i == 5) {
                //         console.log("You tied.");

                //     }
                // }



                function roundWinChecker() {
                    if (playerWinTracker > computerWinTracker && i == 5) {
                        console.log("Player wins round.");

                    }

                    else if (computerWinTracker > playerWinTracker && i == 5) {
                        console.log("Computer wins round.");
                    }

                    else if (tieTracker > computerWinTracker && tieTracker > playerWinTracker && i == 5) {
                        console.log("You tied.");

                    }
                }

                let roundWinner = roundWinChecker();
            }


        }
        let gameRunner = game();



        //New variables needed... Something to reset the match after 5 rounds..
        //Something that tracks who won after 5 rounds....
        //so we'll need a score variable...
        //something that keeps the score.






        // for (i = 1; i <= 5; i++) {
        //     //print / keep track of the round number...
        //     let roundNumber = "Round: " + i;
        //     console.log(roundNumber);


        //     //all of this works below... comment all out later... 





        //     //this prompts for input of either rock, paper, or scissors..
        //     let playerSelection = window.prompt("Rock, Paper, or Scissors?");


        //     //this proves it works
        //     let computerSelection = computerPlay();
        //     console.log(`Computer choice: ${computerSelection}`);
        //     //will return a string that says either, "you lose or you win, and why you lost or won." Definitely best to run this before playRound.



            // //this runs the functions that fixes the input...Probably best to run this before running the function playRound
            // playerSelection = inputFixer(playerSelection);
            // console.log(`Player choice: ${playerSelection}`);

        //     //logging /running the functions....
        //     console.log(playRound(playerSelection, computerSelection));



        //     /*
        //                 let runScoreCheck = scoreChecker();
        //                 console.log(runScoreCheck);

        //     */


            // let winCheck = playRound(playerSelection, computerSelection).slice(0, 7);



            // function totalTracker() {



            //     if (winCheck == "You won") {
            //         return `Player Score: ${playerWinTracker += 1}`;


            //     }

            //     else if (winCheck == "You tie") {

            //         return `Tie Score: ${tieTracker += 1}`;

            //     }

            //     else if (winCheck != "You tie" || "You won") {


            //         return `Computer Score: ${computerWinTracker += 1}`;

            //     }


            // }

        //     let roundResult = totalTracker();
        //     console.log(roundResult);

            // let roundWinner = roundWinChecker();

            // function roundWinChecker() {
            //     if (playerWinTracker > computerWinTracker && i == 5) {
            //         console.log("Player wins round.");

            //     }

            //     else if (computerWinTracker > playerWinTracker && i == 5) {
            //         console.log("Computer wins round.");
            //     }

            //     else if (computerWinTracker == playerWinTracker) {
            //         console.log("You tied.");

            //     }
            // }




        // }








