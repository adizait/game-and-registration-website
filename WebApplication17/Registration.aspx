<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Registration.aspx.cs" Inherits="WebApplication17.Registration" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>דף הירשמות</title>
    <script src="JavaScript.js"></script>
    <style>
        table{
            float:right;
            direction:rtl;
            font-size:22px;
            font-family:Calibri;
        }
        .Style1{
            background-color:#DAF7A6;
            color: white;
        }
        th{
            font-size:36px;
        }
        .Style2{
            font-size:14px;
        }
    </style>
</head>
<body>
    <form name="Registration" action="Registration.aspx" method="post">
            <table>
                <tr>
                    <th>
                        טופס הרשמה
                    </th>
                </tr>
                <tr>
                <td class="Style1">שם פרטי:</td>
                <td><input type="text" name="fname" id="fname" placeholder="הכנס שם פרטי..."/></td>
                <td class="Style2" id="fnameError"></td>
            </tr>
            <tr>
                <td class="Style1">שם משפחה:</td>
                <td><input type="text" name="lname" id="lname" placeholder="הכנס שם משפחה..."/></td>
                <td class="Style2" id="lnameError"></td>
            </tr>
                <tr>                    
                <td class="Style1">שם משתמש:</td>
                <td><input type="text" name="username" id="username" placeholder="הכנס שם משתמש..."/></td>
                <td class="Style2" id="usernameError"></td>                 
                </tr>
                <tr>
                    <td class="Style1">סיסמה:</td>
                <td><input type="password" name="password" id="password" placeholder="הכנס סיסמה..."/></td>
                <td class="Style2" id="passwordError"></td>
                </tr>
                <tr>
                    <td class="Style1">כתובת אימייל:</td>
                <td><input type="text" name="email" id="email" placeholder="דוגמה@gmail.com"/></td>
                <td class="Style2" id="emailError"></td>
                </tr>
                <tr>
                    <td class="Style1">מספר טלפון:</td>
                <td><input type="text" name="phone" id="phone" placeholder="הכנס מספר טלפון..."/></td>
                <td class="Style2" id="phoneError"></td>
                </tr>
                <tr>
                    <td class="Style1">עיר / רחוב / מספר בית:</td>
                <td><input type="text" id="city" placeholder="הכנס עיר..."/>
                    <input type="text" id="street" placeholder="הכנס רחוב..."/>
                    <input type="text" id="housenumber" placeholder="הכנס מספר בית..."/>
                </td>
                <td class="Style2" id="addressError"></td>
                </tr>
                <tr>
                    <td class="Style1">מגדר:</td>
                <td><input type="text" name="gender" id="gender" placeholder="הכנס מגדר..."/></td>
                <td class="Style2" id="genderError"></td>
                </tr>
                <tr>
                    <td class="Style1">תאריך לידה:</td>
                <td><input type="date" name="birthday" id="birthday" /></td>
                <td class="Style2" id="birthdayError"></td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" name="submit" value="לחץ כאן בכדי להירשם" onclick="return allFunction()" />
                    </td>
                </tr>
            </table>
          
    </form>
</body>
</html>
