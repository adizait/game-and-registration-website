using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

namespace WebApplication17
{
    public partial class UserDetails : System.Web.UI.Page
    {
        protected string userColumnsTable = "";
        protected string userDetailsTable = "";
        protected string fullName = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserName"] == null)
            {
                Session["ErrorText"] = "לאורחים אין פרטים במערכת זו";
                Response.Redirect("ErrorPage.aspx");
            }
            string cmdString = "";
            SqlCommand cmd;
            userColumnsTable += "<table><tr><td>שם פרטי:</td></tr><tr><td>שם משפחה:</td></tr><tr><td>שם משתמש:</td></tr><tr><td>סיסמה:</td></tr><tr><td>אימייל:</td></tr><tr><td>טלפון:</td></tr><tr><td>כתובת:</td></tr><tr><td>מין:</td></tr><tr><td>יום הולדת:</td></tr>";
            if (Session["Admin"].ToString() == "N")
            {   //format for regular user
                // this parameter is taken from database property "Connection String"
                string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";

                SqlConnection conn = new SqlConnection(connectionString);
                cmdString = string.Format("SELECT * FROM Users WHERE (UserName = N'{0}')", Session["UserName"]);
                cmd = new SqlCommand(cmdString, conn);
                conn.Open();
                SqlDataAdapter da = new SqlDataAdapter(cmdString, connectionString);
                DataSet ds = new DataSet();
                da.Fill(ds);
                userDetailsTable += "<table><tr><td>" + ds.Tables[0].Rows[0]["FirstName"].ToString() + "</td></tr>" + "<tr><td>" + ds.Tables[0].Rows[0]["LastName"].ToString() + "</td></tr>" + "<tr><td>" + ds.Tables[0].Rows[0]["UserName"] + "</td></tr>" + "<tr><td>" + ds.Tables[0].Rows[0]["password"] + "</td></tr>" +"<tr><td>" + ds.Tables[0].Rows[0]["Email"] + "</td></tr>" + "<tr><td>" + ds.Tables[0].Rows[0]["Phone"] + "</td></tr>" + "<tr><td>" + ds.Tables[0].Rows[0]["Address"].ToString() + "</td></tr>" + "<tr><td>" + "<tr><td>" + ds.Tables[0].Rows[0]["Gender"].ToString() + "</td></tr>" + "<tr><td>" + ds.Tables[0].Rows[0]["Birthday"] + "</td></tr>";
                
                conn.Close();
            }
                   
            userDetailsTable += "</table>";
            userColumnsTable += "</table>";
        }
    }
}