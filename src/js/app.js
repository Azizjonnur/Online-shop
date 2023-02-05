import "./style";
import {
  singIn,
  singUp,
  getcategories,
  getproducts,
  addCart,
  getCart,
  cartproduct,
  clearcart,
  postorder,
  getOrder,
  getProfile,
} from "../api";
import { SignUp } from "./sign_up";
import { displaycategory } from "./category";
import { displayproduct } from "./prodact";
import { displayCart } from "./cart";
import { order, Order } from "./order";
import { displayProfile } from "./profile";

document.addEventListener("DOMContentLoaded", async (e) => {
  addEventListener("popstate", (event) => {
    location.reload();
  });

  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    getcategories().then((data) => {
      console.log(data);
      displaycategory(data.data.payload);
    });
    getproducts().then((data) => {
      console.log(data);
      displayproduct(data.data.data);
    });
    getAttr(".product", addCart);
  }

  if (page === "/sign-up.html" || page === "/sign-up") {
    const formSignUp = document.querySelector(".form__type");
    formSignUp.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new SignUp(
        formSignUp.name.value,
        formSignUp.lastName.value,
        formSignUp.email.value,
        formSignUp.password.value,
        formSignUp.address.value,
        formSignUp.phone.value
      );
      console.log(formData);
      singUp(formData)
        .then(({ data }) => {
          console.log(data);
          localStorage.token = data.token;
          localStorage.user = JSON.stringify(data.user.role);
          location.assign("/");
        })
        .catch((err) => {
          Toastify({
            text: err.msg,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, red, red)",
            },
            onClick: function () {},
          }).showToast();
          if (err?.path) {
            location.assign(err.path);
          }
        });
    });
  }

  if (page === "/sign-in.html" || page === "/sign-in") {
    const signInForm = document.querySelector(".signIn_form");
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        email: signInForm.email.value,
        password: signInForm.password.value,
      };
      console.log(formData);
      singIn(formData)
        .then(({ data }) => {
          console.log(data);
          localStorage.token = data.token;
          localStorage.userId = data.payload._id;
          localStorage.user = JSON.stringify(data.payload.role);
          location.assign("/");
        })
        .catch((err) => {
          Toastify({
            text: err.msg,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, red, red)",
            },
            onClick: function () {},
          }).showToast();
          if (err?.path) {
            location.assign(err.path);
          }
        });
    });
  }

  if (page === "/cart.html" || page === "/cart") {
    getCart().then((data) => {
      console.log(data);
      displayCart(data.data.payload.items);
    });
    const btn__clear = document.querySelector(".btn__clear");
    btn__clear.addEventListener("click", () => {
      clearcart();
    });
  }
  if (page === "/addproduct.html" || page == "/addproduct") {
    const addproductForm = document.querySelector(".addproduct__form");
    console.log(addproductForm);
    addproductForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: addproductForm.name.value,
        price: addproductForm.price.value,
        salePrice: addproductForm.salePrice.value,
        quantity: addproductForm.quantity.value,
        description: addproductForm.description.value,
        categoryId: addproductForm.categoryId.value,
      };
      console.log(formData);
      cartproduct(formData)
        .then(({ data }) => {
          console.log(data);
          localStorage.token = data.token;
          localStorage.userId = data.payload._id;
          localStorage.user = JSON.stringify(data.payload.role);
          location.assign("/");
        })
        .catch((err) => {
          Toastify({
            text: err.msg,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, red, red)",
            },
            onClick: function () {},
          }).showToast();
          if (err?.path) {
            location.assign(err.path);
          }
        });
    });
  }
  if (page === "/orders.html" ||  page === "/orders") {
    const form = document.querySelector(".order__form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new order(
        form.name.value,
        form.phone.value,
        form.address.value,
        form.city.value,
        form.zip.value,
        form.email.value,
      );
      await getCart().then(({ data }) => {
        console.log(data);
        const itemId = data.payload?.items?.forEach((data) => {
          return {
            product: `${data.product._id}`,
            quantity: `${data.qty}`,
            allSum: `${data.total}`,
          };
        });
        let totals = 0;
        const total = data.payload?.items?.forEach(data => {
          totals = totals + data.total
        });
        postorder(formData, itemId, totals).then(({ data }) => {
          console.log(data);
        });
      });
    });
  };
  if (page === "/getorder.html" || page === "/getorder") {
    getOrder().then((data) => {
      console.log(data.data.data);
      displayOrder(data.data.data);
    }).catch((err) => {
      console.log(err);
    });
  }
  if (page === "/profile.html" || page === "/profile") {
    getProfile().then((data) => {
      console.log(data.data.payload);
      displayProfile(data.data.payload);
    }).catch((err) => {
      console.log(err);
    });
  }
});


function getAttr(eName, funcName) {
  document.onclick = (e) => {
    let attr = e.target.closest(eName).getAttribute(`data-id="${_id}"`);
    funcName(localStorage.userId, attr);
    return attr;
  };
}
