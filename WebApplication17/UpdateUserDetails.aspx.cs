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
    public partial class UpdateUserDetails : System.Web.UI.Page
    {
        public string firstname = "";
        public string lastname = "";
        public string username = "";
        protected string password = "";
        public string email = "";
        protected string phone = "";
        public string city = "";
        public string street = "";
        public string housenumber = "";
        public string address = "";
        public string gender = "";
        public string birthday = "";

        public void ExecuteQuery(string command)
        {
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";

            SqlConnection con = new SqlConnection(connectionString);
            SqlCommand cmd = new SqlCommand(command, con);
            con.Open();
            cmd.ExecuteNonQuery();
            con.Close();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserName"].ToString() == "guest")
            {
                Session["ErrorText"] = "Guest do not have details in system";
                Response.Redirect("ErrorPage.aspx");
            }
            username = Session["UserName"].ToString();
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Adiza\source\repos\WebApplication17\WebApplication17\App_Data\Database1.mdf;Integrated Security=True";
            string cmdStr = string.Format("SELECT  * FROM Users WHERE (UserName = N'{0}')", username);
            SqlDataAdapter da = new SqlDataAdapter(cmdStr, connectionString);
            DataSet ds = new DataSet(); 
            da.Fill(ds);
            firstname = ds.Tables[0].Rows[0]["FirstName"].ToString();
            lastname = ds.Tables[0].Rows[0]["LastName"].ToString();
            password = ds.Tables[0].Rows[0]["password"].ToString();
            email = ds.Tables[0].Rows[0]["Email"].ToString();
            phone = ds.Tables[0].Rows[0]["Phone"].ToString();
            address = ds.Tables[0].Rows[0]["Address"].ToString();
            gender = ds.Tables[0].Rows[0]["Gender"].ToString();
            birthday = ds.Tables[0].Rows[0]["Birthday"].ToString();

            if (Request.Form["updateBtn"] != null)
            {
                 firstname = Request.Form["fname"];
                 lastname = Request.Form["lname"];
                 username = Request.Form["username"];
                 password = Request.Form["password"];
                email = Request.Form["email"];
                phone = Request.Form["phone"];
                city = Request.Form["city"];
                street = Request.Form["street"];
                housenumber = Request.Form["housenumber"];
                address = city + " /" + street + " /" + housenumber;
                gender = Request.Form["gender"];
                birthday = Request.Form["birthday"];

                ds.Tables[0].Rows[0]["FirstName"] = firstname;
                ds.Tables[0].Rows[0]["LastName"] = lastname;
                ds.Tables[0].Rows[0]["password"] = password;
                ds.Tables[0].Rows[0]["Email"] = email;
                ds.Tables[0].Rows[0]["Phone"] = phone;
                ds.Tables[0].Rows[0]["Address"] = address;
                ds.Tables[0].Rows[0]["Gender"] = gender;
                ds.Tables[0].Rows[0]["Birthday"] = birthday;

                SqlCommandBuilder builder = new SqlCommandBuilder(da);
                da.UpdateCommand = builder.GetUpdateCommand();
                da.Update(ds);

                Response.Redirect("UserDetails.aspx");
            }
        }


    }
}