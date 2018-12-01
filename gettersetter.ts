class Plant{
    //getters and setters are applied for private variables only
    //getter and setter allows only controllable access
    private _species:string = "DEFAULT";
    set species(value:string){
        if(value.length>3){
            this._species=value;
        }else{
            this._species="DEFAULT";
            }
    }
    get species(){
        return this._species;
    }
}
let plant=new Plant();
console.log(plant.species);
let x=plant.species="Lilly";
console.log(x);

let y=plant.species="hj";
console.log(y);



