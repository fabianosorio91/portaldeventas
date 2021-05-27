let products  =[];
let total =0;
function add(product, price){
    console.log(product,  price);
    products.push(product);
    total= total + price;
    document.getElementById("tiendap").innerHTML = `CONFIRMAR COMPRA:  $${total}`;
}
function pay(){
    alert("Productos seleccionados. Clic para continuar")
    window.alert(products.join(", \n ")); 
}
