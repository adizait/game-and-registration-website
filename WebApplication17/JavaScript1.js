function UserName() {
    var username = document.getElementById("user").value;
    var str1 = "!@$%^&*()_+=?><:;/|\{}[]";
    if (username.length == 0) {
        document.getElementById("userError").innerHTML = "חובה לכניס שם משתמש";
        return false;
    }
    for (var i = 0; i < username.length; i++) {
        for (var j = 0; j < str1.length; j++) {
            if (username[i] == str1[j]) {
                document.getElementById("userError").innerHTML = "שם המשתמש חייב להכיל אותיות באנגלית ומספרים בלבד";
                return false;
            }
        }
    }
    document.getElementById("userError").innerHTML = "";
    return true;
}
function PassWord() {
    var az = "abcdefghijklmnopqrstuvwxyz";
    var AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var counteraz = 0;
    var counterAZ = 0;
    var counterNum = 0;
    var password = document.getElementById("pass").value;
    if (password.length == 0) {
        document.getElementById("passError").innerHTML = "חובה להכניס סיסמה";
        return false;
    }
    if (password.length > 6 && password.length < 10) {
        for (var i = 0; i < password.length; i++) {
            for (var j = 0; j < az.length; j++) {
                if (password[i] == az[j]) {
                    counteraz++;
                }
            }
        }
        for (var i = 0; i < password.length; i++) {
            for (var x = 0; x < AZ.length; x++) {
                if (password[i] == AZ[x]) {
                    counterAZ++;
                }
            }
        }
        for (var i = 0; i < password.length; i++) {
            for (var y = 0; y < 10; y++) {
                if (password[i] == y || password[i] == '_') {
                    counterNum++;
                }
            }
        }
        if (counteraz >= 1 && counterAZ >= 1 && counterNum >= 1) {
            document.getElementById("passError").innerHTML = "";
            return true;
        }
        document.getElementById("passError").innerHTML = "הסיסמה  חייבת להכיל אות אחת גדולה, אחת קטנה ומספר אחד לפחות";
        return false;

    }
    else {
        document.getElementById("passError").innerHTML = "אורך הסיסמה חייב להיות בין 6 - 10 תווים";
        return false;
    }
    document.getElementById("passError").innerHTML = "";
    return true;
}
function check() {
    var chkU = UserName();
    var chkP = PassWord();

    return chkU && chkP;
}