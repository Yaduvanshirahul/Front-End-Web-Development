const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color +=hex[Math.floor(Math.random() *16)]
    }
    return color;
};

console.log(randomColor());

// here we create function for changecolor or stopcolor

let intervalID; // make it global access
const startChangeColor = function(){
    if(!intervalID){
        intervalID=setInterval(changeColor, 1000);

    }

    
    function changeColor(){
        document.body.style.backgroundColor = randomColor(); // here color overrdie which take memory which not good in case of stop so we used intervalID = null
    }
};
const stopChangeColor = function(){
    clearInterval(intervalID); // Here color changing stop 
    intervalID = null; // we optimize this using If(!intervalID) so only if intervalID null then it execute
};

document.querySelector("#start").addEventListener('click', startChangeColor);
document.querySelector("#stop").addEventListener('click', stopChangeColor);