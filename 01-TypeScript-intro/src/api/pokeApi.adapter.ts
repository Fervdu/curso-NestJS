import axios from "axios";
// import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    
    async get<T>(url: string): Promise<T> {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log('con fetch');
        
        return data;
    }

}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>(url: string) {
        const { data } = await this.axios.get<T>(url);
        console.log('con axios');
        return data;
    }

    post(url: string, data: any) {

    }

    patch() {

    }

    delete() {

    }

}