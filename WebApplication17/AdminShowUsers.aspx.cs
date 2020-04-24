using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class AdminShowUsers : System.Web.UI.Page
{
    public string str = "";
    public string deleteWhere = "";
    public string filterWhere = "";

    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["Admin"].ToString() != "Y")
        {
            Session["ErrorText"] = "רק מנהל יכול לגשת לדף זה";
            Response.Redirect("ErrorPage.aspx");
        }


        string s = deleteWhere;

        str = " <table border='1' id=\"tbl1\" name=\"tbl1\"><tr><th>שם פרטי</th><th>שם משפחה</th><th>שם משתמש</th><th>סיסמה</th><th>מייל</th><th>טלפון</th><th>בחר</th></tr>";

        string conStr = Session["ConnectionString"].ToString();
        string cmdStr = "SELECT  FirstName, LastName, UserName, [password], Email, Phone  FROM Users";

        bool continueFlag = true;

        if (Request.Form["sub"] != null)
        {
            string field1 = Request.Form["where1"].ToString();
            string field2 = Request.Form["where2"].ToString();
            string field1Value = Request.Form["txt1"].ToString();
            string field2Value = Request.Form["txt2"].ToString();



            if (field1Value == "" && field2Value == "")
            {
                //show all data
            }
            else if (field1Value != "" && field2Value != "")
            {
                if (field1 != field2)
                {
                    filterWhere = " WHERE (" + field1 + " = N'" + field1Value + "')";
                    filterWhere += " AND (" + field2 + " = N'" + field2Value + "')";
                }
                else
                {
                    str = "<table border='1' id=\"tbl1\" name=\"tbl1\"><span style='color:red; font-weight:bold'>על שני החתכים להיות שונים</span>";
                    continueFlag = false;
                }
            }
            else if (field1Value != "" && field2Value == "")
            {
                filterWhere = " WHERE (" + field1 + " = N'" + field1Value + "')";
            }
            else if (field1Value == "" && field2Value != "")
            {
                filterWhere = " WHERE (" + field2 + " = N'" + field2Value + "')";
            }
            else if (isSubstring('%', field1Value) == 0 )
            {
                filterWhere = "WHERE (" + field1 + "LIKE '" + field1Value + "')";
            }
            else if (isSubstring('%', field2Value) == 0)
            {
                filterWhere = "WHERE (" + field2 + "LIKE" + field2Value + "')";
            }
            if (filterWhere != "")
            {
                cmdStr += filterWhere;
            }
        }

        if (continueFlag)
        {
            SqlDataAdapter da = new SqlDataAdapter(cmdStr, conStr);
            DataSet ds = new DataSet();
            da.Fill(ds);
            for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
            {
                str += "<tr><td>" + ds.Tables[0].Rows[i]["FirstName"] + "</td>" + "<td>"
                    + ds.Tables[0].Rows[i]["LastName"] + "</td>" + "<td>" + ds.Tables[0].Rows[i]["UserName"]
                    + "</td>" + "<td>" + ds.Tables[0].Rows[i]["[password]"] + "</td>" + "<td>"
                    + ds.Tables[0].Rows[i]["Email"] + "</td>" + "<td>" + ds.Tables[0].Rows[i]["Phone"]
                    + "</td><td>" + "<input type=\"checkbox\" name =\"chk" + i + "\" id =\"chk" + i + "\""
                    + " OnCheckedChanged=\"selectedUsers\"" + "/> " + "</td></tr>";
            }
        }
        str += "</table>";
    }
    protected void UpdateBtn_OnClick(object Source, EventArgs e)
    {
        // secret codes go here
    }
    protected void DeleteBtn_OnClick(object Source, EventArgs e)
    {
        /*
        Control myTable = FindControl("tbl1");
        Control myCheck = null;
        CheckBox cb = null;
        string deleteString = "Delete from TbUsers where userName in ";
        string usersString = "(";
        int counter = 0;
        Table tl = (Table)myTable;
        string id = "";
        string userName = "";
        for (int i = 0; i < tl.Rows.Count; i++)
        {
            TableRow row = (TableRow)tl.Rows[i];
            id = "chk" + (i).ToString();
            myCheck = row.Cells[6].FindControl(id);
            cb = (CheckBox)myCheck;
            if (cb.Checked)
            {
                
                userName = row.Cells[0].ToString();
                if (counter != 0)
                    usersString += ", ";
                usersString += "N'" + userName + "'";
                counter++;
            }
        }
        usersString += ")";
        if (counter>0)
        {
            string connString = Session["ConnectionString"].ToString();
            SqlConnection conn = new SqlConnection(connString);
            deleteString += usersString;
            SqlCommand cmd = new SqlCommand(deleteString, conn);
            conn.Open();
            cmd.ExecuteNonQuery();
            conn.Close();
            deleteString = string.Format("DELETE FROM TbHistory WHERE userName in {0}", Session["Login"]);
            cmd = new SqlCommand(deleteString, conn);
            conn.Open();
            cmd.ExecuteNonQuery();
            conn.Close();
            Response.Redirect("AdminPage.aspx");
        }
        */
    }
    public void updateDeleteGroupSession(string str)
    {
        Session["DeleteWhere"] = str;
    }

    protected void selectedUsers(object Source, EventArgs e)
    {
    }
    protected void DeleteUsers_ServerClick(object Source, EventArgs e)
    {
        //
    }
}