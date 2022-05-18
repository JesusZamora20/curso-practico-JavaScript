function CalcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;

}
