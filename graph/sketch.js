function Test1(){
    var n1 = new Node(15);
    var n2 = new Node(5);
    n1.left = n2;
    console.log(n1);
}

function Test2(){
    var tree = new Tree();
    var node = new Node(15);
    var node1 = new Node(5);
    var node2 = new Node(20);
    tree.addNode(node);
    tree.addNode(node1);
    tree.addNode(node2);
    console.log(tree);
}

function Test3(){
    var tree = new Tree();
    tree.addValue(15);
    tree.addValue(5);
    tree.addValue(20);
    tree.addValue(11);
    tree.addValue(12 );
    tree.addValue(30 );
    tree.addValue(20 );
    console.log(tree);
    tree.traverse();
}

function setup() {
    createCanvas(1000, 1000)
    background(50, 50, 255)

    Test2();
    //Test3();
}



