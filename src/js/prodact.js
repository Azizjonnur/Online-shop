export function displayproduct(data = []) {
    const productnode = document.querySelector(".products");
    let result = "";
    data.forEach((product) => {
    result += `
    <div class="product"  data-id="${product._id}">
    <img src="../assets/imgPages/golyashkagov-300x300 1.png" alt="">
    <h4>${product.name}</h4>
    <p>${product.description}</p>
    <p>${product.price}</p>
    <div class="">
    <button class="sec__wreap">В корзину</button>
    </div>  
            </div>`;
    });
    productnode.innerHTML = result;
}