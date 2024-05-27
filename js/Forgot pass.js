function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letter";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter your Email";
        return false;
    }
    else if( document.Formfill.Email.value !== document.Formfill.Username.value){
        popup.classList.add('open-popup')
        return false;
    }

}
var popup =document.getElementById('popup');
function closePopup(){
   popup.classList.remove('open-popup')
}