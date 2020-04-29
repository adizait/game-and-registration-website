using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication17
{
    public partial class Login : System.Web.UI.Page
    {
        public bool IsExist(string username, string password)
        {
            bool flag = false;

            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";
            SqlConnection conObj = new SqlConnection(connectionString);
            string cmdStr = string.Format("SELECT * FROM Users WHERE UserName=N'{0}' and [password]=N'{1}'", username, password);
            SqlCommand cmdObj = new SqlCommand(cmdStr, conObj);
            conObj.Open();
            SqlDataReader dr = cmdObj.ExecuteReader();

            if (dr.HasRows)
                flag = true;

            conObj.Close();
            return flag;
        
        }
        public static bool IsAdminExists(string user, string password)
        {
            bool flag = false;
            DataSet ds = new DataSet();
            ds.ReadXml(System.Web.HttpContext.Current.Server.MapPath("XMLFile1.xml"));
            foreach (DataRow r in ds.Tables[0].Rows)
            {
                if (user.Equals(r[0]) && password.Equals(r[1]))
                {
                    flag = true;
                }
            }

            return flag;
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Form["submit"] != null)
            {
                string USERNAME = Request.Form["username"];
                string PASSWORD = Request.Form["password"];
                if (IsExist(USERNAME, PASSWORD))
                {
                    Session["UserName"] = USERNAME;
                    Session["Password"] = PASSWORD;
                    Session["Admin"] = "N";
                    Response.Redirect("UserDetails.aspx");
                }
                else
                {
                    if (IsAdminExists(USERNAME, PASSWORD))
                    {
                        Session["UserName"] = USERNAME;
                        Session["Password"] = PASSWORD;
                        Session["Admin"] = "Y";
                        Response.Redirect("UserDetails.aspx");
                    }
                    else
                    {
                        Session["ErrorText"] = "ישנה שגיאה בשם המשתמש או בסיסמה";
                        Response.Redirect("ErrorPage.aspx");
                    }

                    if (Session["UserName"] != null)
                        Response.Write("שלום " + Session["UserName"]);
                    else
                    {
                        Response.Write("<a href=Login.aspx> דף כניסה</a>");
                        Response.End();
                    }

                }
            }
        }
    }
}