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
    public partial class Registration : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
            if (Request.Form["submit"] != null)
            {
                string Fname = Request.Form["fname"];
                string Lname = Request.Form["lname"];
                string UserName = Request.Form["username"];
                string Password = Request.Form["password"];
                string Email = Request.Form["email"];
                string Phone = Request.Form["phone"];
                string City = Request.Form["city"];
                string Street = Request.Form["street"];
                string HouseNumber = Request.Form["housenumber"];
                string Address = City +" /" + Street +" /" + HouseNumber;
                string Gender = Request.Form["gender"];
                string Birthday = Request.Form["birthday"];

                if (Email != "" && UserName != "")
                {
                    if (isExistsMail(Email))
                    {
                        Session["ErrorText"] = Email + "כבר קיים במערכת";
                        Response.Redirect("ErrorPage.aspx");
                        Response.End();
                    }
                    if (isExistsUserName(UserName))
                    {
                        Session["ErrorText"] = UserName + "כבר קיים במערכת";
                        Response.Redirect("ErrorPage.aspx");
                        Response.End();
                    }

                    string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";
                    string cmdStr = string.Format("INSERT INTO Users(FirstName, LastName, UserName, [password], Email,  Phone, [Address], Gender, Birthday) VALUES (N'{0}', N'{1}', N'{2}', N'{3}', N'{4}', N'{5}',  N'{6}', N'{7}', N'{8}')", Fname, Lname, UserName, Password, Email, Phone, Address ,Gender, Birthday);
                    SqlConnection conObj = new SqlConnection(connectionString);
                    SqlCommand cmdObj = new SqlCommand(cmdStr, conObj);
                    conObj.Open();
                    int n = cmdObj.ExecuteNonQuery();
                    conObj.Close();
                    if (n == 1)
                    {
                        Response.Redirect("Login.aspx");
                    }
                }
            }

        }

        bool isExistsMail(string email)
        {
            bool b = false;
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";
            SqlConnection conn = new SqlConnection(connectionString);
            string cmdString = string.Format("SELECT * FROM Users WHERE (email = N'{0}')", email);
            SqlCommand cmd = new SqlCommand(cmdString, conn);
            conn.Open();
            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
                b = true;
            conn.Close();
            return b;
        }

        bool isExistsUserName(string username)
        {
            bool b = false;
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";

            SqlConnection conn = new SqlConnection(connectionString);
            string cmdString = string.Format("SELECT * FROM Users WHERE (username = N'{0}')", username);
            SqlCommand cmd = new SqlCommand(cmdString, conn);
            conn.Open();
            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
                b = true;
            conn.Close();
            return b;
        }
    }


}