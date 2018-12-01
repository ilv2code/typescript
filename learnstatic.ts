class Restaurant{
    constructor(  public name:string,public place:string,public rating:number){
        this.name=name;
        this.place=place;
        this.rating=rating;

    }
    display(){
        return `Welcome to ${this.name} in ${this.place} which is having ${this.rating} rating!`
    }
    static info():void{
     console.log("Hey Hello!");
    //  this.info();
     
    }
    
}
let restaurant = new Restaurant("GrandInn","Hitech-City",5);
console.log(restaurant.display());

//restaurant.info(); //we cannot create instance for this
//we can directly use static members of class without instantiating the class 
Restaurant.info();