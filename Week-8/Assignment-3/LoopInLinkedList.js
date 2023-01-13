const LinkedList = require("../LinkedList")

LinkedList.prototype.detectLoop = function(){
    let step = this.head;
    let twoStep = this.head.next;
    while(true){
        if(!(step.next && twoStep && twoStep.next)){
            return false;
        }if(twoStep === step || twoStep.next === step){
            return true;
        }
        step = step.next;
        twoStep = twoStep.next.next;
    }
}

const list = new LinkedList();
list.append(1);
list.append(3);
list.append(4);

let x = 2;

let temp = list.head;
let count = 1;

if(x>list.length){
    console.log('Length Exceeded');
    return;
}

while(count<x){
    temp = temp.next;
    count++;
}
if(x){
    list.tail.next = temp;
}

console.log('Loop Exist :>> ', list.detectLoop());
