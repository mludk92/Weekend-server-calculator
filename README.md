# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?
functionality 

1) user can type in basic math equations with add sub mult and div operands 
2) double clicking minus will allow for negitive, since the next numbers spacing will be reduced for readability reasons
3) clear option will delete all values from the input field for a start over
4) after equal is pressed the answer as well as all previous answers are appended to the DOM for referance. 
5) if the equation input is incorrect the app stops the post request and sends an alert to user ask to verify the input equation 
6) after correct input the input field is cleared automatically 
7) a clear history button which will delete the history from the server and clear the previous result so not loaded on refresh of page. 
8) previous results can be click, and the equation clicked on will append back to the input field for reuse.
 


issues while building 
1) wanted a clean layout for the buttons, used css grid to achieve this. 
    spacing in grid can be finicy and one small edit can screw up everything. which is why i have clear and equals as large buttons on top and bottom. since the count of buttons with them is no longer
    divisable by 3. 
2) had no good way to allow for a negitive number, tried to do onClick and ondblclick functions for the same html line
    this did not work. ended up using a event listener which counts the time between clicks, if the duration is short enough then a double click is allowed and a neg(-)
    is passed in. if to long then i go back to my minus symbol which " - " has a space on both sides for improved readability. 
    the spaces was originally added when i wanted to do a string split in order to get the values and operands separate. 
    -- i was debating about doing a similar double click for clear which would empty the array of previous values on the server, but thought a real user may not like this. 
3) tried to set up hovers in css but found it easier to do this with inline html 
4) found the built in equation eval which very simply calculates the value of string 
5) after building realized i was not supposed to eval() to solve the equations. after spending way to much time trying to find a way to 
do split() on the intial string and sending this through some very lengthy forloops i decided to research libaries which could do the same thing as eval() and caculating strings but 
with using the function. 
i ended up finding a libary called stringMath 
-----------------------------------------------------------------------------------------------------------------
string-math is a module (function) that computes the [Number] result from the [String] arithmetical formula.

It does not use eval()
It uses regular expressions to parse [String] formulas "2+2" into [Number] formulas 2+2. Then it is performed as the common JavaScript arithmetic operation.
-----------------------------------------------------------------------------------------------------------------
to get this to work npm install string-math is run on the server, and the server file needs to require('string-math')
i was then able to replace eval() with stringMath() and keep all functionality.
Works beautifully ! 