<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<%@ Page EnableEventValidation="false" Language="VB" AutoEventWireup="false" CodeFile="Bill_Generation.aspx.vb"
    Inherits="Bill_Generation" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<script>

function calculations()
    {
    
    var Quantity = parseFloat(document.getElementById("txtPartNo").value).toFixed(2);
    var rate = parseFloat(document.getElementById("txtqty1").value).toFixed(2);
    var Amount = parseFloat(Quantity*rate).toFixed(2);
    document.getElementById("txtremark1").value = parseFloat(Amount).toFixed(2);
                
}

function result()
    {
    
   
    var Amount = parseFloat(document.getElementById("txtremark1").value).toFixed(2);
    var VAT_amt = parseFloat(document.getElementById("vat_amt").value).toFixed(2);
    var discount_amt = parseFloat(document.getElementById("discount_amt").value).toFixed(2);
    document.getElementById("TextBox2").value = parseFloat(parseFloat(Amount) + parseFloat(VAT_amt) - parseFloat(discount_amt)).toFixed(2);
    //document.getElementById("TextBox2").value = (Amount+VAT_amt)-discount_amt;
                
}
function cal_vatamt()
    {
    
   
    var vat_per = parseFloat(document.getElementById("vat").value).toFixed(2);
    var amt = parseFloat(document.getElementById("txtremark1").value).toFixed(2);
    document.getElementById("vat_amt").value = (parseFloat(vat_per/100)*parseFloat(amt)).toFixed(2);
    
                
}

function cal_discount_amt()
    {
    
   
    var discount_per = parseFloat(document.getElementById("discount").value).toFixed(2);
    var amt = parseFloat(document.getElementById("txtremark1").value).toFixed(2);
    document.getElementById("discount_amt").value = (parseFloat(discount_per/100)*parseFloat(amt)).toFixed(2);
    
                
}

</script>

</head>
  
  
    <%--<script language="javascript" src="../Scripts/LogSheet_repairoutward.js"></script>--%>
    <body bgcolor="#FFEFD5">

    <form id="Form1" runat="server">
      <div>
       
       Billing Date:  <asp:TextBox ID="bill_date" runat="server"  Width="200px"></asp:TextBox>

                                                  
      
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Party Name:
        
       <asp:DropDownList ID="party_list" Width="200px" runat="server">
                                                        </asp:DropDownList>
        <asp:Calendar ID="Calendar1" runat="server" OnSelectionChanged="Calendar1_SelectionChanged" Width="30px"></asp:Calendar>
                                                  
      </div>
  <br /><br />
  <table>
  <tr>
     <td>Invoice No: </td><td> <asp:TextBox ID="txt_inv" runat="server"  Width="200px">VK/KH</asp:TextBox></td>
       <td>Challan No:</td><td>  <asp:TextBox ID="txtchallan_no" runat="server"  Width="200px"></asp:TextBox> </td>
       <td>Bill No:</td><td>  <asp:TextBox ID="txt_bill_no" ReadOnly="true" runat="server"  Width="200px"></asp:TextBox> </td>
       </tr>
       <tr>
       <td>
       Load/Unload Charges:</td> <td> <asp:TextBox ID="txt_ld" value="0" runat="server"  Width="200px"></asp:TextBox>
      </td>
       <td>Transport Charges:</td><td>  <asp:TextBox ID="txt_transport" value="0" runat="server"  Width="200px"></asp:TextBox> </td>
        <td>Discount on(For ex: 1,5,2):</td><td>  <asp:TextBox ID="txt_discount_on" runat="server"  Width="200px"></asp:TextBox> </td>
       </tr>
        </table>  
        <br /><br />
  
                    
                                    <div style="text-align: left">
                                        <table id="tblmain" visible="true" runat="server">
                                            <tbody>
                                                
                                                <tr id="trother" runat="server" visible="true">
                                                    <td style="height: 7px" colspan="9" align="center">
                                                        <table id="tblother" width="100%" border="1" cellpadding="2" cellspacing="2">
                                                            <tbody runat="server" id="tbodyother">
                                                                <tr class="gridhead">
                                                                    <td>
                                                                      Quantity  
                                                                    </td>
                                                                    <td>
                                                                        Description
                                                                    </td>
                                                                    <td>
                                                                        Rate
                                                                    </td>
                                                                    <td>
                                                                        Unit
                                                                    </td>
                                                                    <td>
                                                                        Amount
                                                                    </td>
                                                                    <td>
                                                                        VAT TAX(%)
                                                                    </td>
                                                                     <td>
                                                                        VAT Amount
                                                                    </td>
                                                                    <td>
                                                                        Discount(%)
                                                                    </td>
                                                                     <td>
                                                                        Discount Amount
                                                                    </td>
                                                                    <td>
                                                                        Total Amount
                                                                    </td>
                                                                </tr>
                                                                <tr class="gridtxt">
                                                                    <td align="left" style="width: 100px; height: 28px;">
                                                                        <asp:textBox id="txtPartNo" maxlength="100" width="80px" runat="server"></asp:textBox>
                                                                    </td>
                                                                    <td align="left" style="width: 100px; height: 28px;">
                                                                        <asp:textBox id="txtitem1" maxlength="100" width="350px" runat="server"></asp:textBox>
                                                                    </td>
                                                                    <td align="left">
                                                                        <asp:textBox id="txtqty1" maxlength="5" onblur="calculations();" runat="server" width="80px"></asp:textBox>
                                                                    </td>
                                                                    <td align="left">
                                                                        <asp:DropDownList id="ddlunit1" runat="server">
                                                                            <asp:ListItem text="SELECT" value="0"></asp:ListItem>
                                                                            <asp:ListItem text="P.Ltr" value="P.Ltr"></asp:ListItem>
                                                                            <asp:ListItem text="P.Kg" value="P.Kg"></asp:ListItem>
                                                                            <asp:ListItem text="P.Nos" value="P.Nos"></asp:ListItem>
                                                                            <asp:ListItem text="P.Mtr" value="P.Mtr"></asp:ListItem>
                                                                            <asp:ListItem text="P.Roll" value="P.Roll"></asp:ListItem>
                                                                            <asp:ListItem text="P.Set" value="P.Set"></asp:ListItem>
                                                                        </asp:DropDownList>
                                                                    </td>
                                                                    <td>
                                                                        <asp:textBox id="txtremark1" maxlength="250" runat="server" Width="80px"></asp:textBox>
                                                                    </td>
                                                                     <td>
                                                                        <asp:textBox id="vat" maxlength="250" value="0" onblur="cal_vatamt();" runat="server" width="80px"></asp:textBox>
                                                                    </td>
                                                                    <td>
                                                                        <asp:textBox id="vat_amt" maxlength="250"  value="0" runat="server" width="80px"></asp:textBox>
                                                                    </td>
                                                                    <td>
                                                                        <asp:textBox id="discount" maxlength="250" value="0" onblur="cal_discount_amt();" runat="server" width="80px"></asp:textBox>
                                                                    </td>
                                                                    <td>
                                                                        <asp:textBox id="discount_amt" maxlength="250" value="0" onblur="result();" runat="server" width="80px"></asp:textBox>
                                                                    </td>
                                                                    <td>
                                                                        <asp:textBox id="TextBox2" maxlength="250" runat="server" width="80px"></asp:textBox>
                                                                    </td>
                                                                    <td>
                                                                        <asp:Button id="btnadd" runat="server" text="ADD"/>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                           
                                        </table>
                                        </div>
                                        <div>
                                        <hr />
                                        <hr />
                                        <hr />
                                        <table id="tblcontent" visible="true" runat="server">
                                       
                                         <tr id="trgate" runat="server" visible="true">
                                <td style="height: 9px" colspan="4" align="center">

                                        <asp:DataGrid ID="dgresult" Width="100%" CellPadding="4" CellSpacing="0" BorderColor="#FFFFFF"
                                        HeaderStyle-CssClass="gridhead" border="0" bgcolor="#f4f4f4" Height="51" Style="border-collapse: collapse"
                                        runat="server" AutoGenerateColumns="False">
                                        <Columns>
                                            <asp:BoundColumn DataField="srno" HeaderText="Sr No"></asp:BoundColumn>
                                            
                                            <asp:BoundColumn DataField="part_no" ItemStyle-HorizontalAlign="center" HeaderText="Quantity">
                                            </asp:BoundColumn>
                                            <asp:BoundColumn DataField="item_name" ItemStyle-HorizontalAlign="center" HeaderText="Description">
                                            </asp:BoundColumn>
                                            <asp:BoundColumn DataField="total_qty" ItemStyle-HorizontalAlign="left" HeaderText="Rate">
                                            </asp:BoundColumn>
                                            <asp:BoundColumn DataField="unit" HeaderText="Unit"></asp:BoundColumn>
                                            <asp:BoundColumn DataField="txtRemark" HeaderText="Amount"></asp:BoundColumn>
                                            <asp:BoundColumn DataField="ischeck" HeaderText="VAT"></asp:BoundColumn>
                                            <asp:BoundColumn DataField="discount" HeaderText="Discount"></asp:BoundColumn>
                                            <asp:BoundColumn DataField="discount_amt" HeaderText="Discount Amount"></asp:BoundColumn>
                                            <asp:BoundColumn DataField="chkreturn" HeaderText="Total Amount"></asp:BoundColumn>
                                            
                                           
                                        </Columns>
                                    </asp:DataGrid>
                                    </td>
                            </tr>
                            
                            
                           
                                        </table>
                                        </div>
        <asp:Button ID="btnsave" runat="server" Text="Save" />
                                 
    </form>
</body>
</html>
