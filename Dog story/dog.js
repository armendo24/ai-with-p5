function Dog(name , size , color){
    this.name = name;
    this.size = size;
    this.color = color;
}

Dog.prototype.bark = function(){
    console.log(this.name + "bark");
}


Dog.prototype.showState = function(){
  console.log(this.size);
}

Dog.prototype.draw() = function(){
    fill(this.color);
    ellipse(x , y , this.size , this.size);
    fill(0);
    textAlign(CENTER);
    text(this.name, x , ,y );
}