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

function kullaniciVarmi(email, sifre){
    console.log(email);
    console.log(sifre);
    for (i = 0; i < kullanicilar.length; i++) {
        if(kullanicilar[i].email==email && kullanicilar[i].sifre==sifre){
            return true;
        }
    }
    return false;
}

function giris(){
    if (kullaniciVarmi(email, sifre)) {
        console.log(tivitler);
    }else{
        console.log("Kullanıcı adı veya şifresi hatalı...")
    }
}

giris();