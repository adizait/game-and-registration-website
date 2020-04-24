using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace WebApplication17
{
    public partial class AdmnDetails : System.Web.UI.Page
    {
        public string str = "<table border='1'><tr><td>שם פרטי</td><td>שם משפחה</td><td>שם משתמש</td><td>סיסמה</td><td>כתובת דוא&quotל</td><td>טלפון</td><tr>";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["Admin"].ToString() != "Y")
            {
                Session["ErrorText"] = "רק מנהל יכול לגשת לדף זה";
                Response.Redirect("ErrorPage.aspx");
            }
            DataSet ds = new DataSet();
            ds.ReadXml(MapPath("XMLFile.xml"));
            foreach (DataRow rw in ds.Tables[0].Rows)
            {
                str += ("<td>" + rw["FirstName"] + "</td><td>" + rw["LastName"] + "</td><td>" + rw["UserName"] + "</td><td>" + rw["Password"] + "</td><td>" + rw["Email"] + "</td><td>" + rw["Phone"] + "</td>");
                str += "</tr>";
            }
            //Session.Abandon();
            //Response.Redirect("homepage.aspx")
        }
    }
}