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

