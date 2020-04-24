<%@ Page Language="C#" AutoEventWireup="true" CodeFile="AdminDetails.aspx.cs" Inherits="WebApplication17.AdminDetails" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    
</head>
<body>
    <form id="form1" runat="server">
        <script type="text/javascript">
        document.getElementById("label1").innerHTML = "נתוני מנהלים";
    </script>
    <table><%=str %></table>
    <input type="submit" value ="עדכן פרטים" onclick ="AdminDetailsUptade.aspx.cs" />
    </form>
</body>
</html>
