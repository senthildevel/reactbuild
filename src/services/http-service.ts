import apiClient from "./api-client";


export interface Entity{
    id: number;
    name: string;
  }

// create a class

class HTTPService{   

    _endpoint:string;

    constructor(endpoint:string){

        this._endpoint = endpoint;
    }


    getAll<T>(){
        const controller = new AbortController();        
       const request =  apiClient
        .get<T[]>(this._endpoint, {
          signal: controller.signal,
        })

       return{request, cancel: () =>  controller.abort()};

        
    }

    delete(id:number){

        return apiClient.delete(this._endpoint+"/" + id)
    }

    add<T>(entity:T){

        return apiClient.post(this._endpoint, entity)
    }

    update<T extends Entity>(entity:T){
        return apiClient
        .put(this._endpoint+"/" + entity.id, entity)
    }

}

//export default new HTTPService("/users")


const create = (endpoint:string) => new HTTPService(endpoint)
export default create;


