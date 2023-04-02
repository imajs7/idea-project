import axios from "axios";
import INews from "../models/news";

const getRandomNumber = (min : number, max : number) => {
    // generating a random number to create random category
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

export async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const {data} = await axios.get( url );

    data.forEach((item : INews) => {
        item.category = `cat${getRandomNumber(1, 9)}`;
    });    

    return data;
}