//interface is contract(outer blue print) signed by an object which can be used as a type
//interfaces are a way to gaurantee our code that certain properties or methods are avaliable
//Main use of interface is custome type...
//it is a special class which contains abstract methods and abstract(no-body,no implementation) properties
//we cannot create object for interface
//but we can create reference for interface!

//why??--Custom typing ... reusability..

interface Book{
    //data members
    name:string,
    //optional property "?"
    price?:number,
    //flexiable key name
    [anyBook:string]:any;
    //methods
    orderBook():any;
    display(name:string):void;
}
interface Exhibition{
    ename:string;
    edate:string;
    displayExh():any;
}
class OrderBook implements Book{
    book:Book;
    name:string;
    price:number;
    //flexiable key values...
    bookslib=["Mother Teresa","Power of Habbit","The Magic","The Secret"];
    
    

    orderBook(){
        return `Order: ${this.name} with ${this.price} price!`
    }
    display(){
        console.log(`Book Details : ${this.name} with price ${this.price} collection ${this.bookslib}`);
        
    }
    
}
class BooksExhibition extends OrderBook implements Exhibition{
    ebooks:Exhibition;
    ename:string;
    edate:string;
    displayExh(){
        console.log(`Exhibition: ${this.ename} on ${this.edate} with good collection of ${this.bookslib}`);
     }

}

let bookexhibition = new BooksExhibition();
let y = bookexhibition.bookslib;
console.log(y);
bookexhibition.ename="Bibilo Exhibition!"
bookexhibition.edate="12th July 2019"
bookexhibition.displayExh();


let order = new OrderBook();
order.name="Wings of fire",
order.price=300,
console.log(order.orderBook());
order.display();
