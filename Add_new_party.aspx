


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ Page EnableEventValidation="false" Language="VB" AutoEventWireup="false" CodeFile="Add_new_party.aspx.vb"
    Inherits="Add_new_party" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Stock Receive</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    

      
    <style type="text/css">
        .style1
        {
            height: 25px;
            width: 108px;
        }
        .style2
        {
            width: 108px;
        }
    </style>
</head>
<body bgcolor="#FFEFD5">
    <form id="Form1" runat="server">
    
                                        <table id="trvendor" runat="server" visible="true">
                                            <tr>
                                                <td align="right">
                                                    Party Name
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtvendorname" runat="server" Width="350px"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    Add1
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtadd1" runat="server" Width="350px"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    Add2
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtadd2" runat="server" Width="350px"></asp:TextBox>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="right">
                                                    City
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="txtcapital" runat="server" Width="350px"></asp:TextBox>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td align="right">
                                                    VAT Tin No.
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="vat_tin_no" runat="server" Width="350px"></asp:TextBox>
                                                </td>
                                            </tr>
                                             <tr>
                                                <td align="right">
                                                    Phone No.
                                                </td>
                                                <td align="left">
                                                    <asp:TextBox ID="phno" runat="server" Width="350px"></asp:TextBox>
                                                </td>
                                            </tr>
                                           <%-- <tr>
                                                <td>
                                                    <asp:Button ID="Button1" runat="server" Text="Save"/>
                                                </td>
                                            </tr>--%>
                                        </table>
                                        <table id="trremark" runat="server" visible="false">
                                            <tr>
                                                
                                            </tr>
                                        </table>
       
                                                    
                                       <asp:Button ID="Button1" runat="server" Text="Save" OnClick="Button1_Click"/>          
                                       
                              
             
    </form>

</body>
</html>
