/* Constructor Func.: jab aapke pas esa koi bhi mauka ho ke aapko ek jaisi properties wale bhut sare elements banane hai us waqt aap constructor func use kar skte ho 

*/

function circularButtons(color){
    this.radius =2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}

var redbtn = new circularButtons("red");
var greenbtn = new circularButtons("green");

/* Note: where we want same kind of properties for all the elements than we need constructor function */

function saanchOfBiscuit(){
    this.width = 12;
    this.height =22;
    this.color ="brown";
    this.taste = "sugary";

}

var bisc1 = new saanchOfBiscuit();
var bisc2 = new saanchOfBiscuit();