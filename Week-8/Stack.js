
class Stack{
    constructor(arr=[]){
        this.stack = [...arr];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        return this.stack.pop();
    }
    length(){
        return this.stack.length;
    }
    peek(){
        console.log('Top Element :>> ', this.stack.at(-1));
        return this.stack.at(-1);
    }
    print(){
        console.log('Stack() :>> ', this.stack);
    }
}


module.exports = Stack;