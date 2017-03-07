<%@ Page Language="VB" AutoEventWireup="false" CodeFile="PO_Print.aspx.vb" Inherits="PO_Print" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head id="Head1" runat="server">
    <title>Untitled Page</title>
</head>
        
<body class="body">
    <form id="Form1" runat="server">
    <a href="../store/PO_master.aspx" class="ctrl">Back</a>
    <div>
        <table id="Table2" align="center" cellspacing="0" class="ctrl" cellpadding="0" border="1"
            style="width: 650px" runat="server">
            <tr>
                <td>
                    &nbsp;
                </td>
                <td>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td>
                    <span>Po No</span>
                    <asp:TextBox ID="txtPONo" runat="server"></asp:TextBox>
                </td>
                <td>
                    &nbsp;
                </td>
            </tr>
            <tr>
                <td>
                    Year :
                    <asp:DropDownList ID="ddlyear" runat="server" Style="margin-top: 0px">
                    </asp:DropDownList>
                </td>
                <td>
                    Print Type :
                    <asp:DropDownList ID="ddlprinttype" runat="server">
                        <asp:ListItem Text="front"></asp:ListItem>
                        <asp:ListItem Text="back"></asp:ListItem>
                    </asp:DropDownList>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <asp:Button ID="btn_showpo" runat="server" Text="Show" />
                </td>
            </tr>
        </table>
    </div>
    <table id="Table1" align="center" cellspacing="0" cellpadding="0" border="0" style="width: 540px"
        runat="server">
         <tr>
            <td colspan="4" align="left">
                
                <strong><span style="font-size: 15pt;">Navi Mumbai Municipal Transport </span></strong>
            </td>
        </tr>
        <tr>
            <td align="center" colspan="4">
                <span style="font-size: 12pt">Office:Navi Mumbai Municipal Transport Undertaking,Turbhe
                    Depot,Turbhe,Navi Mumbai-400705
                    <br />
                    Tel : 27841828, 27841168 Fax : 27841407<br />
                    Email : nmmt@rediffmail.com</span>
            </td>
        </tr>
        <%--<tr>
            <td height="200" width="500">
            </td>
            <td height="200" width="500">
            </td>
            <td height="200" width="500">
            </td>
        </tr>--%>
        <%--<tr>
            <td colspan="1" align="left">
                <img src="../images/leftheader.jpg" height="120" />
            </td>
            <td colspan="2" align="Center">
                <img src="../images/middleheader.jpg" height="120" width="480" />
            </td>
            <td colspan="1" align="center">
                <img src="../images/rightheader.png" height="120" />
            </td>
        </tr>--%>
        <tr style="height: 20px">
           <%-- <td colspan='6'>
                <img src="../images/straightline.png" style="height: 4px; width: 742px" />
            </td>--%>
        </tr>
        <tr style="height: 30px">
            <td colspan="3" align="left">
                <%--<img src="../images/sandarbh.png" height="20" />--%>
            </td>
            <td colspan="2" align="left">
                <%--<img src="../images/dinak.png" height="20" />--%>
            </td>
            <td>
                <span style='width: 180px'></span>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="2" width="650px">
                To,
                <br />
            </td>
            <td align="left" rowspan="4" colspan="2" width="350px" style="border-width: 0px">
                <table border="1px" cellspacing="0px" width="100%">
                    <tr style="line-height: 30px;">
                        <td align="left" colspan="2" valign="top">
                            <strong><span style="font-size: 15pt;">&nbsp; PURCHASE ORDER</span></strong><br />
                            &nbsp; NO.&nbsp; :&nbsp;
                            <asp:Label ID="lblPONoStr" runat="server" Font-Bold="true"></asp:Label>
                            <asp:Label ID="lblPONo" runat="server" Font-Bold="true"></asp:Label><br />
                            <span style='font-family: Times New Roman; padding-right: 50px; font-size: 15px;'>&nbsp;
                                Date : 
                                    <asp:Label ID="lblPoDate" runat="server"></asp:Label></span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="2" width="200">
                <asp:Label ID="Label1" Text="The Marketing Manager," Style='font-family: Times New Roman;
                    font-size: 12px;' runat="server" Font-Bold="true"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="2" width="200">
                <b>M/s.</b><asp:Label ID="lblVendorName" Style='font-family: Times New Roman; font-size: 12px;'
                    runat="server" Font-Bold="true"></asp:Label></td>
       
        </tr>
        <tr>
            <td align="left" colspan="2" width="650px">
                <asp:Label ID="lblAdd1" Style='font-family: Times New Roman; font-size: 12px;' runat="server"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="2" width="650px">
                <asp:Label ID="lblAdd2" Style='font-family: Times New Roman; font-size: 12px;' runat="server"></asp:Label>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="2" width="650px">
                <asp:Label ID="lblcapital" Style='font-family: Times New Roman; font-size: 12px;'
                    runat="server" Font-Bold="true"></asp:Label>
            </td>
        </tr>
        <tr>
            <td colspan="2" width="650px">
            </td>
            <td colspan="2" align="center">
                <span style="font-family: Times New Roman; font-size: 12px; text-align: center">Complete
                    order ref as above should be specified on
                    <br />
                    all challans,Bills and correspondence</span>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="4" style="padding-left: 35px">
                <span style="font-family: Times New Roman; font-size: 16px;">Please Supply the under
                    mentioned articles at our stores at Turbhe Bus Depot,Turbhe,Navi Mumbai.</span>&nbsp;
            </td>
        </tr>
        <tr style="height: 20px">
        </tr>
        <tr>
            <td colspan="4">
                <table width="100%" cellspacing="0px" border="1px">
                    <tr>
                        <td colspan="2">
                            <strong><span style='font-family: Times New Roman; font-size: 12px;'>Our Ref. No: </span>
                            </strong>
                            <asp:Label ID="lblourref" Style='font-family: Times New Roman; font-size: 12px;'
                                runat="server"></asp:Label>
                        </td>
                        <td colspan="2">
                            <strong><span style='font-family: Times New Roman; font-size: 12px;'>DeptRef&nbsp; :&nbsp;</span>
                                <asp:Label ID="lbldeptref" Style='font-family: Times New Roman; font-size: 12px;'
                                    runat="server"></asp:Label></strong>
                        </td>
                    </tr>
                    <tr>
                        <td align="left" colspan="2">
                            <strong><span style='font-family: Times New Roman; font-size: 12px;'>Your Ref. No.</span></strong>
                            <asp:Label ID="lblyourrref" Style='font-family: Times New Roman; font-size: 12px;'
                                runat="server"></asp:Label>
                        </td>
                        <td align="left" colspan="2">
                            <strong><span style='font-family: Times New Roman; font-size: 12px;'>FileNo : </span>
                                <asp:Label ID="lblfileno" Style='font-family: Times New Roman; font-size: 12px;'
                                    runat="server"></asp:Label></strong>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="4" align="left" valign="top">
                <div align="center">
                    <asp:Literal ID="htmldetails" runat="server"></asp:Literal>
                </div>
            </td>
        </tr>
    </table>
    <table id="Table11" visible="false" align="center" cellspacing="0" 
        runat="server" cellpadding="0"
        border="0" style="width: 650px">
        <tr style="height: 10px; border: 0">
            <td align="left" colspan="2">
            </td>
            <td align="right" style="border: 1px; padding-right: 45px" valign="bottom">
                <span style="font-family: Times New Roman; font-size: 12px;">Transport Manager</span>
            </td>
        </tr>
        <tr style="height: 20px; text-align: right">
            <td align="left" colspan="2">
            </td>
            <td align="right" valign="bottom">
                <span style="font-family: Times New Roman; font-size: 12px;">Navi Mumbai Municipal Transport</span>
            </td>
        </tr>
    </table>
    <table id="tblback" align="center" cellspacing="0" runat="server" cellpadding="0"
        border="0" style="width: 650px">
        <tr>
            <td colspan="8" align="left" valign="top">
                <div align="center">
                    <asp:Literal ID="htmldetailsback" runat="server"></asp:Literal>
                </div>
            </td>
        </tr>
        <tr class="ctrl">
            <td align="center" colspan="4" rowspan="2" valign="top" style="height: 50px">
                <asp:Button ID="Button1" runat="server" Width="87px" OnClientClick="printpage();"
                    Text="Print"></asp:Button>
                <asp:Button ID="Button2" runat="server" Text="Close" Width="87px" />
            </td>
        </tr>
    </table>
    </form>
</body>
</html>
