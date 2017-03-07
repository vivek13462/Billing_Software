<%@ Page Language="VB" AutoEventWireup="false" CodeFile="print_bill.aspx.vb" Inherits="print_bill" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="Form1" runat="server">
    
    <table id="Table2" align="center" cellspacing="0" cellpadding="0" border="1" style="width: 700px"
        runat="server" class="ctrl">
        <tr>
            <td colspan="4" align="center">
                <strong><span style="font-size: 10pt">TAX INVOICE</span>
                </strong>
            </td>
        </tr>
        <tr>
            <td colspan="4" align="center">
                <strong><span style="font-size: 10pt">Subject to Khalapur Jurisdiction</span>
                </strong>
            </td>
        </tr>
        <tr>
            <td colspan="4" align="center">
                <strong><span style="font-size: 25pt">VIVEK ENTERPRISES</span>
                </strong>
            </td>
        </tr>
      <tr>
            <td colspan="4" align="center" style="height: 21px">
                <strong><span style="font-size: 10pt">Opp S T Stand,Mumbai Pune Road,Shilphata,Khopoli-410203,Dist Raigad</span>
                </strong>
            </td>
        </tr>
        <tr>
            <td colspan="4" align="center" style="height: 21px">
                <strong><span style="font-size: 10pt">Contact no: 7773942021/9422689406</span>
                </strong>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <b>Invoice No:&nbsp;&nbsp;</b><asp:Label ID="lbl_invoice" runat="server" Text="Label"></asp:Label>
            </td>
            <td colspan="2">
                <b>Date:&nbsp;&nbsp;</b><asp:Label ID="lbldate" runat="server" Text="Label"></asp:Label>
                
            </td>
        </tr>
        <tr>
           
            <td colspan="2">
                <b>MS:</b>&nbsp;&nbsp;<asp:Label ID="lbl_party" runat="server" Text="Label"></asp:Label>
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lbl_add1" runat="server" Text="Label"></asp:Label>
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="lbl_add2" runat="server" Text="Label"></asp:Label>
            </td>
            <td colspan="2">
                <b>Challan No:</b>&nbsp;&nbsp;<asp:Label ID="lbl_challan" runat="server" Text="Label"></asp:Label>
                
            </td>
        </tr>
        
       
            
         <tr>
            <td colspan="4" align="left" style="height: 50px">
                <div align="center">
                    <asp:DataGrid ID="grdstock" Style="align: center" rowheight="20px" runat="server" HeaderStyle-Font-Bold="true" Width="1200px" Height="1200px" AutoGenerateColumns="False"
                        BackColor="White" BorderColor="Black" BorderStyle="None" BorderWidth="1px" CellPadding="1"
                        ShowFooter="True" Font-Bold="False" Font-Italic="False" Font-Names="Verdana"
                        Font-Overline="False" Font-Strikeout="False" Font-Underline="False" ForeColor="Black">
                        
                        <FooterStyle BackColor="White" ForeColor="Black" Font-Bold="True" Font-Italic="False"
                            Font-Overline="false" Font-Strikeout="False" Font-Underline="False" Wrap="False" />
                        <SelectedItemStyle BackColor="#669999" Font-Bold="True" ForeColor="White" />
                        <PagerStyle BackColor="White" ForeColor="#000066" HorizontalAlign="Left" Mode="NumericPages" />
                        <ItemStyle ForeColor="#000066" />
                        <HeaderStyle Font-Bold="True" ForeColor="Black" Font-Italic="False" Font-Overline="false"
                            Font-Size="13pt" Font-Strikeout="False" Font-Underline="true" Wrap="False" />
                        <Columns>
                            <asp:TemplateColumn HeaderText="Sr No">
                                <ItemTemplate>
                                    <%#Container.ItemIndex + 1%>
                                </ItemTemplate>
                            </asp:TemplateColumn>
                            <%--<asp:BoundColumn DataField="busno" HeaderText="Bus No"></asp:BoundColumn>--%>
                            <asp:BoundColumn DataField="item_name"  HeaderText="Item Name" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            
                            <asp:BoundColumn DataField="rate" HeaderText="Rate" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            
                            <asp:BoundColumn DataField="quantity" HeaderText="Quantity" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            
                            <asp:BoundColumn DataField="vat" HeaderText="VAT(%)" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            
                            <asp:BoundColumn DataField="discount" HeaderText="Discount(%)" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            <asp:BoundColumn DataField="amount" HeaderText="Amount" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                                
                        </Columns>
                   </asp:DataGrid>
                   <hr />
             <b>Amount(in words):</b><asp:Label ID="word_rs" runat="server" Text="Label" Font-Bold="true" Font-Size="Large"></asp:Label>
                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 250px">
            <b>Company's VAT TIN No.27300148775 w.e.f. 1/4/06</b><br /><br />
            <b>Buyer's VAT TIN No.<asp:Label ID="party_vat_tin" runat="server" Text="Label" Font-Bold="true" Font-Size="Large"></asp:Label> </b><br /><br />
            <b>TERMS & CONDITIONS</b><br /><br />
            
                1) Our responsibility ceases on delivery of goods
                at our Godown,on Railway,Steamers etc.<br />
                2) Goods once sold or delivered will not be accepted
                back.<br />
                3) Interest @18% will be charged on overdue payments.<br />
                4) Payment must be made by A/c.payee's order cheque.
            </td>
            <td class="style2" style="width: 0px">
           
            </td>
            <td style="width: 0px">
            </td>
            <td style="width: 300px">
               E.&.O.E.<br />
               I/We hereby certify that my/our registration certificate
               under the maharashtra Value Added Sales Tax Act 2002
               is in force on the date on which the sale of goods 
               specified in this tax invoice is made by me/us and the
               transaction of sale covered by this tax invoice has been 
               effected by me/us and it shall be accounted from the 
               turnover of sales while filing of return and due tax. If any
               payable on the sale has been paid<br /><br />
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>For VIVEK ENTERPRISES</b>   <br /><br /><br />
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>Proprietor</b>
                        </td>
        </tr>
       
    </table>
    </form>
</body>
</html>
