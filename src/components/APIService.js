export default class APIService{
    // Insert Search Term
    static InsertSearchTerm(input){
        return fetch('/query_db',{
            'method':'POST',
            headers:{
                'Content-Type':'application/json'    
            },
            body:JSON.stringify(input)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }
}
