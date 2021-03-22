document.getElementById("btn-submit").addEventListener("click", makerequest);

// function makerequest() {
//     console.log("Button 1 clicked")
//     const promiseObj = fetch("data.txt")
//     console.log(promiseObj)
//     promiseObj.then((resolve)=>{
//         console.log(resolve);
//         return resolve.text()
//     }).then((data)=>{
//         console.log(data)
//     })
// }

// Another way of writing the promise syntax: Chaining
// function nextrequest(){
//     console.log("Button 2 clicked")
//     fetch("data.txt").then((response)=>{
//         console.log(response);
//         return response.text()
//     }).then((data)=>{
//         console.log(data)
//     })
// }

// // Error handling
// function nextrequest(){
//     console.log("Button 2 clicked")
//     fetch("data.txt").then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         console.log(response);
//         return response.text()
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


// Display data in web page
// function nextrequest(){
//     console.log("Button 2 clicked")
//     fetch("data.txt").then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         console.log(response);
//         return response.text()
//     }).then((data)=>{
//         console.log(data)
//         document.getElementById("divdata").innerText = data
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


// Async await
// async function makerequest(){
//     console.log("Button Clicked")
//     const res = await fetch("data.txt")
//     console.log(res)
//     const data = await res.text()
//     console.log(data)
//     document.getElementById("divdata").innerText = data
// }

// Async await: Error handling
// async function makerequest(){
//     try {
//         console.log("Button Clicked")
//         const res = await fetch("data1.txt")
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         const data = await res.text()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


// Async await: >Showing data in browser
async function makerequest(){
    try {
        console.log("Button Clicked")
        const res = await fetch("data1.txt")
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res)
        const data = await res.text()
        console.log(data)
        document.getElementById("divdata").innerText = data
    } catch (error) {
        console.log(error)
    }
}