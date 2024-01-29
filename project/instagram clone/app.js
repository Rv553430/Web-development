let arr =[];
let login_btn = document.querySelector("login-btn");
let pass = document.querySelector("#msg");
pass.addEventListener("input" ,function(){
    arr.push(this.value);
    if (arr.length>= 8)
    {
     login_btn.disabled =false;
     return ;
     console.log("ho");
    }
}
)

