using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
// Database libraries
using System.Data.SqlClient;
using System.Data;

namespace WebApplication17
{
    public partial class DeleteUser : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserName"].ToString() == "guest")
            {
                Session["ErrorText"] = "לאורחים אין פרטי משתמש במערכת זו";
                Response.Redirect("ErrorPage.aspx");
            }

            string btn = Request.Form["DelUsr"];

            if (btn != null)
            {
                string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";

                SqlConnection conn = new SqlConnection(connectionString);
                string cmdString = string.Format("DELETE * FROM Users WHERE (UserName = N'{0}')", Session["UserName"]);
                SqlCommand cmd = new SqlCommand(cmdString, conn);
                conn.Open();
                cmd.ExecuteNonQuery();
                conn.Close();

                Response.Redirect("Login.aspx");
            }
        }
    }
}