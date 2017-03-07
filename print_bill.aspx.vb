


Imports System.Data.SqlClient
Imports System.Data
Partial Class print_bill
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim con As New SqlClient.SqlConnection(System.Configuration.ConfigurationSettings.AppSettings("conres"))
        Dim bill_no As Integer = Request.QueryString("bill_no")
        lbldate.Text = ExecuteQuery("select top 1 date from bill_details where bill_no= '" & Request.QueryString("bill_no") & "'")
        lbl_party.Text = ExecuteQuery("select top 1 party_name from bill_details where bill_no= '" & Request.QueryString("bill_no") & "'")
        lbl_challan.Text = ExecuteQuery("select top 1 challan from bill_details where bill_no= '" & Request.QueryString("bill_no") & "'")
        lbl_invoice.Text = ExecuteQuery("select top 1 invoice from bill_details where bill_no= '" & Request.QueryString("bill_no") & "'")
        lbl_add1.Text = ExecuteQuery("select top 1 add1  from party_name where party_name= '" & lbl_party.Text & "'")
        lbl_add2.Text = ExecuteQuery("select top 1 add2  from party_name where party_name= '" & lbl_party.Text & "'")
        party_vat_tin.Text = ExecuteQuery("select top 1 vat  from party_name where party_name= '" & lbl_party.Text & "'")
        grdstock.GridLines = GridLines.Vertical



        BindGrid(grdstock, con, "[Bill_Print]'" & bill_no & "'")
       
        Dim ds As DataSet
        Dim DA As SqlClient.SqlDataAdapter
        ds = New DataSet
        DA = New SqlClient.SqlDataAdapter("Bill_Print_word_rs_sp '" & bill_no & "'", con)

        DA.Fill(ds, "tbl_word_rs")
        word_rs.Text = NumberToWordsRupees(ds.Tables("tbl_word_rs").Rows(0).Item("amount").ToString)



    End Sub
    Public Function NumberToWordsRupees(ByVal rupees As String) As String
        Dim result As String = ""
        Dim res As Int64
        Dim strRupees As String = "" & rupees
        Dim arrRupees() As String = strRupees.Split(".")

        rupees = CInt(arrRupees(0))
        If (rupees / 10000000) > 1 Then
            res = Math.Truncate(rupees / 10000000)
            rupees = Math.Truncate(rupees Mod 10000000)
            result = (Convert.ToString(result & Convert.ToString(" "c)) & rupeestowords(res)) + " Crore"
        End If
        If (rupees / 100000) > 1 Then
            res = Math.Truncate(rupees / 100000)
            rupees = Math.Truncate(rupees Mod 100000)
            result = (Convert.ToString(result & Convert.ToString(" "c)) & rupeestowords(res)) + " Lack"
        End If
        If (rupees / 1000) > 1 Then
            res = Math.Truncate(rupees / 1000)
            rupees = Math.Truncate(rupees Mod 1000)
            result = (Convert.ToString(result & Convert.ToString(" "c)) & rupeestowords(res)) + " Thousand"
        End If
        If (rupees / 100) > 1 Then
            res = Math.Truncate(rupees / 100)
            rupees = Math.Truncate(rupees Mod 1000)
            result = (Convert.ToString(result & Convert.ToString(" "c)) & rupeestowords(res)) + " Hundred"
        End If
        If (rupees Mod 10) >= 1 Or (rupees Mod 10) = 0 Then
            res = Math.Truncate(rupees Mod 100)
            result = Convert.ToString(result & Convert.ToString(" ")) & rupeestowords(res)
        End If

        If (arrRupees.Length = 2) Then
            If arrRupees(1).Length = 1 Then arrRupees(1) = arrRupees(1) & "0"
            result = (result & Convert.ToString(" "c)) + " Rupees & "
            rupees = CInt(arrRupees(1))
            If (rupees Mod 10) > 1 Or (rupees Mod 10) = 0 Then
                res = Math.Truncate(rupees Mod 100)
                result = Convert.ToString(result & Convert.ToString(" ")) & rupeestowords(res)
            End If
            result = (result & Convert.ToString(" "c)) + " Paise Only"
        Else
            result = (result & Convert.ToString(" "c)) + " Rupees Only"
        End If

        Return result
    End Function

    Public Function rupeestowords(ByVal rupees As Int64) As String
        Dim result As String = ""
        If (rupees >= 1) AndAlso (rupees <= 10) Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Nine"
            End If
            If Math.Truncate(rupees Mod 10) = 0 Then
                result = "Ten"
            End If
        End If
        If rupees > 9 AndAlso rupees < 20 Then
            If rupees = 11 Then
                result = "Eleven"
            End If
            If rupees = 12 Then
                result = "Twelve"
            End If
            If rupees = 13 Then
                result = "Thirteen"
            End If
            If rupees = 14 Then
                result = "Forteen"
            End If
            If rupees = 15 Then
                result = "Fifteen"
            End If
            If rupees = 16 Then
                result = "Sixteen"
            End If
            If rupees = 17 Then
                result = "Seventeen"
            End If
            If rupees = 18 Then
                result = "Eighteen"
            End If
            If rupees = 19 Then
                result = "Nineteen"
            End If
        End If
        If rupees > 10 AndAlso Math.Truncate(rupees / 10) = 2 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Twenty"
        End If
        If rupees > 20 AndAlso Math.Truncate(rupees / 10) = 3 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Thirty"
        End If
        If rupees > 30 AndAlso Math.Truncate(rupees / 10) = 4 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Forty"
        End If
        If rupees > 40 AndAlso Math.Truncate(rupees / 10) = 5 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Fifty"
        End If
        If rupees > 50 AndAlso Math.Truncate(rupees / 10) = 6 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Sixty"
        End If
        If rupees > 60 AndAlso Math.Truncate(rupees / 10) = 7 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Seventy"
        End If
        If rupees > 70 AndAlso Math.Truncate(rupees / 10) = 8 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Eighty"
        End If
        If rupees > 80 AndAlso Math.Truncate(rupees / 10) = 9 AndAlso Math.Truncate(rupees Mod 10) = 0 Then
            result = "Ninty"
        End If

        If rupees > 20 AndAlso Math.Truncate(rupees / 10) = 2 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Twenty One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Twenty Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Twenty Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Twenty Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Twenty Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Twenty Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Twenty Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Twenty Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Twenty Nine"
            End If
        End If
        If rupees > 30 AndAlso Math.Truncate(rupees / 10) = 3 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Thirty One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Thirty Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Thirty Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Thirty Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Thirty Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Thirty Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Thirty Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Thirty Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Thirty Nine"
            End If
        End If
        If rupees > 40 AndAlso Math.Truncate(rupees / 10) = 4 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Forty One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Forty Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Forty Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Forty Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Forty Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Forty Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Forty Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Forty Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Forty Nine"
            End If
        End If
        If rupees > 50 AndAlso Math.Truncate(rupees / 10) = 5 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Fifty One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Fifty Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Fifty Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Fifty Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Fifty Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Fifty Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Fifty Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Fifty Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Fifty Nine"
            End If
        End If
        If rupees > 60 AndAlso Math.Truncate(rupees / 10) = 6 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Sixty One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Sixty Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Sixty Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Sixty Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Sixty Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Sixty Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Sixty Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Sixty Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Sixty Nine"
            End If
        End If
        If rupees > 70 AndAlso Math.Truncate(rupees / 10) = 7 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Seventy One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Seventy Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Seventy Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Seventy Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Seventy Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Seventy Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Seventy Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Seventy Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Seventy Nine"
            End If
        End If
        If rupees > 80 AndAlso Math.Truncate(rupees / 10) = 8 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Eighty One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Eighty Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Eighty Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Eighty Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Eighty Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Eighty Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Eighty Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Eighty Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Eighty Nine"
            End If
        End If
        If rupees > 90 AndAlso Math.Truncate(rupees / 10) = 9 AndAlso Math.Truncate(rupees Mod 10) <> 0 Then
            If Math.Truncate(rupees Mod 10) = 1 Then
                result = "Ninty One"
            End If
            If Math.Truncate(rupees Mod 10) = 2 Then
                result = "Ninty Two"
            End If
            If Math.Truncate(rupees Mod 10) = 3 Then
                result = "Ninty Three"
            End If
            If Math.Truncate(rupees Mod 10) = 4 Then
                result = "Ninty Four"
            End If
            If Math.Truncate(rupees Mod 10) = 5 Then
                result = "Ninty Five"
            End If
            If Math.Truncate(rupees Mod 10) = 6 Then
                result = "Ninty Six"
            End If
            If Math.Truncate(rupees Mod 10) = 7 Then
                result = "Ninty Seven"
            End If
            If Math.Truncate(rupees Mod 10) = 8 Then
                result = "Ninty Eight"
            End If
            If Math.Truncate(rupees Mod 10) = 9 Then
                result = "Ninty Nine"
            End If
        End If
        Return result
    End Function




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

    Public Function BindGrid(ByRef grdMod As DataGrid, ByRef con As SqlClient.SqlConnection, ByRef SQL As String) As DataSet
        Try

            If con.State = ConnectionState.Closed Then
                con.Open()
            End If
            SQL = SQL.Replace("  ", "  ")
            Dim da As New SqlClient.SqlDataAdapter(SQL, con)
            Dim ds As New DataSet
            da.SelectCommand.CommandTimeout = 0
            da.Fill(ds)
            grdMod.DataSource = ds
            grdMod.DataBind()
            Return ds
        Catch e As DataException
            e.Message.ToString()
        Finally
            If con.State = ConnectionState.Open Then
                con.Close()
            End If
        End Try
    End Function

    Protected Sub grdstock_ItemDataBound(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.DataGridItemEventArgs) Handles grdstock.ItemDataBound
        e.Item.Cells(5).Visible = False
        e.Item.Cells(1).Font.Bold = True
        e.Item.Cells(6).Font.Bold = True
        'e.Item.Cells(4).Width = "80"

        If ((e.Item.Cells(4).Text = "Discount on Items:- ") And (e.Item.Cells(4).Text = "0")) Then
            e.Item.Cells(6).Visible = False
        End If

        If (e.Item.Cells(4).Text = "Extra rows") Then
            e.Item.Cells(0).Text = ""
            e.Item.Cells(4).Text = ""
        End If

        
        If e.Item.Cells(4).Text = "Transport Charges" And (e.Item.Cells(6).Text = "0.00" Or e.Item.Cells(6).Text = "0") Then
            e.Item.Cells(4).Text = ""
            e.Item.Cells(6).Text = ""
            e.Item.Cells(0).Text = ""

        End If

        If (e.Item.Cells(4).Text = "VAT @5.0%" And (e.Item.Cells(6).Text = "0" Or e.Item.Cells(6).Text = "0.00")) Then
            e.Item.Cells(4).Text = ""
            e.Item.Cells(6).Text = ""
            e.Item.Cells(0).Text = ""
        End If
        If (e.Item.Cells(4).Text = "VAT @5.50%" And (e.Item.Cells(6).Text = "0" Or e.Item.Cells(6).Text = "0.00")) Then
            e.Item.Cells(4).Text = ""
            e.Item.Cells(6).Text = ""
            e.Item.Cells(0).Text = ""
        End If

        If (e.Item.Cells(4).Text = "VAT @12.50%" And (e.Item.Cells(6).Text = "0" Or e.Item.Cells(6).Text = "0.00")) Then
            e.Item.Cells(4).Text = ""
            e.Item.Cells(6).Text = ""
            e.Item.Cells(0).Text = ""
        End If

        If (e.Item.Cells(4).Text = "Load/Unload Charges" And (e.Item.Cells(6).Text = "0" Or e.Item.Cells(6).Text = "0.00")) Then
            e.Item.Cells(4).Text = ""
            e.Item.Cells(6).Text = ""
            e.Item.Cells(0).Text = ""
        End If


        If (e.Item.Cells(4).Text = "Discount on Items:-" And (e.Item.Cells(6).Text = "0" Or e.Item.Cells(6).Text = "0.00")) Then
            e.Item.Cells(4).Text = ""
            e.Item.Cells(6).Text = ""
            e.Item.Cells(0).Text = ""
        End If

        
        If (e.Item.Cells(4).Text = "0%") Then
            e.Item.Cells(4).Text = "-"
        End If

        If (e.Item.Cells(1).Text = "" And e.Item.Cells(2).Text = "" And e.Item.Cells(3).Text = "") Then
            e.Item.Cells(0).Text = ""
        End If




        'e.Item.Cells(2).Visible = False
        If (e.Item.Cells(4).Text = "Total" Or e.Item.Cells(4).Text = "VAT @12.50%" Or e.Item.Cells(4).Text = "VAT @5.50%" Or e.Item.Cells(4).Text = "VAT @5.0%" Or e.Item.Cells(4).Text = "Transport Charges" Or e.Item.Cells(4).Text = "Grand Total(Round off)" Or e.Item.Cells(4).Text = "Load/Unload Charges" Or e.Item.Cells(4).Text = "VAT @12.50%") Then
            e.Item.Cells(4).HorizontalAlign = HorizontalAlign.Right
            'e.Item.Cells(5).Font.Bold = True
            e.Item.Cells(0).Text = ""
        End If

        If (e.Item.Cells(3).Text = "0") Then
            e.Item.Cells(0).Text = ""
            e.Item.Cells(3).Text = ""
            e.Item.Cells(6).Font.Bold = True
            'e.Item.Cells(1).Visible = False
            e.Item.Cells(4).HorizontalAlign = HorizontalAlign.Right
        End If

        If ((e.Item.Cells(4).Text = "0") And (e.Item.Cells(3).Text = "0")) Then
            e.Item.Cells(4).Text = ""
            'e.Item.Cells(4).Text = ""
            e.Item.Cells(3).Text = ""

        End If

        e.Item.Cells(1).HorizontalAlign = HorizontalAlign.Left
        e.Item.Cells(0).HorizontalAlign = HorizontalAlign.Center



    End Sub
End Class
