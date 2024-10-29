
document.querySelector('.btn-save').addEventListener('click', function () {
    const description = document.querySelector('.description').value;
    const telephone = document.querySelector('.telephone').value;
    const email = document.querySelector('.email').value;


    localStorage.setItem('userDescription', description);
    localStorage.setItem('userTelephone', telephone);
    localStorage.setItem('userEmail', email);

   
    document.querySelector('.description-display').textContent = description;
    document.querySelector('.telephone-display').textContent = telephone;
    document.querySelector('.email-display').textContent = email;
});


document.addEventListener('DOMContentLoaded', function () {
    const savedDescription = localStorage.getItem('userDescription');
    const savedTelephone = localStorage.getItem('userTelephone');
    const savedEmail = localStorage.getItem('userEmail');

    if (savedDescription) document.querySelector('.description-display').textContent = savedDescription;
    if (savedTelephone) document.querySelector('.telephone-display').textContent = savedTelephone;
    if (savedEmail) document.querySelectorAll('.email-display').textContent = savedEmail;
});