let myImage = document.querySelector('img');
myImage.onclick=function (){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shiba-inu.jpg'){
        myImage.setAttribute('src','images/shiba-inu2.jpg');
    }
    else{
        myImage.setAttribute('src','images/shiba-inu.jpg');
    }
}

let myButton = document.querySelector('button');
let myUser = document.getElementById('user');

function setUserName(){
    let myName = prompt('请输入您的名字。');
    if(!myName || myName === null){
        myUser.textContent = '欢迎你，用户';
    }else{
        localStorage.setItem('name',myName);
        myUser.textContent = '欢迎你，'+ myName;
    }
    
}
if(!localStorage.getItem('name')||localStorage.getItem('name') == 'null'){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myUser.textContent = '欢迎你，'+ storedName;
}

myButton.onclick = function(){
    setUserName();
}