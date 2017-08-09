function toString(list){
    var result = "[";
    for(var i = 0 ; i < list.length ; i++){
        result += list[i].name + ",";

    }
    result  += "]";
    return result;
}
function searchBFS(graph , start , end){
    var queue =[];
    var node = graph.nodes[start];
    queue.push(node);
     var closedList = [start];
    while(queue.length != 0){
        console.log(toString(queue));
        var current = queue.shift();
        console.log(current.name);
       
        if(current.name == end){
            break;
        }
        for(var name in current.connect){
            var chidNode = graph.nodes[name];
            if(closedList.indexOf(name) >= 0){
                continue;
            }
            closedList.push(chidNode.name);
            queue.push(chidNode);
            
        }
       
    }
}
function searchDFS(graph , start , end){
    var queue =[];
    var node = graph.nodes[start];
    queue.push(node);
     var closedList = [start];
    while(queue.length != 0){
        console.log(toString(queue));
        var current = queue.pop();
        console.log(current.name);
       
        if(current.name == end){
            break;
        }
        for(var name in current.connect){
            var chidNode = graph.nodes[name];
            if(closedList.indexOf(name) >= 0){
                continue;
            }
            closedList.push(chidNode.name);
            queue.push(chidNode);
            
        }
       
    }
}
