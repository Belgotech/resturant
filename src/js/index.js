import axios, { Axios } from 'axios'

async function getResult (querry) {
    const key = '4d08ce58e497460ba4bc0aabe5b17da4'
    try {
    const res = await axios(`https://api.spoonacular.com/recipes/complexSearch?key=${key} ${querry}`)
    } catch (error){
        alert(error)
    }
}

getResult('pizza')



//GET https://api.spoonacular.com/recipes/complexSearch
// 4d08ce58e497460ba4bc0aabe5b17da4