// class Hello{
//     fullName:string;
// }
// let hello = new Hello();
// hello.fullName="Yashu";
// if(hello.fullName){
//     console.log(hello.fullName);
    
// }
let password = "Hello Kittu!"
class User{
    private fullName:string;
    get Fname(){
        return this.fullName;
    }
    set Fname(newName:string){
        if(password && password == "Hello Kittu!")
        {
            this.fullName= newName;
            
        }else{
            console.log("Authorised Error!");
            
        }
    }
}
let user = new User();
user.Fname="Yashu";
console.log(user.Fname);

