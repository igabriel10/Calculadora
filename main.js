

function inp() {
    document.addEventListener("click", (e) => {
        let event = e.target;
        let display = document.querySelector('.display');

        if(event.classList.contains("btn-num")){
            display.value += event.innerText
        }
    })
}

inp()

function clean(){
    document.querySelector(".display").value = '';
}

function del(){
    let display = document.querySelector(".display").value;
    document.querySelector(".display").value = display.slice(0, -1)
}

function result(){
    let display = document.querySelector(".display");
    let conta = eval(display.value);

    display.value = conta
}