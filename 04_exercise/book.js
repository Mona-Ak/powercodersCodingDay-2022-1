const books = [];
let submit = document.querySelector('.submit');

class Book {
    constructor(title,author,sold,price){
        this.title = title;
        this.author = author;
        this.sold = sold;
        this.price = price;
    }

}

let ikigai = new Book('Ikigay','Hector Gracia &Francesc Miralles',true,18.30);
let allTheNight = new Book('All the night we can not see','Antony Doerr',false,12.38);
let atomicHabit = new Book('Atomic Habits','James Clear',false,14.36);

books.push(ikigai,allTheNight,atomicHabit);
// console.log(books);

books.forEach(item =>{
    let body = document.querySelector('body');
    let article =document.createElement('article');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h1.textContent = item.title;
    h2.textContent = item.author;
    h3.textContent = `Price:${item.price}`;
    if(item.sold === true){
        p.textContent = `the book ${item.title} has been sold`;
    }else{
        p.textContent = `the book ${item.title} is still available`;
    }
    article.appendChild(h1);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p);
    // console.log(article.textContent)
    body.appendChild(article);

});


let addingBook = ()=>{
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let price = document.querySelector('#price');
    let submit = document.querySelector('.submit');
     let titleVal = title.addEventListener('change',(item)=>{
         let myValue = item.target.value;
         console.log(myValue)
        return myValue;
    });
    let authorVal = author.addEventListener('change',(item)=>{
        let myValue = item.target.value;
        return myValue;
    })
    let priceVal = price.addEventListener('change',(item)=>{
        let myValue = item.target.value;
        console.log(myValue)
        return myValue;
    });

    submit.addEventListener('click',()=>{
        
        books.push(new Book(titleVal,authorVal,false,priceVal));
    })

}

addingBook();
console.log(books)




