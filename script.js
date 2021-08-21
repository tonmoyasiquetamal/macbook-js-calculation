const smallMemory = document.getElementById('small-memory')
const bigMemory = document.getElementById('big-memory')
const memoryPrice = document.getElementById('memory-price')
const storage256GB = document.getElementById('storage-256gb')
const storage512GB = document.getElementById('storage-512gb')
const storage1TB = document.getElementById('storage-1tb')
const storagePrice = document.getElementById('storage-price')
const deliveryCost = document.getElementById('charge')
const freeDelivery = document.getElementById('free-delivery')
const paidDelivery = document.getElementById('paid-delivery')
const total = document.getElementById('total')
const macBookPrice = document.getElementById('best-price')
function all(type) {
    type(Cost).innerText =
        updateTotal()
}
//   memory cost
memory8GB.addEventListener('click', function () {
    memoryCost.innerText = '0'
    updateTotal()
})
memory16GB.addEventListener('click', function () {
    memoryCost.innerText = '180'
    updateTotal()
})
// storage cost
storage256GB.addEventListener('click', function () {
    storageCost.innerText = '0'
    updateTotal()
})
storage512GB.addEventListener('click', function () {
    storageCost.innerText = '100'
    updateTotal()
})
storage1TB.addEventListener('click', function () {
    storageCost.innerText = '180'
    updateTotal()
})
// delivery cost
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '0'
    updateTotal()
})
paidDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '20'
    updateTotal()
})

// document.getElementById('promo-code-btn').addEventListener('click', function () {
//     const promoCodeInput = document.getElementById('promo-code-input')
//     const discountPriceText = document.getElementById('discount-price')
//     let discountPrice = Number(discountPriceText.innerText)
//     if (promoCodeInput.value == 'stevekaku') {
//         discountPriceText = updateTotal()
//     }
//     else {
//         alert('u have enterd wrong promo code')
//     }
//     promoCodeInput.value = ''
// })
function updateTotal() {
    const bestPrice = Number(macBookPrice.innerText)
    const extraMemoryCost = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText)
    const extraDeliveryCost = Number(deliveryCost.innerText)
    const grandTotal = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost
    total.innerText = grandTotal
}