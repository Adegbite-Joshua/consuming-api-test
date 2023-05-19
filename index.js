let response = {
    riddle: '',
    answer: ''
}
const fetchRiddle =()=>{
    let endpoint = 'https://riddles-api.vercel.app/random'
    fetch(endpoint)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res);
        document.getElementById('riddleDisplay').innerHTML = res.riddle
        document.getElementById('answer').innerHTML = res.answer
    })
    .catch((err)=>{
        console.log(err);
    })
}
const showAnswer=()=>{
    console.log(document.getElementById('answer'));
    document.getElementById('answer').style.display = 'block'
}

window.onload = fetchRiddle()