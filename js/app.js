'use strict';


let username=prompt("whats your name?");
alert("Hello"+" ;"+ username + ";" +"please answer a questions");
//console.log(username);



let w = 0;

let f1 =prompt(username+ " ;" +"do you think i like football?");

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

let f2 =prompt(username+ "-" +"do you think i love real madrid ?");

if (f2.toLocaleUpperCase() === "yes"|| f2.toLocaleUpperCase() === "y" )
{
    alert("yes it is correct");
    //console.log("it is correct");
    w++;
    
}
else{
    alert("no it is rong");
    //console.log("it is rong");
}

let f3 =prompt(username+ "-"+ "do you think i watch football match?");

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

let f4 =prompt(username+ "-"+ "do you think i play football?");


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

let f5 =prompt(username+"-"+"do you think i visit santiago bernabeu?");

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



let myAge = 34;
        let j = 0;
        while (j <= 4) {
            j++;
            let prompt6 = parseInt(prompt('What\s my age?'));
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





    let fav=['flower','sea','birds'];

   

        
        let y=0;

        for(let x = 0 ; x < fav.length ; x++ ){

            for( y = 0 ; y < 6 ; y++){     

        let f7=prompt("what you believe i prefer? ");

        if(f7 == 'flower'|| f7 =='sea' || f7 =='birds'){

            alert("Thats correct");
            w++;
            break;

        }
        else{
            alert("Try again!");
        } 

        }
       
        
    }
    document.write("total score:" + " "+ w);


  

























     