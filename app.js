// document.getElementById('count-num').innerText = 5;

let firstCount = document.getElementById('count-num')

let count = 0

function increase() {
    count += 1;
    // count = count + 1;
    firstCount.innerText = count
}
increase()

// save button & fxn

let saveEl = document.getElementById('save-el')

function save() {
    let myCount = count + " - "
    saveEl.textContent += myCount
   firstCount.innerText = 0
   count = 0
}

save()