function Tree(){
    this.root = null;
}

Tree.prototype.addNode = function(node){
    if (this.root == null){
        this.root = node;
    }
    else{
        this.root.addChild(node);
    }
};

Tree.prototype.addValue =  function(val){
    var node = new Node(val);
    this.addNode(node);
}

Tree.prototype.traverse = function(){
    console.log("root:" + root.val);

}