const mobile = document.querySelector('.brand');
const navbarMenu = document.querySelector('.menu-mobile');

let toggle =1;
mobile.addEventListener('click',function () {
    if (toggle%2 != 0) {
        navbarMenu.style.display = 'block';
        mobile.style.backgroundColor = 'white';
        toggle +=1;
    }else{       
        navbarMenu.style.display = 'none';
        mobile.style.backgroundColor = '';

        toggle +=1;
    }
})