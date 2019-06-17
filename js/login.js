/*
function submitOnClick() {
    var idField = document.getElementById('userIdInput').value;
    var pwField = document.getElementById('userPasswordInput').value;

    var isFlag = false;
    if (idField == '')
        isFlag = true;

    if (pwField == '')
        isFlag = true;

    if (isFlag) {
        alert('On Error!');
    } else {
        alert('Success');
    }
}
*/
function registerOnClick(){
    window.location = "https://rainys.ml/register";
}

function loginBtn_Click() {
    var idField = document.getElementById('userIdInput').value;
    var pwField = document.getElementById('userPasswordInput').value;

    var isFlag = false;
    if (idField == '')
        isFlag = true;

    if (pwField == '')
        isFlag = true;

    if (isFlag) {
        alert('로그인 할 수 없습니다.');
    } else {
        window.location = "https://rainys.ml/";
    }
}