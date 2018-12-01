class something{
  
    private bankId = '123' ; 
    public newBankId = 123 ; 

 public   get fullName(): any {
        return this.bankId
    }

 public   set fullName(bnk:any){
        this.bankId = bnk ;
    }


}
class anything{
    some = new something()

    fun(){
       
       
        return  this.some.fullName = '123' ;       
    }
}

let nopes = new anything()
let y = nopes.fun()
console.log(y);
