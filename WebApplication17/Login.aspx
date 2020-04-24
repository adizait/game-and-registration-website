<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="WebApplication17.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>דף התחברות</title>
    <script src="JavaScript1.js"></script>
    <style>
        #LoginTable{
            float:right;
            direction:rtl;
            font-size:22px;
            
        }
        .Style1{
            background-color:#DAF7A6;
            font-size:20px;
            border:1px double black;
            font-family:Calibri;
        }
        #Style2{
            font-size:36px;
            font-family:Calibri;
        }
    </style>
</head>
<body>
    <form action="Login.aspx" method="post">
        <table id="LoginTable">
            <tr>
                <td id="Style2">
                    התחברות
                </td>
            </tr>
            <tr>
                <td class ="Style1">שם משתמש:</td>
                <td><input type="text" id="username" name="username" placeholder ="הכנס שם משתמש..."/></td>
                <td id="userError" class="error"></td>
            </tr>
            <tr>
                <td class ="Style1">סיסמה:</td>
                <td><input type="password" id="password" name="password" placeholder ="הכנס שם סיסמה..."/></td>
                <td id="passError" class="error"></td>
            </tr>
            <tr>
                <td><input type="submit" value="לחץ כאן" id="submit" name="submit" onclick="return check()"/></td>
                <td></td>
                <td id="submitError" class="error"></td>
            </tr>
        </table>
    </form>
</body>
</html>
