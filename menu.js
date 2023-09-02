let device_width =  window.screen.width
let sub_menu = null
let menu_open = document.querySelector('.menu_list');
console.log(menu_open);
if (device_width <=930) {
    
    let open = false

    let menu_vertical = document.querySelector('.menu_vertical');
    let display_menu = document.querySelector('#menu_vertical');
    menu_open.addEventListener('click', ()=>{
        console.log('hello 1');
        if(open){
            menu_open.style = "background: url('./images/icon-hamburger.svg') no-repeat;"
            menu_vertical.style = `
                                display: none;
                               
                                `
            open = false
        }   
        else{
            menu_open.style = "background: url('./images/icon-close.svg') no-repeat;"
            open = true
            menu_vertical.style = "display: block; ";
        } 
    }); 
}