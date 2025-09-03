# Notes Page
This is the notes page where I will outline and write pseudocode. 

This will additionally be a way to keep track of my ideas when I return to work on the project. So I can remember where I was when I left off.

## Directions from Odin Project (simplified)
### Step 1: Write the logic to get the computer choice.
---

Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

1. Name the function ``` getComputerChoice ```
2.  Write the function to randomly return one of the string values "rock", "paper", "scissors".
3.  Test function.

**Hint**: Math.random()

### Step 2: Write the logic to get the human choice.
---
1. Create function ``` getHumanChoice```
2. Write function to return one of the choices dependent upon user input.
    
    **Hint**: Use ```prompt``` and 
    do not worry about input validation.
    
### Step 3: Declare player score variables.
---
1. Declare global variables ```humanScore``` & ```computerScore```.
2. initialize the variables with a value of ```0```.

### Step 4: Write the logic to play a single round.
--- 
1. Create function ```playRound```.
2. Define parameters for ```playRound```: ```humanChoice``` and ```computerChoice```. Use these parameters to take the actual choices as arguments.
3. Make ```humanChoice``` parameter case-insensitive.
4. write code to ```console.log``` a string value representing the winner.
    - (i.e.) "You lose! Paper beats Rock!"
5. increment ```humanScore``` or ```computerScore``` based on the winner.

### Step 5: Write the logic to play whole game.
---
1. Create function ```playGame``` which calls ```playRound``` for 5 rounds keeps score and declares a winner.
2. Move ```playRound``` inside of ```playGame``` with score variables so they are declared inside of ```playGame```.

## My Notes

### Getting the computers choice.

* The computer's choice will be returned by using 
```Math.floor(Math.random()*3)```

    1.```Math.random()``` will get a random floating-point number > 0 && < 1. Multiplying by three will give a maximum value of 2.777...
    
    2.  Using ```Math.floor()``` rounds down the number to nearest integer. Giving only three possibilites: 0, 1 ,2. 
    
        a. 0 = rock

        b. 1 = paper

        c. 2 = scissors

### Getting Human Choice

* The human choice will be achieved using prompt.

    1. syntax ``` prompt(message,defaultValue)```
    2. 



### Play Single Round:

