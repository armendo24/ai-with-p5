function Graph(name){
    this.nodes = {};
}
Graph.prototype.addNode = function(node){
    this.nodes[node.name] = node;
}
Graph.prototype.connect = function(name1 , name2){
    var node1 = this.nodes[name1];
    var node2 = this.nodes[name2];
    node1.connect[name2] = node2;
    node2.connect[name1] = node1;

    

}