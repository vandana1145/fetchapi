document.getElementById("btn").addEventListener("click", makerequest);

//Promise-then | Single data
// function makerequest() {
//     console.log("Button clicked")
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         return response.json()
//     }).then((data)=>{
//         console.log("Data", data)
//         console.log("Id:", data.id)
//         console.log("Title:", data.title)
//         console.log("Body:",data.body)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


//Promise-then | Single data | Rendering data in webpage or browser
// function makerequest() {
//     console.log("Button clicked")
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         return response.json()
//     }).then((data)=>{
//         console.log("Data", data)
//         document.getElementById("pid").innerText = data.id
//         document.getElementById("title").innerText = data.title
//         document.getElementById("body").innerText = data.body
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


//Promise-then | Multiple data
// function makerequest() {
//     console.log("Button clicked")
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         return response.json()
//     }).then((data)=>{
//         console.log("Data", data)
//         data.forEach(element => {
//             console.log("Id:", element.id)
//             console.log("Title:", element.title)
//             console.log("Body:", element.body)
//         });
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


//Promise-then | Multiple data | Display data in browser or webpage
// function makerequest() {
//     console.log("Button clicked")
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         return response.json()
//     }).then((data)=>{
//         console.log("Data", data)
//         let output = document.getElementById("alldata")
//         data.forEach(element => {
//             output.innerHTML += `
//             <div>ID: ${element.id}</div>
//             <div>TITLE: ${element.title}</div>
//             <div>Body: ${element.body}</div>    
//         `
//         });
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


// Async and Await | Single data fetch
// async function makerequest(){
//     try {
//         console.log("Button Clicked")
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         const data = await response.json()
//         console.log("Data", data)
//         console.log("Id:", data.id)
//         console.log("Title:", data.title)
//         console.log("Body:", data.body)
//     } catch (error) {
//         console.log(error)
//     }
// }


// Async and Await | Single data fetch | Rendering data in webpage or browser
// async function makerequest(){
//     try {
//         console.log("Button Clicked")
//         const response = await fetch("http://127.0.0.1:8000/api/category/1/")
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         const data = await response.json()
//         document.getElementById("id").innerText = data.id
//         document.getElementById("category").innerText = data.category
//     } catch (error) {
//         console.log(error)
//     }
// }
// async function makerequest(){
//     try {
//         console.log("Button Clicked")
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         const data = await response.json()
//         document.getElementById("pid").innerText = data.id
//         document.getElementById("title").innerText = data.title
//         document.getElementById("body").innerText = data.body
//     } catch (error) {
//         console.log(error)
//     }
// }
 

// Async and Await | Multiple data fetch 
// async function makerequest(){
//     try {
//         console.log("Button Clicked")
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         const data = await response.json()
//         console.log("Data", data)
//         data.forEach(element => {
//             console.log("ID:", element.id)
//             console.log("Title:", element.title)
//             console.log("Body:", element.body)
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }


// Async and Await | Multiple data fetch | Rendering data in webpage or browser
async function makerequest(){
    try {
        console.log("Button Clicked")
        const response = await fetch("http://127.0.0.1:8000/api/categories")
        if(!response.ok){
            throw Error(response.statusText)
        }
        let data = await response.json()
        console.log("Data", data)
        const output = document.getElementById("alldata")
        results = data['results'];
        results.forEach(element => {
            output.innerHTML = ''
            output.innerHTML += `
            <div>ID: ${element.id}</div>
            <div>Category: ${element.category}</div>
            `
        });
    } catch (error) {
        console.log(error)
    }
}