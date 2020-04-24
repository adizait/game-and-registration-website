<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="logOut.aspx.cs" Inherits="WebApplication17.logOut" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        div{
            direction:rtl;
            position:center;
            font-size:38px;
        }
        input{
            width:200px;
            height:100px;
            align-content:center;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            מקווה שנהנית המאתר שלי :)
        </div>
        <input type="submit" value="התנתקות" id="submit" name="submit" onclick="logOut.aspx.cs"/>
    </form>
</body>
</html>
