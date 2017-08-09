var dogA;
var dogB;

function setup() {
   var size = 10;
   var color = 'red';
   dogA = new Dog("Dog A", size , color );
   dogA.bark();
   dogA.showState();

   dogB = new Dog("Dog B " , 2*size , "green");
   dogB.bark();
   dogB.showState();
    createCanvas(500, 500);
}
function draw(){
    

    background(50, 50, 255);
    dogB.draw(100 , 100);
    dogA.draw(300,300);



}