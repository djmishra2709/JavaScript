//constructor
console.log('log');

function circle(radius)
{
    this.radius=radius;
    this.draw =function()
    {
        console.log('log');
    }
}

const mycircle = new circle(1);


// Value type -> Number , String ,Boolean ,Symbol ,undefined ,null
// Reference Types -> Object , Function , Array 


//cloning

const another1 = Object.assign({},circle); //method 1

const another2 = {...circle};  //method 2 copy and put into another object
console.log(another1);


//Math
console.log(Math.random());