export function displayOrder(data = []) {
    console.log(data);
    let result = "";
    const orderMenuNode = document.querySelector(".get__order");
    console.log(orderMenuNode);
    data.forEach((order) => {
    result += `<div class="order_address">
        <h3>Your Address: ${order.shipping.address}</h3>
        <h3>Your City: ${order.shipping.city}</h3>
    <h3>Your Zip: ${order.shipping.zip}</h3>
        </div>
        <div class="order_data">
        <h3>Your Name: ${order.customerId.name}</h3>
        <h3>Your Email: ${order.customerId.email}</h3>
        <h3>Your Phone: ${order.customerId.phone}</h3>
        <h3>Your Payment Type: ${order.paymentType}</h3>
        <h4>Order Status: ${order.status}</h4>
        </div>`
    });
    orderMenuNode.innerHTML = result;
};