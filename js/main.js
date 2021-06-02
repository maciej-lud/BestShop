document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu__list-toggle').addEventListener('click', function () {
        document.querySelector('.menu__list').classList.toggle('show');
        document.querySelector('.menu__list-toggle').classList.toggle('show');
        document.querySelector('.menu__list-x').classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.menu__list-x').addEventListener('click', function () {
        document.querySelector('.menu__list').classList.toggle('show');
        document.querySelector('.menu__list-x').classList.toggle('show');
        document.querySelector('.menu__list-toggle').classList.toggle('show');
    });
});

const products = document.getElementById("products");
const orders = document.getElementById("orders");
const packageList = document.getElementById("package");
const packageChosen = document.querySelectorAll(".select__dropdown li");
const checkbox1 = document.getElementById("accounting");
const checkbox2 = document.getElementById("terminal");
const summaryList = document.querySelectorAll(".list__item");
const totalPrice = document.getElementById("total-price");
const form = document.querySelector("form");


const prices = {
    products: 1,
    orders: 0.5,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 15,
    terminal: 20,
};

function productsNumber() {
    if (products.value > 0) {
        summaryList[0].classList.add("open");
    } else {
        summaryList[0].classList.remove("open");
    }
    summaryList[0].firstElementChild.nextElementSibling.innerText = products.value + " * $" + prices.products;
    summaryList[0].lastElementChild.firstElementChild.innerText = products.value * prices.products;
}

function ordersNumber() {
    if (orders.value > 0) {
        summaryList[1].classList.add("open");
    } else {
        summaryList[1].classList.remove("open");
    }
    summaryList[1].firstElementChild.nextElementSibling.innerText = orders.value + " * $" + prices.orders;
    summaryList[1].lastElementChild.firstElementChild.innerText = orders.value * prices.orders;
}

function packageListClick() {
    packageList.classList.toggle("open");
}

function packageListText() {
    packageList.firstElementChild.innerText = this.textContent;
    summaryList[2].classList.add("open");
    summaryList[2].firstElementChild.nextElementSibling.innerText = this.textContent;
    if (this.textContent === "Basic") {
        summaryList[2].lastElementChild.firstElementChild.innerText = prices.package.basic;
    } else if (this.textContent === "Professional") {
        summaryList[2].lastElementChild.firstElementChild.innerText = prices.package.professional;
    } else {
        summaryList[2].lastElementChild.firstElementChild.innerText = prices.package.premium;
    }
}

function accountingClick() {
    summaryList[3].classList.toggle("open");
    if (checkbox1.checked) {
        summaryList[3].lastElementChild.firstElementChild.innerText = prices.accounting;
    } else {
        summaryList[3].lastElementChild.firstElementChild.innerText = 0;
    }
}

function terminalClick() {
    summaryList[4].classList.toggle("open");
    if (checkbox2.checked) {
        summaryList[4].lastElementChild.firstElementChild.innerText = prices.terminal;
    } else {
        summaryList[4].lastElementChild.firstElementChild.innerText = 0;
    }
}

function priceSum() {
    if (summaryList.length > 0) {
        totalPrice.classList.add("open");
    } else {
        totalPrice.classList.remove("open");
    }
    totalPrice.lastElementChild.innerText = "$" + (products.value * prices.products + orders.value * prices.orders + parseFloat(summaryList[2].lastElementChild.firstElementChild.textContent) + parseFloat(summaryList[3].lastElementChild.firstElementChild.textContent) + parseFloat(summaryList[4].lastElementChild.firstElementChild.textContent));
}

products.addEventListener("click", productsNumber);
orders.addEventListener("click", ordersNumber);
packageList.addEventListener("click", packageListClick);
packageChosen[0].addEventListener("click", packageListText);
packageChosen[1].addEventListener("click", packageListText);
packageChosen[2].addEventListener("click", packageListText);
checkbox1.addEventListener("click", accountingClick);
checkbox2.addEventListener("click", terminalClick);
form.addEventListener("click", priceSum);