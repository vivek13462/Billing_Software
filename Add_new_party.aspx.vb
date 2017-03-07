Imports System.Data.SqlClient
Imports System.Data
Partial Class Add_new_party
    Inherits System.Web.UI.Page


    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)

        'Dim sqlcon as String = System.Configuration.ConfigurationSettings.AppSettings["conres"].ToString()
        'Dim con As New SqlClient.SqlConnection(System.Configuration.ConfigurationSettings.AppSettings("conres"))
        If (txtvendorname.Text = "") Then
            Response.Write("<script>alert('Please Enter Party Name')</script>")
        Else

            Dim con As New SqlClient.SqlConnection(System.Configuration.ConfigurationSettings.AppSettings("conres"))
            Dim cmd As SqlClient.SqlCommand
            Dim ds As DataSet
            Dim DA As SqlClient.SqlDataAdapter
            cmd = New SqlCommand
            ds = New DataSet
            DA = New SqlDataAdapter
            cmd.Connection = con
            cmd = New SqlCommand("Insert_party", con)
            cmd.CommandType = CommandType.StoredProcedure
            cmd.Parameters.AddWithValue("@party_name ", txtvendorname.Text)
            cmd.Parameters.AddWithValue("@add1 ", txtadd1.Text)
            cmd.Parameters.AddWithValue("@add2 ", txtadd2.Text)
            cmd.Parameters.AddWithValue("@city ", txtcapital.Text)
            cmd.Parameters.AddWithValue("@vat_tin_no ", vat_tin_no.Text)
            cmd.Parameters.AddWithValue("@phone ", phno.Text)


            con.Open()
            cmd.ExecuteNonQuery()
            Response.Write("<script>alert('Party Details Successfully Added');window.location.href='Home.aspx'</script>")
            con.Close()
        End If
    End Sub



End Class
