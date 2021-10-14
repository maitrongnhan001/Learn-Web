function checkUserName (UserName) {
    if (UserName.indexOf(" ") !== -1) {
        return false;
    }
    if (UserName.search(/[a-z]/i) !== 0) {
        return false;
    }
    return true;
}

function checkPassword (Password, UserName) {
    if (Password.length >= 8 && Password.length <= 16) {
        if (Password.search(/[a-z]/) !== -1 && Password.search(/[A-Z]/) !== -1) {
            if (Password.search(/[0-9]/) !== -1) {
                const count = Password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g).length;
                if (count >= 1) {
                    if (Password.search(UserName) === -1) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function CheckEmail (Email) {
    if (/.+@gmail.com/.test(Email)) {
        return true;
    }
    return false;
}

function CheckPhoneNumber (PhoneNumber) {
    if (/^\d{10,12}$/.test(PhoneNumber) && PhoneNumber.length === 12) {
        return true;
    }
    return false;
}

const element = document.getElementById("sm");
element.onclick = (e) => {
    e.preventDefault();
    var result = true;
    const UserName = document.Form.UserName.value;
    result = result && checkUserName(UserName);
    const Password = document.Form.Password.value;
    result = result && checkPassword(Password, UserName);
    const RePassword = document.Form.RePassword.value;
    //Password = RePassword
    result = result && (Password === RePassword);
    const Email = document.Form.Email.value;
    result = result && CheckEmail(Email);
    const PhoneNumber = document.Form.PhoneNumber.value;
    result = result && CheckPhoneNumber(PhoneNumber);
    if (result) {
        document.getElementById('nofi').style.color = "green";
        document.getElementById('nofi').textContent = "Ok, information is valid";
    } else {
        document.getElementById('nofi').style.color = "red";
        document.getElementById('nofi').textContent = "information is invalid";
    }
}