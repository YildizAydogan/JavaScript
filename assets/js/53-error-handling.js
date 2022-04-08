document.querySelector("#frmLogin").addEventListener("submit", (e)=>{
    e.preventDefault();

    try {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;

        if(!isEmail(email)) throw("Gecerli bir eposta giriniz"); 
        if(!password) throw("Sifre bos gecilemez"); 



        document.querySelector("#frmLogin").submit();



    } catch (error) {
       alert(error);
    }
});


function isEmail(email){
    let reg = /\S+@\S+\.\S{2,5}$/;
    return reg.test(email);

}