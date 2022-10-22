var kullanicilar = [
    {email: "turanfaik@hotmail.com", sifre:"12345"},
    {email: "arifturan@hotmail.com", sifre:"12345"}
]

var tivitler = [
    {email: "turanfaik@hotmail.com", tivit:"Bugün hava güzel"},
    {email: "turanfaik@hotmail.com", tivit:"Bugün hava güzel 2"},
    {email: "arifturan@hotmail.com", tivit:"Okula gitmeyeceğim."}
]

var email = prompt("email?");
var sifre = prompt("sifre?");

function giris(){
    if(email == kullanicilar[0].email && sifre == kullanicilar[0].sifre || 
        email == kullanicilar[1].email && sifre == kullanicilar[1].sifre){
            console.log(tivitler)
        }else{
            console.log("Kullanıcı adı veya şifresi hatalı...")
        }  
}

giris(email, sifre);