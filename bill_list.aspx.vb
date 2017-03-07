

Imports System.Data.SqlClient
Imports System.Data
Partial Class bill_list
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Dim con As New SqlClient.SqlConnection(System.Configuration.ConfigurationSettings.AppSettings("conres"))
        BindGrid(grdstock, con, "[bill_list]")
    End Sub
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


End Class
