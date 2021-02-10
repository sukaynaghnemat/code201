'use strict';

function userInfo ( username , userPhone){
 username=prompt('whats your name?');
alert('Hello '+ username );
//console.log(username);
 userPhone= prompt('What\'s your phone number ?');
alert ('I will be contact with you soon ')
}
userInfo ();

alert ('please answer the following questions');
let w = 0;
function yesNoQ ( f1, f2,f3,f4,f5)
{
 f1 =prompt('Do you think i like football?');

if (f1.toLocaleLowerCase() === "yes"|| f1.toLocaleLowerCase() === "y" )
{
    alert("yes it is correct");
   // console.log("it is correct");

   w++;
}


else {
    alert("no it is rong");
    //console.log("it is rong");

}

 f2 =prompt("Do you think i love real madrid ?");

if (f2.toLocaleLowerCase() === "yes"|| f2.toLocaleLowerCase() === "y" )
{
    alert("yes it is correct");
    //console.log("it is correct");
    w++;
    
}
else{
    alert("no it is rong");
    //console.log("it is rong");
}

f3 =prompt('Do you think i watch football match?');

if (f3.toLocaleLowerCase() === "yes"|| f3.toLocaleLowerCase() === "y" )
{
    alert("yes it is correct");
    //console.log("it is correct");
    w++;
    
    
}
else {
    alert("no it is rong");
    //console.log("it is rong");


}

 f4 =prompt('Do you think i play football?');


if (f4.toLocaleLowerCase() === "no"|| f4.toLocaleLowerCase() === "n" )
{
    alert("yes it is correct");
    //console.log("it is correct");
    w++;
    
}
else{

    alert("no it is rong");
    //console.log("it is rong");
}

 f5 =prompt('Do you think i visit santiago bernabeu?');

if (f5.toLocaleLowerCase() === "no"|| f5.toLocaleLowerCase() === "n" )
{
    alert("yes it is correct");
   // console.log("it is correct");
   w++;
    
}
else{
    alert("no it is rong");
    //console.log("it is rong");
}
}
yesNoQ();

function guessNum (prompt6){
let myAge = 34;
        let j = 0;
        while (j <= 4) {
            j++;
             prompt6 = parseInt(prompt('What\s my age?'));
            if (j > 4) {
                alert('Let\'s move on');
            } else if (prompt6 === myAge) {
                alert('Yes that is correct!');
                w++;
                break;
            } else if (prompt6 < myAge) {
                alert (' ooh Too young!')
            } else if (prompt6 > myAge) {
                alert('ohh Too old!'); 
                j++
            }
            else{
                alert('your answer invalid');
        }
    }
}
guessNum();


function guessItem(f7 ){

 let fav=['flower','sea','birds'];
        let y ;

        for(y = 0 ; y < 6 ; y++ )
        {
            f7=prompt("what you believe i prefer? ");
            f7=f7.toLocaleLowerCase();

            for(let x= 0 ; x < fav.length; x++)
            {    
        if(f7 === fav[x])
        {


            alert("Thats correct");
            w++;
            y =8;
            break;

        }

        }
       
    }   
    
}
guessItem();

    alert("your total score: " + w +'out of 7');
let grade;
function totalGrade( w )
{
     grade= (w * 100) /7;
    return grade

}
totalGrade(w);
alert( ' your total grade is'+ grade +'%');



  

























     