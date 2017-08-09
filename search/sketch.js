function TestList(){
    var list = [];
    for(var i=0 ; i < 10 ; i++){
        list.push(i);
    }

    for(var i=0 ; i < 10 ; i++){
    //    if(i < 5) 
    //     console.log(list.shift());
    //    else 
    //     console.log(list.pop());
    console.log(list[i]);
    }

    
}
function TestLookup(){
    var lookup = {1 : 'one' , 2:'two'};
    lookup[3] = 'three';
    lookup['a'] = "A";

    console.log(lookup[2]);
    console.log(lookup['a']);
}
function TestNode(){
    var node = new Node("A");
    console.log(node);
    console.log(node.toString());
}
function createGraph(){
    var names = ["A", "B" , "C" , "D" , "E" , "F" , "G" , "H" , "S"];
    var graph = new Graph;
    for(var i = 0 ; i < names.length ; i++){
        var node = new Node(names[i]);
        //console.log(node.toString());
        graph.addNode(node);
        }
    graph.connect("A" , "B");
    graph.connect("A" , "S");
    graph.connect("S" , "C");
    graph.connect("S" , "G");
    graph.connect("C" , "D");
    graph.connect("C" , "F");
    graph.connect("C" , "E");
    graph.connect("F" , "G");
    graph.connect("G" , "H");
    graph.connect("H" , "E");
        return graph;
   // console.log(graph);
}


function TestSearch(){

}
function setup() {
    //TestLookup();
   // TestGraph();
    var graph = createGraph();
    searchDFS(graph, "A" , "B");
   // TestNode();
}



