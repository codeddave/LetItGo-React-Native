import {create} from "apisauce"

const apiClient = create({
    baseURL: "https://fakestoreapi.com"
}) 


apiClient.get("/").then(response => {
    if(!response.ok ){ 
        response.problem
    }
})