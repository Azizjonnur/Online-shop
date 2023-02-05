export function displayCart(data = []) {
  console.log(data);
  let totalPrice = 0;
  let result = "";
  const cartMenuNode = document.querySelector(".cartdisplay");
  const priceNode = document.querySelector(".totalSum");
  data.forEach((cart) => {
    const product = cart.product;
    result += `
    <div class="row__left">
         
    <div class="col__left" data-id="${cart._id}">
    <img
        class="img__left"
        width="100%"
        src="../assets/img/image 46.png"
        alt=""
      />
      <p>${product.name}</p>
      <p>-</p>
      <p>${cart.qty}</p>
      <p>+</p>
      <p>${cart.qty * cart.total}</p>
  </div>
  </div>
  
  </div> 
  `;
    totalPrice += product.salePrice * cart.qty;
  });
  cartMenuNode.innerHTML = result;
  priceNode.innerHTML = totalPrice + ` som`;
} 
