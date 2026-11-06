import axios from "axios"
import { type FormData } from "../types";


export default class RickMortyAPICalls {
    private API_URL: string = 'https://rickandmortyapi.com/api';
    
    buildAxiosParams = (input: FormData | undefined) => {
        if (input){
            const params = new URLSearchParams();
            if (input.name) {
                params.append('name', input.name);
            }
            if (input.species) {
                params.append('species', input.species);
            }
            if (input.type) {
                params.append('type', input.type);
            }
            if (input.status) {
                params.append('status', input.status);
            }
            if (input.episode) {
                params.append('episode', input.episode);
            }
            return params;
        }
    };

    // getData = async(input) => {
    //     try{
    //         const response = await axios.get(`${this.API_URL}/${category}`)
    //         return response.data;
    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    getLocations = async (params?: FormData | undefined) => {
        console.log(params)
        try{
            const response = await axios.get(`${this.API_URL}/location`, {
                params: this.buildAxiosParams(params)
            })
            console.log(response.data)
            return response.data;
        } catch(error){
            console.log(error)
        }
    }

    getCharacters = async (params?: FormData | undefined) => {
        console.log(params)
        this.buildAxiosParams(params)
        try{
            const response = await axios.get(`${this.API_URL}/character`, {
                params: this.buildAxiosParams(params)
            })
            return response.data;
        } catch(error){
            console.log(error)
        }
    }

    getEpisodes = async (params?: FormData | undefined) => {
        console.log(params)
        try{
            const response = await axios.get(`${this.API_URL}/episode`, {
                params: this.buildAxiosParams(params)
            })
            console.log(response.data)
            return response.data;
        } catch(error){
            console.log(error)
        }
    }
}