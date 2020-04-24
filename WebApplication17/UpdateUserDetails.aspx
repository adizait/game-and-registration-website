<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UpdateUserDetails.aspx.cs" Inherits="WebApplication17.UpdateUserDetails" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="JavaScript2.js"></script>
</head>
<body>
    <form action="UpdateUserDetails.aspx" method="post" onsubmit="return chkform()">   
            <table>
                <tr>
                    <th>
                        עדכון פרטי משתמש
                    </th>
                </tr>
                <tr>
                <td class="Style1">שם פרטי:</td>
                <td><input type="text" name="fname" id="fname" value="<%=firstname %>"/></td>
                <td class="Style2" id="fnameError"></td>
            </tr>
            <tr>
                <td class="Style1">שם משפחה:</td>
                <td><input type="text" name="lname" id="lname" value="<%=lastname %>"/></td>
                <td class="Style2" id="lnameError"></td>
            </tr>
                <tr>                    
                <td class="Style1">שם משתמש:</td>
                <td><input type="text" name="username" id="username" value="<%=username %>" disabled="disabled"/></td>
                <td class="Style2" id="usernameError"></td>                 
                </tr>
                <tr>
                    <td class="Style1">סיסמה:</td>
                <td><input type="password" name="password" id="password" value="<%=password %>"/></td>
                <td class="Style2" id="passwordError"></td>
                </tr>
                <tr>
                    <td class="Style1">כתובת אימייל:</td>
                <td><input type="text" name="email" id="email" value="<%=email %>"/></td>
                <td class="Style2" id="emailError"></td>
                </tr>
                <tr>
                    <td class="Style1">מספר טלפון:</td>
                <td><input type="text" name="phone" id="phone" value="<%=phone %>"/></td>
                <td class="Style2" id="phoneError"></td>
                </tr>
                <tr>
                    <td class="Style1">עיר / רחוב / מספר בית:</td>
                <td><input type="text" id="city" value="<%=city %>"/>
                    <input type="text" id="street" value="<%=street %>"/>
                    <input type="text" id="housenumber" value="<%=housenumber %>"/>
                </td>
                <td class="Style2" id="addressError"></td>
                </tr>
                <tr>
                    <td class="Style1">מגדר:</td>
                <td><input type="text" name="gender" id="gender" value="<%=gender %>"/></td>
                <td class="Style2" id="genderError"></td>
                </tr>
                <tr>
                    <td class="Style1">תאריך לידה:</td>
                <td><input type="date" name="birthday" id="birthday" value="<%=birthday %>"/></td>
                <td class="Style2" id="birthdayError"></td>
                </tr>
                <tr>
                <td>
                    <input type="submit" name="updateBtn" value="עדכן"/>
                    <input type="reset" value="נקה"/>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
