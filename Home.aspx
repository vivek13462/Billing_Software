<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Home.aspx.vb" Inherits="Home" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body bgcolor="#FFEFD5">
    <form id="form1" runat="server">
    <div>
        <asp:Button ID="btn_generate" runat="server" Text="GENERATE BILL" BackColor="#FF8080" ForeColor="Black" />
        
        <br />
        <br />
        <br />
        
        <asp:Button ID="btn_print" runat="server" Text="PRINT BILL" BackColor="#FF8080" />
        
        <br />
        <br />
        <br />
        
        <asp:Button ID="Button1" runat="server" Text="ADD PARTY NAME" BackColor="#FF8080" />
        
    </div>
    </form>
</body>
</html>
