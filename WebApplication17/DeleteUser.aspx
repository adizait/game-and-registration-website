<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DeleteUser.aspx.cs" Inherits="WebApplication17.DeleteUser" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="deleteUser" method="post" action="UserDetailsDelete.aspx">
        <table style="direction:rtl">
            <tr><td>האם אתה בטוח שאתה רוצה למחוק את משתמש זה<%=Session["UserName"] %> ?</td></tr>
            <tr><td><input type="submit" value="מחק משתמש" name="DelUsr" /></td></tr>
        </table>
    </form>
</body>
</html>
