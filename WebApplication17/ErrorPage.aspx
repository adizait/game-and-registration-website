<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ErrorPage.aspx.cs" Inherits="WebApplication17.ErrorPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>דף שגיאה</title>
    <style>
        h1{
            color:red;
            text-align:center;
            font-size:40px;
        }
        body{
            background-color:#E9E9E9;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
          <h1 style="color:Red; text-align:center"><%=errorStr %></h1>
    </form>
</body>
</html>
