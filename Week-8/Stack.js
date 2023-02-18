
class Stack{
    constructor(arr=[]){
        this.stack = [...arr];
        this.length = arr.length;
    }
    push(value){
        this.length++;
        this.stack.push(value);
    }
    pop(){
        if(this.length){
            this.length--;
            return this.stack.pop();
        }
        return "No Element to Remove"
    }
    length(){
        return this.length;
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