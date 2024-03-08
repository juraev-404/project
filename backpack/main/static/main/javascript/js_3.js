var a = 1;
function cycle(){
    re = setInterval(password, 500)
}
function password(){
    var password = document.getElementById('pass1')
    document.getElementById('pass2').value = password.value
}
function pass(){
    if(a==1){
        document.getElementById('eye').src = '/static/main/images/close.png';
        document.getElementById('password').type = 'text'
        a = 0;
    }
    else{
        document.getElementById('eye').src = '/static/main/images/open.png';
        document.getElementById('password').type = 'password'
        a = 1;
    }
}
function pass3(){
    if(a==1){
        document.getElementById('eye2').src = '/static/main/images/close.png';
        document.getElementById('pass1').type = 'text'
        a = 0;
    }
    else{
        document.getElementById('eye2').src = '/static/main/images/open.png';
        document.getElementById('pass1').type = 'password'
        a = 1;
    }
}