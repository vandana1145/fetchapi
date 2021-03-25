document.getElementById("btn").addEventListener("click", makerequest);

// Post form data to API using Promise then
function makerequest(event){
    // Preventing the page from auto refresh
    event.preventDefault()

    // Getting the value of the posted data like name and job using their respective id's using .value method
    let name = document.getElementById("name").value
    let job = document.getElementById("job").value

    // "Button Clicked" in console to know the correctness of the code
    console.log("Button Clicked")

    // creating an instance and then calling it to the fetch method. These instancce objects can also be called directly inside fetch method.
    const myPost = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // JSON.stringify() method converts a JavaScript object or value to a JSON string 
        body: JSON.stringify({name:name, job:job})
    }
    console.log("Body:", myPost.body)
    fetch('https://reqres.in/api/users', myPost)
    .then((response) => {
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
} 

/* Post form data to API using async and await.
The word 'async' before a function means that the function always returns a promise. 
The keyword 'await' makes teh JavaScript wait until that promise settles and returns its result.*/
async function makerequest(event){
    event.preventDefault()
    try {
        console.log("Button Clicked")
        let name = document.getElementById("name").value
        let job = document.getElementById("job").value
        const myPost = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:name, job:job})
        }
        const response = await fetch('https://reqres.in/api/users', myPost)
        if(!response.ok){
            throw Error(response.statusText)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}