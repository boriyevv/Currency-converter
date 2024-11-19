let form = document.querySelector('.form')
let inp = document.querySelector('.form-control')
let select = document.querySelector('.form-select')
let result = document.querySelector('.result')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(parseInt(inp.value), select.value)
    if(select.value=='euro'){
        result.textContent=parseInt(inp.value)/13100
    }
    if(select.value=='rubl'){
        result.textContent=parseInt(inp.value)/135
    }
    if(select.value=='usd'){
        result.textContent=parseInt(inp.value)/12845
    }
    

})
