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
        response.riddle = res.riddle
        response.answer = res.answer
    })
    .catch((err)=>{
        console.log(err);
    })

    document.getElementById('riddleDisplay').innerHTML = response.riddle
    document.getElementById('answer').innerHTML = response.answer
}
const showAnswer=()=>{
    document.getElementById('answer').style.display = 'block'
}
window.showAnswer = showAnswer

window.onload = fetchRiddle()