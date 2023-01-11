const LinkedList = require("../LinkedList")

LinkedList.prototype.rotate = function(k){
    if(k===0){
        return;
    }if(k>this.length){
        k = k%this.length;
    }
    let current = this.head;
    while(k>1){
        current = current.next;
        k--;
    }
    this.tail.next = this.head;
    this.head = current.next;
    this.tail = current;
    this.tail.next = null;
    // let prev = this.head;
    // let current = this.head.next;
    // while(current !== null){
    //     let next = current.next;
    //     current.next = prev;
    //     prev = current;
    //     current = next;
    // }
    // this.tail = this.head;
    // this.head = prev;
    // this.tail.next = null;
    // return true;
}

const list = new LinkedList();
list.append(2);
list.append(4);
list.append(7);
list.append(8);
list.append(9);

list.print();
list.rotate(3);
console.log('Rotated Link List');
list.print();


const list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
list2.append(5);
list2.append(6);
list2.append(7);
list2.append(8);
list2.rotate(4);

console.log('Rotated Link List');

list2.print();

