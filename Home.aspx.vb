
Partial Class Home
    Inherits System.Web.UI.Page

    Protected Sub btn_generate_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_generate.Click
        Response.Redirect("Bill_Generation.aspx")
    End Sub

    Protected Sub btn_print_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btn_print.Click
        Response.Redirect("bill_list.aspx")
    End Sub

    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles Button1.Click
        Response.Redirect("Add_new_party.aspx")
    End Sub
End Class
