let response = ''
const fetchRiddle =()=>{
let endpoint = 'https://riddles-api.vercel.app/random'
    fetch(endpoint)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        // response = res.data.ri/ddle
    })
    .catch((err)=>{
        console.log(err);
    })
}

window.onload = fetchRiddle()