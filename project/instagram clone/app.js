// let arr =[];
function passlen()
{
    let login_btn = document.querySelector("#submitbtn");
    let pass = document.querySelector("#msg");
    console.log(login_btn);
    if(pass.value.length >= 8)
    {
        login_btn.removeAttribute("disabled");
    }
    else
    {
        login_btn.setAttribute('disabled','true');
    }
}

// pass.addEventListener("input" ,function(){
//     arr.push(this.value);
//     if (arr.length>= 8)
//     {
//      login_btn.disabled =false;
//      return ;
//      console.log("ho");
//     }
// }
// )


