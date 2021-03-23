document.getElementById("btn").addEventListener("click", makerequest);


// POST Json data using Promise then method
function makerequest(){
    console.log("Button Clicked")
    const mypost = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: '{"name":"Dummy", "job": "Web-Dev"}'
    }
    fetch('https://reqres.in/api/users', mypost)
    .then((response) => {
        if(!response.ok){
            throw Error(response.statusText)
        }
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => console.log(error))
}