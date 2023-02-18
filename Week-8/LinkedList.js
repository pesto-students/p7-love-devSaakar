class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value){
        const newNode = new Node(value);
        let temp = this.head;
        if(!temp){
            this.head = newNode;
        }else{
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.tail = newNode;
        this.length++;
    }
    print(){
        let temp = this.head;
        while(temp!== null){
            console.log('temp.value :>> ', temp.value);
            temp = temp.next;
        }
    }
}

module.exports = LinkedList;