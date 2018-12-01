let datas = [
    {name: 'react', age: 4, extra: { value: 1 }},
    {name: 'angular', age: 4, extra: { value: 2 }},
    {name: 'rxjs', age: 2, extra: { value: 3 }}
   ]
   
   interface IBook {
     name: string;
     age: number;
   }
   
   interface Extra {
       value: number;
   }
   
   let books: IBook[] = datas;
   console.log(books[0].name); // react
   
   class Book {
       name: string;
       age: number;
       extra: Extra;
   
       constructor(data: any) {
           for (let key in data) {
               this[key] = data[key];
           }
       }
   
       getFullName() {
           return this.name;
       }
   
       isValid() {
           return this.name.length > 0;
       }
   }
   
   let books2 = datas.map(book => new Book(book));
   console.log(books2[1].getFullName()); // angular
   console.dir(books2[0].extra.value); // 1