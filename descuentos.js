const coupons = [
    "Jesus_es_spiderman",
    "nadie_lo_sabe"
];

function CalcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch(couponValue){
        case coupons[0]:
            descuento = 15;
            break;
        
        case coupons[1]:
            descuento = 30;
            break;
    }

    const precioConDescuento = CalcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;

}
