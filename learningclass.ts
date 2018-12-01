class Wishes{
    greeting:string;
    constructor(message:string){
        this.greeting=message;
    }
    greet(){
        return this.greeting;
        console.log(this.greet);
        
    }
}
let wishes = new Wishes("Good Morning!");
console.log(wishes);
let wishes1=new Wishes("Hey Buddy!");
console.log(wishes1);




