const LinkedList = require("../LinkedList")

LinkedList.prototype.reverse = function(){
    if(this.length <=1){
        return;
    }
    let prev = this.head;
    let current = this.head.next;
    while(current !== null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.tail = this.head;
    this.head = prev;
    this.tail.next = null;
    return true;
}

const list = new LinkedList();
list.append(5);
list.append(10);
list.append(15);
list.append(20);
list.append(25);

list.print();
list.reverse();
console.log('Reverse Link List');

list.print();