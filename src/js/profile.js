export function displayProfile(data = []) {
    console.log(data);
    let result = "";
    const profileMenuNode = document.querySelector(".profile");
    console.log(profileMenuNode);
    result += `<div class="aboutUser">
    <img src="../img/people.png" alt="User Image" />
    <div class="documentUser">
        <h3>Ваше Имя: ${data.name}</h3>
        <h3>Ваша Фамилия: ${data.lastName}</h3>
        <h3>Ваш email: ${data.email}</h3>
        <h3>Ваш Адрес: ${data.phone}</h3>
    </div>
    </div>
    <div class="roleUser">
    <h4>Вы: ${data.role}</h4>
    <span class="span">Ваш ID: ${data._id}</span> 
    </div>`
    profileMenuNode.innerHTML = result;
}