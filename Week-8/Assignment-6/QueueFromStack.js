const Stack = require("../Stack");

class Queue{
    constructor(arr=[]){
        this.s1 = new Stack(arr);
        this.s2 = new Stack();
    }
    enqueue = function(element){
        while(this.s2.length){
            this.s1.push(this.s2.pop());
        }
        this.s1.push(element);
    }
    dequeue = function(){
        while(this.s1.length){
            this.s2.push(this.s1.pop());
        }
       console.log("Removing From Queue",this.s2.pop());
    }
    print= function(){
        while(this.s2.length){
            this.s1.push(this.s2.pop());
        }
        this.s1.print();
    }
}

let queue = new Queue([1,2,3,4]);

queue.enqueue(5);
queue.print();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
queue.enqueue(6);
queue.enqueue(7);
queue.print();