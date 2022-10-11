# frontEnd
//This calculator is my first project in javascript (10/9-10/10/22). It attempts to mimic the standard OSX calculator (in non-scientific mode). It was inspired by FrontEndMasters intro to web development course with Brian Holt. 

//The calculator can basically be seen as doing logic on an ordered list on characters. 

//There is some back-end logic (which determines when and how to do a 'calculation') and front-end logic (which controls the display).

//Back-end: The required conditions to 'calculate' are fufilled when the final characters in the input string have the following pattern: (number,operator, number,operator || equals). Without this information, the calculator doesn't know how to interpret equals or an operator. (number,operator,number) 'primes' the calculator to calculate. Operator or equals, both trigger a calculation.

//Front-end is fairly straightforward. It has some logic to prevent leading zeros or multiple decimal points. It concatenates the string, unless the previous input was operator or equals, in which case it clears the display and starts fresh. 
