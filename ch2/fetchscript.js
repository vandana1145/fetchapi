document.getElementById("btn-submit").addEventListener("click", makerequest);


// // Error handling
// function makerequest(){
//     console.log("Button clicked")
//     fetch("data.json").then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         console.log("Res", response);
//         const dt = response.json()
//         console.log("DT", dt)
//         return dt
//     }).then((data)=>{
//         console.log("Data", data)
//         console.log(data.name)
//         console.log(data.rank)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


// Display json data in web page
// function makerequest(){
//     console.log("Button clicked")
//     fetch("data.json").then((response)=>{
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         console.log(response);
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//         document.getElementById("divdata1").innerText = data.name
//         document.getElementById("divdata2").innerText = data.rank
//     }).catch((error)=>{
//         console.log(error)
//     })
// }


// Async await: Error handling
// async function makerequest(){
//     try {
//         console.log("Button Clicked")
//         const res = await fetch("data.json")
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


// Async await: Showing data in browser
async function makerequest(){
    try {
        console.log("Button Clicked")
        const res = await fetch("data.json")
        if(!res.ok){
            throw Error(res.statusText)
        }
        console.log(res)
        const data = await res.json()
        console.log(data)
        document.getElementById("divdata1").innerText = data.name
        document.getElementById("divdata2").innerText = data.rank
    } catch (error) {
        console.log(error)
    }
}