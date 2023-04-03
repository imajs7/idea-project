import axios from "axios";
import INews from "../models/news";

const getRandomNumber = (min : number, max : number) => {
    // generating a random number to create random category
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateSubCategory = () => {
    const randomNumber = getRandomNumber(111,999);

    if(randomNumber >= 111 && randomNumber < 333){
        return 'national';
    } else if(randomNumber >= 333 && randomNumber < 355) {
        return 'diplomacy';
    } else if(randomNumber >= 355 && randomNumber < 377) {
        return 'sports';
    } else {
        return 'entertainment'
    }
}

const removeDuplicates = (arr : string[]) => {
    return arr.filter( (item, index) => arr.indexOf(item) === index );
}

export async function getData() {

    const url = 'https://jsonplaceholder.typicode.com/posts';
    const {data} = await axios.get( url );

    data.forEach((item : INews) => {
        item.category = `cat${getRandomNumber(1, 5)}`;
        item.subcategory = generateSubCategory();
    }); 

    return data;
}

export async function getAllCategories() {

    const news = await getData();

    const tempData = news.map((item : INews) => item.category );

    return removeDuplicates(tempData);

}

export async function buildTree() {
    const news = await getData();
    const tempData = news.map((item : INews) => item.category );

    const categories = removeDuplicates(tempData);

    const myTree : any = {};

    categories.forEach( (cat) => {
        const newsItemsInCat = news.filter( (item : INews) => item.category === cat );
        const data : any = [];
        newsItemsInCat.forEach( (itemInCat : INews) => {            
            data.push(itemInCat.subcategory);
        })

        myTree[cat] = removeDuplicates( data );
    } )

    return myTree;
}