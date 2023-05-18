var circle = document.getElementById('colors')

var square = document.getElementById('squre')

var changeshape = document.getElementById('changeshape')

var changecolor = document.getElementById('changecolor')

//create array of shapes : circle, square
//change id of shapes setAttribute 
//change shape button onclick use math.random to generate random item from array 
//create id for new shape write in css
//addEvemtListener math.random will generate random num inside array and store and send it in setAttribute

//same steps for colors


changeshape.addEventListener('click',function()

{var i=0; var n=5;

    
    arr1 = ["circle", "square", "triangle","pentagon"]
changeshape.setAttribute(changeshape); 
var newshape = Math.random(arr1[i]);
console.log(newshape); 
}
)

changecolor.addEventListener('click',function()
{arr2 = ["green", "yellow", "orange","blue"]
    
changecolor.setAttribute(changecolor); 
var newcolor = Math.random(arr2[i]);
console.log(newcolor);
}
)
