document.getElementById("btn").addEventListener("click", makerequest);


// POST Json data using Promise then method
// function makerequest(){
//     console.log("Button Clicked")
//     const myPost = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: '{"name":"Dummy", "job": "Web-Dev"}'
//     }
//     fetch('https://reqres.in/api/users', myPost)
//     .then((response) => {
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         return response.json()
//     }).then((data) => {
//         console.log(data)
//     }).catch((error) => console.log(error))
// }


// Async and Await for POST request
async function makerequest(){
    try {
        console.log("Button Clicked")
        const myPost = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: '{"name":"Random", "job":"Android Dev"}'
        }
        const response = await fetch('https://reqres.in/api/users', myPost)
        if(!response.ok){
            throw Error(response.statusText)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        
    }
}