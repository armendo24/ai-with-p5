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
    //console.log("root:" + this.root.val);
    this.root.display();
}

Tree.prototype.BFS = function(){
    var queue = [];
    queue.push(this.root);
    //console.log(node.val);

    while(queue.length !=0){
        var node = queue.shift();
        console.log(node.val);
    

    if(node.left){
        queue.push(node.left);
    }
    if(node.right){
        queue.push(node.right);
    }
    }
}