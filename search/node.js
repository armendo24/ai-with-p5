function Node(name){
    this.name = name;
    this.connect = {};
}

Node.prototype.toString = function(){
    return "Node [Name: " + this.name+", Connect[]]";
}