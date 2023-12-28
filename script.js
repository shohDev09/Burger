const headerTimerExtra = document.querySelector('.header__timer-extra');

function animationNum(start, end) {
  let current = start;
  const oshirish = start < end ? 1 : -1;
  
  const timer = setInterval(() => {
    current += oshirish;
    headerTimerExtra.textContent = current;

    if (current === end) {
      clearInterval(timer);
    }
  }, 30);
}

animationNum(0, 100); 

setTimeout(() => {
    animationNum(1, 70)
}, 4000);

setTimeout(() => {
  animationNum(70, 90);
}, 8000);

setTimeout(() => {
  animationNum(90, 100); 
}, 12000);

const food = {
    plainBurger: {
        name: "Gamburger",
        price: 15000,
        amount: 0,
        kcall: 500,

        get clacSum() {
            return this.amount * this.price;
        },

        get kcallSum() {
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: "Gamburger Fresh",
        price: 22000,
        amount: 0,
        kcall: 700,

        get clacSum() {
            return this.amount * this.price;
        },

        get kcallSum() {
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: "Fresh Combo",
        price: 28000,
        amount: 0,
        kcall: 900,

        get clacSum() {
            return this.amount * this.price;
        },

        get kcallSum() {
            return this.kcall * this.amount;
        }
    }
}

const btn = [...document.querySelectorAll('.main__product-btn')];

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        prepare(this);
    })
}

function prepare(item) {
    const parent = item.closest('.main__product');
    const parentId = parent.getAttribute('id')
    const price = parent.querySelector('.main__product-price span');
    const num = parent.querySelector('.main__product-num');
    const kcall = parent.querySelector('.main__product-kcall span');
    const sym = item.getAttribute('data-symbol')
    // console.log(sym);

    let count = food[parentId].amount
    // console.log(count);

    if (sym == '+') {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].clacSum
    kcall.innerHTML = food[parentId].kcallSum


}

// reciept 

const reciept = document.querySelector('.receipt');
const recieptWindow = document.querySelector('.receipt__window');
const recieptWindowOut = document.querySelector('.receipt__window-out');
const recieptWindowBtn = document.querySelector('.receipt__window-btn');
const addCart = document.querySelector('.addCart');

addCart.addEventListener('click', function () {
    reciept.style.display = 'block'
    recieptWindow.style.top = '20%'
    

    setTimeout(() => {
        reciept.style.opacity = 1
    }, 100);

    let menu = 'Sizning chekingiz: \n \n';
    let totalPrice = 0;
    let totalKcall = 0;

    for (const key in food) {
      menu = menu + `${food[key].name} ${food[key].amount}x ${food[key].price} = ${food[key].clacSum} \n\n`

      totalPrice = totalPrice + food[key].clacSum
      totalKcall = totalKcall + food[key].kcallSum
    }

    recieptWindowOut.innerHTML = `${menu} \n Total price: ${totalPrice} sum \n \n Total kcall: ${totalKcall} kcall`
})

recieptWindowBtn.addEventListener('click', function (e) {

    location.reload();

    if (e.target) {
        recieptWindow.style.top = "-100%"
        setTimeout(() => {
            reciept.style.display = 'none'
            reciept.style.opacity = 0
        }, 200);
    }

})

const mainProductInfo = document.querySelectorAll('.main__product-info');
const view = document.querySelector('.view');
const viewImage = view.querySelector('img');
const viewCloseBtn = view.querySelector('.view__close');

mainProductInfo.forEach(item => {
   item.addEventListener('click', function() {
      const imageSrc = this.querySelector('img').getAttribute('src');
      viewImage.setAttribute("src", imageSrc);
      view.classList.add('active');
   });
});



viewCloseBtn.addEventListener('click', function() {
   view.classList.remove('active');
});




//  'use strict' bu xato qilmaslikka harakat qiladi

// {
//     let a = 10
// }

// console.log(a); // xato beradi


// function myFunction() {
//     let name = "Axror";
//     console.log(name);
// }

// myFunction()  // ishlidi

// let a = 20;
// var b = 10;