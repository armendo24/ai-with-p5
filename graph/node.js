function Node(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

Node.prototype.addChild = function(node){
    if (this.val > node.val){
        if (this.left == null)
            this.left = node;
        else
            this.left.addChild(node);
    }
    else{
        if (this.right == null)
            this.right = node;
        else
            this.right.addChild(node);
     
    }
}
Node.prototype.display = function(){
    console.log(this.val);
    if(this.left){
        this.left.display();
    }
    if(this.right){
        this.right.display();
    }
}