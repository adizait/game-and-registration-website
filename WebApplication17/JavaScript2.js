function fname() {
    var firstName = document.getElementById("fname").value;
    var str = "1234567890~`:;!@#$%^&*()_+-=?><\|/";
    var str1 = "abcdefghijklmnopqrstuvwxyz";
    if (firstName.length == 0) {
        document.getElementById("fnameError").innerHTML = "חובה להכניס שם פרטי";
        return false;
    }
    for (var i = 0; i < firstName.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (firstName[i] == str[j]) {
                document.getElementById("fnameError").innerHTML = "השם חייב להכיל אותיות בעברית בלבד";
                return false;
            }
        }
    }
    for (var a = 0; a < firstName.length; a++) {
        for (var x = 0; x < str1.length; x++) {
            if (firstName[a] == str1[x]) {
                document.getElementById("fnameError").innerHTML = "השם חייב להכיל אותיות בעברית בלבד";
                return false;
            }
        }
    }
    document.getElementById("fnameError").innerHTML = "";
    return true;
}
function lname() {
    var lastName = document.getElementById("lname").value;
    var str = "1234567890~`:;!@#$%^&*()_+-=?><\|/";
    var str1 = "abcdefghijklmnopqrstuvwxyz";
    if (lastName.length == 0) {
        document.getElementById("lnameError").innerHTML = "חובה להכניס שם מפשחה"
        return false;
    }
    for (var i = 0; i < lastName.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (lastName[i] == str[j]) {
                document.getElementById("lnameError").innerHTML = "שם המשפחה חייב להכיל אותיות בעברית בלבד";
                return false;
            }
        }
    }
    for (var a = 0; a < lastName.length; a++) {
        for (var x = 0; x < str1.length; x++) {
            if (lastName[a] == str1[x]) {
                document.getElementById("lnameError").innerHTML = "שם המשפחה חייב להכיל אותיות בעברית בלבד";
                return false;
            }
        }
    }
    document.getElementById("lnameError").innerHTML = "";
    return true;
}
function password() {
    var az = "abcdefghijklmnopqrstuvwxyz";
    var AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var counteraz = 0;
    var counterAZ = 0;
    var counterNum = 0;
    var password = document.getElementById("password").value;
    if (password.length == 0) {
        document.getElementById("passwordError").innerHTML = "חובה להכניס סיסמה";
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
            document.getElementById("passwordError").innerHTML = "";
            return true;
        }
        document.getElementById("passwordError").innerHTML = "הסיסמה  חייבת להכיל אות אחת גדולה, אחת קטנה ומספר אחד לפחות";
        return false;

    }
    else {
        document.getElementById("passwordError").innerHTML = "אורך הסיסמה חייב להיות בין 6 - 10 תווים";
        return false;
    }
    document.getElementById("passwordError").innerHTML = "";
    return true;
}
function email() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        document.getElementById("emailError").innerHTML = "חובה להכניס כתובת אימייל";
        return false;
    }
    if (email.includes("@gmail.com") == false) {
        document.getElementById("emailError").innerHTML = "כתובת האימייל חייבת להכיל @gmail.com בסופה";
        return false;
    }
    if (email.split("@")[0] == "") {
        document.getElementById("emailError").innerHTML = "לפני @gmail.com חייב לבוא השם שלך";
        return false;
    }
    if (email.lastIndexOf("@gmail.com") != email.length - ("@gmail.com").length) {
        document.getElementById("emailError").innerHTML = "האימייל חייב להסתיים ב - @gmail.com";
        return false;
    }
    document.getElementById("emailError").innerHTML = "";
    return true;
}
function phone() {
    var phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        document.getElementById("phoneError").innerHTML = "חובה להכניס מספר טלפון";
        return false;
    }
    if (phone.length > 10) {
        document.getElementById("phoneError").innerHTML = "מספר הטלפון חייב להיות לפחות 10 ספרות ";
        return false;
    }
    if (isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "מספר הטלפון חייב להכיל מספרים בלבד";
        return false;
    }
    document.getElementById("phoneError").innerHTML = "";
    return true;
}
function address() {
    var city = document.getElementById("city").value;
    var street = document.getElementById("street").value;
    var housenumber = document.getElementById("housenumber").value;
    if (city == "" || street == "" || housenumber == "") {
        document.getElementById("addressError").innerHTML = "חובה להכניס כתובת מלאה";
        return false;
    }
    if (isNaN(housenumber)) {
        document.getElementById("addressError").innerHTML = "מספר הבית חייב להיות מספר";
        return false;
    }
    document.getElementById("addressError").innerHTML = "";
    return true;
}
function gender() {
    var gender = document.getElementById("gender").value;
    if (gender.length == 0) {
        document.getElementById("genderError").innerHTML = "חובה להכניס מגדר";
        return false;
    }
    if (!(gender == ("זכר") || gender == ("נקבה") || gender == ("אחר"))) {
        document.getElementById("genderError").innerHTML = "המגדר שלך חייב להיות זכר, נקבה או אחר";
        return false;
    }
    document.getElementById("genderError").innerHTML = "";
    return true;
}
function birthday() {
    var date = document.getElementById("birthday").value;
    if (date.length == 0) {
        document.getElementById("birthdayError").innerHTML = "חובה להכניס תאריך";
        return false;
    }
    document.getElementById("birthdayError").innerHTML = "";
    return true;
}
function allFunction() {
    var chkFN = fname();
    var chkLN = lname();
    var chkPS = password();
    var chkE = email();
    var chkP = phone();
    var chkAD = address();
    var chkG = gender();
    var chkBD = birthday();
    return chkFN && chkLN && chkPS && chkE && chkP && chkAD && chkG && chkBD;
}