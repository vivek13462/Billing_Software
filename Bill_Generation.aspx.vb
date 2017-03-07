

Imports System.Data.SqlClient
Imports System.Data
Partial Class Bill_Generation

    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        If Not IsPostBack Then
            edit_combo(party_list, "party_id", "party_name", "party_name", "0=0  ")
            Dim intid As Integer
            intid = 0
            intid = ExecuteQuery("select isnull(max(bill_no)+ 1,0) from bill_details")
            'intid = intid + 1

            txt_bill_no.Text = intid.ToString()
            txtchallan_no.Text = "VK/"
            txt_inv.Text = "VK/KH/"
        End If
    End Sub

    Public Function ExecuteQuery(ByVal strSql As String) As String
        Dim Con As New SqlClient.SqlConnection(System.Configuration.ConfigurationSettings.AppSettings("conres"))
        Dim dr As SqlClient.SqlDataReader
        Dim strReturn As String = ""
        Con.Open()

        Dim cmd As New SqlClient.SqlCommand(strSql, Con)
        dr = cmd.ExecuteReader
        'dr.Read()
        If dr.Read Then
            strReturn = dr.GetValue(0)
        End If

        Return strReturn

        cmd.Dispose()
        dr.Close()
        dr = Nothing

    End Function
    Public Sub edit_combo(ByVal dropdownlist As DropDownList, ByVal PK_COL As String, ByVal DESC_COL As String, ByVal table_name As String, ByVal condition As String)

        Try

            'string sql = "select distinct(comp_id),comp_name from comp_detail  where  comp_id = ";
            Dim cmd As SqlCommand
            Dim sql As String = "select distinct(" & PK_COL & ") ," & DESC_COL & " from " & table_name & " where " & condition & "  order by " & DESC_COL & " "
            Dim dr As SqlDataReader
            Dim Con As New SqlClient.SqlConnection(System.Configuration.ConfigurationSettings.AppSettings("conres"))
            cmd = New SqlCommand(sql, Con)
            Con.Open()
            dr = cmd.ExecuteReader()
            dropdownlist.DataTextField = DESC_COL
            dropdownlist.DataValueField = PK_COL
            dropdownlist.DataSource = dr
            dropdownlist.DataBind()
            Con.Close()
            'dropdownlist.Items.Insert(0, "select");

            dropdownlist.Items.Insert(0, New ListItem("Select", "0"))

        Catch ex As Exception
        Finally

        End Try
    End Sub

    Protected Sub btnadd_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnadd.Click
        'If (txtitem1.Text = "") Then
        'Response.Write("<script>alert('Please Enter All Details');</script>")
        ' Else


        Dim dt As New DataTable
        Dim dt1 As New DataTable
        Try
            dt.Columns.Add("srno")
            'dt.Columns.Add("issue_id")
            dt.Columns.Add("part_no")
            dt.Columns.Add("item_name")
            dt.Columns.Add("total_qty")
            dt.Columns.Add("unit")
            dt.Columns.Add("txtRemark")
            dt.Columns.Add("ischeck")
            dt.Columns.Add("discount")
            dt.Columns.Add("discount_amt")
            dt.Columns.Add("chkreturn")


            dt1.Columns.Add("srno")
            'dt1.Columns.Add("issue_id")
            dt1.Columns.Add("part_no")
            dt1.Columns.Add("item_name")
            dt1.Columns.Add("total_qty")
            dt1.Columns.Add("unit")
            dt1.Columns.Add("txtRemark")
            dt1.Columns.Add("ischeck")
            dt1.Columns.Add("discount")
            dt1.Columns.Add("discount_amt")
            dt1.Columns.Add("chkreturn")



            Dim dr As DataRow
            dr = dt.NewRow
            Dim dr1 As DataRow
            dr1 = dt1.NewRow
            Dim i As Integer = 0
            Dim k As Integer = 0
            Dim b As Integer = 1
            Dim str As String = String.Empty
            Dim j As Integer = 0
            Dim b1 As Integer = 1
            Dim presenent As String = ""


            If dgresult.Items.Count > 0 Then
                'dt1.Rows.Clear()  'comented on 15/01
                b1 = 1
                For j = 0 To dgresult.Items.Count - 1
                    dt1.Rows.Add(b1, dgresult.Items(j).Cells(1).Text, dgresult.Items(j).Cells(2).Text, dgresult.Items(j).Cells(3).Text, dgresult.Items(j).Cells(4).Text, dgresult.Items(j).Cells(5).Text, dgresult.Items(j).Cells(6).Text, dgresult.Items(j).Cells(7).Text, dgresult.Items(j).Cells(8).Text, dgresult.Items(j).Cells(9).Text)
                    b1 = b1 + 1
                Next



                dt1.Rows.Add(b1, txtPartNo.Text, txtitem1.Text, txtqty1.Text, ddlunit1.SelectedItem.Text, txtremark1.Text, vat.Text, discount.Text, discount_amt.Text, TextBox2.Text)
                b1 = b1 + 1

                'If Select1.Items(i).Enabled = True Then
            Else
                dt.Rows.Add(b, txtPartNo.Text, txtitem1.Text, txtqty1.Text, ddlunit1.SelectedItem.Text, txtremark1.Text, vat.Text, discount.Text, discount_amt.Text, TextBox2.Text)
                b1 = b1 + 1
            End If

            i = 0

            If dgresult.Items.Count = 0 Then
                dgresult.DataSource = dt
                dgresult.DataBind()
            Else
                dgresult.DataSource = dt1
                dgresult.DataBind()
            End If

            txtPartNo.Text = ""
            txtitem1.Text = ""
            txtqty1.Text = ""
            ddlunit1.Text = ""
            txtremark1.Text = ""
            txtPartNo.Focus()
            vat.Text = ""
            vat_amt.Text = ""
            discount.Text = ""
            discount_amt.Text = ""
            TextBox2.Text = ""
        Catch ex As Exception

        End Try
        'End If
    End Sub


    Protected Sub btnsave_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnsave.Click

        Try
            Dim con As New SqlClient.SqlConnection(System.Configuration.ConfigurationSettings.AppSettings("conres"))
            Dim cmd As SqlClient.SqlCommand
            Dim ds As DataSet
            Dim DA As SqlClient.SqlDataAdapter
            cmd = New SqlCommand
            ds = New DataSet
            DA = New SqlDataAdapter
            cmd.Connection = con
            Dim i As Integer
            Dim check As Integer = 0
            For i = 0 To dgresult.Items.Count - 1




                cmd = New SqlCommand("Insert_bill_details", con)
                cmd.CommandType = CommandType.StoredProcedure
                cmd.Parameters.AddWithValue("@qty", dgresult.Items(i).Cells(1).Text)
                cmd.Parameters.AddWithValue("@item_name", dgresult.Items(i).Cells(2).Text)
                cmd.Parameters.AddWithValue("@rate", dgresult.Items(i).Cells(3).Text)
                cmd.Parameters.AddWithValue("@unit", dgresult.Items(i).Cells(4).Text)
                cmd.Parameters.AddWithValue("@amount", dgresult.Items(i).Cells(5).Text)
                cmd.Parameters.AddWithValue("@vat", dgresult.Items(i).Cells(6).Text)
                cmd.Parameters.AddWithValue("@discount", dgresult.Items(i).Cells(7).Text)
                cmd.Parameters.AddWithValue("@discount_amt", dgresult.Items(i).Cells(8).Text)
                cmd.Parameters.AddWithValue("@tot_amt", dgresult.Items(i).Cells(9).Text)
                cmd.Parameters.AddWithValue("@invoice", txt_inv.Text)
                cmd.Parameters.AddWithValue("@challan", txtchallan_no.Text)
                cmd.Parameters.AddWithValue("@date", bill_date.Text)
                cmd.Parameters.AddWithValue("@transport", txt_transport.Text)
                cmd.Parameters.AddWithValue("@party_name", party_list.SelectedItem.Text)
                cmd.Parameters.AddWithValue("@bill_no", txt_bill_no.Text)
                cmd.Parameters.AddWithValue("@ld_unld", txt_ld.Text)
                cmd.Parameters.AddWithValue("@discount_on", txt_discount_on.Text)


                con.Open()
                cmd.ExecuteNonQuery()
                con.Close()
                check = 1



            Next
            If check = 1 Then
                Response.Write("<script>alert('Bill Details Successfully Saved');window.location.href='Home.aspx'</script>")
            End If


        Catch ex As Exception
        End Try

    End Sub

    Protected Sub Calendar1_SelectionChanged(ByVal sender As Object, ByVal e As System.EventArgs) Handles Calendar1.SelectionChanged
        bill_date.Text = Calendar1.SelectedDate.ToString("dd/MM/yyyy")
        Calendar1.Visible = False
    End Sub
End Class
