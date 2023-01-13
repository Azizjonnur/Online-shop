export function displaycategory(data = []) {
    const categorynot = document.querySelector(".category__ul");
    let result = "";
    data.forEach((category) => {
    result += `<li>${category.name}</li> `;
    });
    categorynot.innerHTML = result;
}