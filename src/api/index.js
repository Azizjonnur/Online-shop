import axios from "../utils/axios";
// import configs from "../configs";

export function singIn(quary) {
  if (!quary) {
    throw "Please insert quary parametr";
  }
  let url = `auth/sign-in`;
  return axios.post(url, {
    email: `${quary.email}`,
    password: `${quary.password}`,
  });
}

export function singUp(quary) {
  if (!quary) {
    throw "Please insert quary parametr";
  }
  let url = `auth/sign-up`;
  return axios.post(url, {
    email: `${quary.email}`,
    password: `${quary.password}`,
    name: `${quary.name}`,
    lastName: `${quary.lastName}`,
    phone: `${quary.phone}`,
    address: `${quary.address}`,
    role: "user",
  });
}

export function getcategories() {
  let url = `categories/`;
  return axios.get(url);
}

export function getproducts() {
  let url = `products/`;
  return axios.get(url);
}

export function getCart() {
  let url = `cart/${localStorage.userId}`;
  return axios.get(url);
}

export function addCart(id, _id) {
  if (!id && !_id) {
    throw "Please insert id parametr";
  }
  let url = `cart/${id}/add`;
  return axios.post(url, {
    product: `${_id}`,
    qty: 1,
    total: 3000,
  });
}

export function cartproduct(quary) {
  let url = `products/`;
  return axios.post(url, {
    name: `${quary.name}`,
    price: `${quary.price}`,
    salePrice: `${quary.salePrice}`,
    quantity: `${quary.quantity}`,
    description: `${quary.description}`,
    categoryId: `${quary.categoryId}`,
  });
}

export function clearcart(empty) {
  let url = `cart/${localStorage.userId}/empty`;
  return axios.delete(url);
}

export function postorder(customer, items, total) {
  let url = `orders/`;
  return axios.post(url, {
      cartId: localStorage.userId,
      customer: customer,
      items: items,
      total: `${total}`
  });
}

export function getOrder() {
  let url = `orders/`;
  return axios.get(url);
}
export function getProfile() {
  let url = `auth/profile`;
  return axios.get(url);
}

export function getFavority(id) {
  let url = `favorites/all/${id}`;
  return axios.get(url);
}
