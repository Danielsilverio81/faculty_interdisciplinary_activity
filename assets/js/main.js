const pressClear = document.querySelector('.clear')
function clear (pressC) {
    pressC.onclick = function (e) {
        e.preventDefault();
        Array.from(document.querySelectorAll('.input').forEach(
            input => (input.value = '')
        ))
    
    }
} 

clear(pressClear);