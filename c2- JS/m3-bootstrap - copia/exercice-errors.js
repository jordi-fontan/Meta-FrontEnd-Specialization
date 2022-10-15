
function add2(a,b)
{
    try {
        if(typeof(a)!="number" || typeof(b)!="number") throw new Error("Not a number");
        else console.log(a+b);


    } catch (error) {
     console.log("Ewk",error);
     console.log('Argggggg?');
    }
}

add2(8,9);
add2('8',9);
console.log('Still runniing');

/*
Exercise: Defensive programming

Defensive programming is all about assuming that all the arguments
 a function will receive are of the wrong type,  the wrong value or both.


How would you then refactor the function given below with 
defensive programming in mind?

For this exercise, let's make sure that both of
 the arguments that are passed in satisfy the following criteria:

    - The length of the word parameter cannot be less than 2.

    - The length of the match parameter must be 1.

    - The type of both the word and the match parameters must be string.

You will use the code below to complete your task:
//////////////////
function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
//////////////////

Here are the tasks to complete:

    1- Just above the for loop in the letterFinder function definition, 
    declare a variable named condition1 and assign to 
    it the following code: .

    2. Declare a variable named condition2 on the next line and
     assign to it and assign to it a check that makes
      sure that the type of match is a string AND that the length of the
       match variable is equal to 1.

    3. Write an if statement on the next line that 
       checks that condition1 is true, and condition2 is true

    4. Move the rest of the function's body into the if statement you
         wrote in the previous step.

    5. Code an "else" block after the "if" condition and console.log 
            the following: "Please pass correct arguments to the function.".

    6. As a failing test, run the letterFinder function and pass it with
       any two numbers as arguments.

    7. As a passing test, run the letterFinder funciton and
       pass it with correct arguments, such as: letterFinder("cat", "c").

*/


function letterFinder(word, match) {
    var c1= typeof(word) == 'string' && word.length >= 2
    var c2= typeof(match) == 'string' && match.length == 1
    if(c1 && c2)
    {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }

    }
    else
    {

        console.log('Por favor comportate');

    }
    
    
}
letterFinder([],[]);
letterFinder(3,5);
letterFinder('jamon','n');

var result = null;
console.log(result);
