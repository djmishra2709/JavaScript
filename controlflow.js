// if else condition

if(1===2 && true!==false && 1<2)
{console.log("1 condition")}
else if( 2===1)
{
    console.log("2 condition")
}
else{
    console.log("3 condition")
}

//switch case condition

let condition='A';

switch(condition){

    case 'A':
        console.log("condition A");
        break;
    case 'B':
        console.log("condition B");
        break;
    default:
        console.log("condition default");
      
}

// for loop

for (let i=0;i<5;i++)
{
    console.log("for loop :"+i)
}

//while loop

let j=1;
while(j===1)
{
    console.log("While loop run..")
    j=2;
}

//for in loop

const person={
    name :'Dheraj',
    age: 30
};
for(let x in person)  // here x will store key of this list
{
    console.log(x ,'',person[x]);
}

let array =['A','B','C'];
for(let y in array)
{
    console.log(y ,' ',array[y]);
}

//for of loop
for(let z of array)
{
    console.log(z);
}

//prime number function

showprint(10);

function showprint(limit)
{
    for(let number=2;number<=limit;number++)
    if(isprime(number)) console.log(number);

}
function isprime(number)
{
    for (let factor=2;factor<number;factor++)
        if(number%factor===0)
        return false;

    return true;
}

