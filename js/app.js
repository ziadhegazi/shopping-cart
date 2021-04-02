// ----------Global Variables----------
const hearts = document.querySelectorAll(".fa-heart");
const dels = document.querySelectorAll(".del");
const plus_btns = document.querySelectorAll(".plus");
const minus_btns = document.querySelectorAll(".minus");
const total = document.querySelector("#total");

// ----------Fav button----------
hearts.forEach(heart => {
    heart.addEventListener("click", fav = () => {
        if (heart.style.color == "red") {
            heart.style.color = "black";
        }else {
            heart.style.color = "red";
        }
    })
})

// ----------Delete button----------
dels.forEach(del => {
    del.addEventListener("click", delete_item = (e) => {
        e.currentTarget.parentNode.parentNode.parentNode.remove()
        update_total();
    })
})

// ----------Add quantity----------
plus_btns.forEach(btn => {
    let price = btn.parentElement.previousElementSibling.firstElementChild;
    let newPrice = parseInt(price.innerHTML);
    let amount = btn.previousElementSibling;
    btn.addEventListener("click", add = () => {
        amount.value = parseInt(amount.value)+1;
        price.innerText = newPrice * amount.value;
        update_total();
        // console.log(newPrice);
        // console.log(newPrice * amount.value);
    })
})
// ----------subtract quantity----------
minus_btns.forEach(btn => {
    let amount = btn.nextElementSibling;
    let price = btn.parentElement.previousElementSibling.firstElementChild;
    let newPrice = price.innerHTML;
    btn.addEventListener("click", add = () => {
        if (amount.value == 1) {
            amount.parentNode.parentNode.parentNode.parentNode.remove()
            update_total();
        }else {
            amount.value = parseInt(amount.value)-1;
            price.innerText = newPrice * amount.value;
            update_total();
        }
    })
})

// ----------Updating total----------
function update_total() {
    const prices = document.querySelectorAll(".price");
    let sum = 0;
    prices.forEach(price => {
        sum += parseInt(price.innerHTML);
        // console.log(price.innerHTML);
    })
    total.innerText = sum;
    // console.log(total);
}