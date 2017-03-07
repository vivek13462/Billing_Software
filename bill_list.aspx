<%@ Page Language="VB" AutoEventWireup="false" CodeFile="bill_list.aspx.vb" Inherits="bill_list" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    <table id="Table2" align="left" cellspacing="0" cellpadding="0" border="1" style="width: 1500px"
        runat="server" class="ctrl">
        
        <tr>
            <td colspan="4" align="center">
                <strong><span style="font-size: 20pt">List of Bills</span>
                </strong>
            </td>
        </tr>
        </table>
    <asp:DataGrid ID="grdstock"  runat="server" Width="80%" AutoGenerateColumns="False"
                        BackColor="White" BorderColor="Black" BorderStyle="None" BorderWidth="1px" CellPadding="1"
                        ShowFooter="True" Font-Bold="False" Font-Italic="False" Font-Names="Verdana"
                        Font-Overline="False" Font-Strikeout="False" Font-Underline="False" ForeColor="Black">
                        <FooterStyle BackColor="White" ForeColor="Black" Font-Bold="True" Font-Italic="False"
                            Font-Overline="False" Font-Strikeout="False" Font-Underline="False" Wrap="False" />
                        <SelectedItemStyle BackColor="#669999" Font-Bold="True" ForeColor="White" />
                        <PagerStyle BackColor="White" ForeColor="#000066" HorizontalAlign="Left" Mode="NumericPages" />
                        <ItemStyle ForeColor="#000066" />
                        <HeaderStyle Font-Bold="True" ForeColor="Black" Font-Italic="False" Font-Overline="False"
                            Font-Size="10pt" Font-Strikeout="False" Font-Underline="False" Wrap="False" />
                        <Columns>
                            <asp:TemplateColumn HeaderText="Sr No">
                                <ItemTemplate>
                                    <%#Container.ItemIndex + 1%>
                                </ItemTemplate>
                            </asp:TemplateColumn>
                            <%--<asp:BoundColumn DataField="busno" HeaderText="Bus No"></asp:BoundColumn>--%>
                            <asp:TemplateColumn HeaderText="Bill No" ItemStyle-HorizontalAlign="Left">
                                <ItemTemplate>
                                    <a href='print_bill.aspx?bill_no=<%# DataBinder.Eval(Container, "DataItem.bill_no") %>'>
                                        <font color="Blue"></font>
                                        <%# DataBinder.Eval(Container, "DataItem.bill_no")%></a>
                                </ItemTemplate>
                            </asp:TemplateColumn>
                            <asp:BoundColumn DataField="date" HeaderText="Bill Date" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            <asp:BoundColumn DataField="invoice" HeaderText="Invoice No" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            <asp:BoundColumn DataField="challan" HeaderText="Challan No" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            <asp:BoundColumn DataField="party_name" HeaderText="Party Name" ItemStyle-HorizontalAlign="center">
                            </asp:BoundColumn>
                            
                                
                        </Columns>
                   </asp:DataGrid>
    </div>
    </form>
</body>
</html>
