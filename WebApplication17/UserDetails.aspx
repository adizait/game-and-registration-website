<%@ Page Language="C#" AutoEventWireup="true" CodeFile="UserDetails.aspx.cs" Inherits="WebApplication17.UserDetails" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <table>
        <tr>
            <td><%=userColumnsTable %></td>
            <td><%=userDetailsTable %></td>
        </tr>
    </table>
    <br />
    <a href="UpdateUserDetails.aspx">Update Details</a>
    &nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="UserDetailsDelete.aspx">Delete user</a>
    &nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="ShowAllUsers.aspx">Show All users</a>

</body>
</html>
