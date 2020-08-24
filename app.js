const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const meme = {
    image: document.getElementById('meme-image'),
    title: document.getElementById('meme-title'),
    author: document.getElementById('meme-author')
}

const categories = {
    dogs: {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },

    cats:{
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')
    },

    mices:{
        button: document.getElementById('mices-link'),
        content: document.getElementById('mices')
    }
}


let dogList = [
    {
        name: "chihuahua",
        region: "mexico",
        description: "A tiny noise dog"
    },
    {
        name: "beagle",
        region: "england",
        description: "A medium hunting dog"
    },
    {
        name: "german shepherd",
        region: "germany",
        description: "Big dog for farm work"
    },
    {
        name: "huskey",
        region: "siberia",
        description: "Big dog for recue work in gelid wather"
    }
];

let catList = [
    {
        name: "Leopard cat",
        region: "East Asia",
        description: "A small wild cat"
    },
    {
        name: "Persia",
        region: "Iran (Persia)",
        description: "A long-haired breed of cat characterized by its round face and short muzzle."
    },
    {
        name: "Siames",
        region: "Thailand",
        description: "A white and cute cat"
    },
    {
        name: "Siberian",
        region: "Russia",
        description: "A long-haired black and white cat"
    }
];

let miceList = [
    {
        name: "Rex",
        region: "Guyana",
        description: "A tiny rat"
    },
    {
        name: "Fancy rat",
        region: "All globe",
        description: " The most common species of rat kept as a pet"
    },
    {
        name: "Chinchilla",
        region: "South America",
        description: "A large-tailed giant and cute rodent"
    }
];

categories.dogs.button.onclick = ()=> {
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        
        return;
    }
    dogList.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>description: ${dog.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}
categories.cats.button.onclick = ()=> {
    if(categories.cats.content.innerHTML){
        categories.cats.content.innerHTML = '';
        
        return;
    }
    catList.forEach(cat =>{
        categories.cats.content.innerHTML += `<li>
            <span>${cat.name}</span>
            <div>region: ${cat.region}</div>
            <div>description: ${cat.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}
categories.mices.button.onclick = ()=> {
    if(categories.mices.content.innerHTML){
        categories.mices.content.innerHTML = '';
        
        return;
    }
    miceList.forEach(mice =>{
        categories.mices.content.innerHTML += `<li>
            <span>${mice.name}</span>
            <div>region: ${mice.region}</div>
            <div>description: ${mice.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}

const GetMemes = async ()=>{
    const data = await fetch('https://meme-api.herokuapp.com/gimme');
    const jsonData = await data.json();

    const {url, author, nsfw, postLink, spoiler, subreddit, title} = jsonData;//desestructuración
    meme.title.innerHTML = `title: ${title}`;
    meme.author.innerHTML = `author: ${author}`;
    meme.image.src = url;
}

GetMemes();