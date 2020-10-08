<%@ page import="java.sql.*,java.util.*" %>
<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*" %>
<%response.setHeader("Access-Control-Allow-Origin","*");%>
<%
String s1 = request.getParameter("t1");
String s2 = request.getParameter("t2");
String s3 = request.getParameter("t3");
String s4=request.getParameter("t4");
String s5=request.getParameter("t5");
int a=Integer.parseInt(s5);

JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
address = new JSONObject();


Class.forName("com.mysql.jdbc.Driver");

Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/xargs","root","admin");
Statement st=con.createStatement();

int k=st.executeUpdate("insert into automation values('"+s1+"','"+s2+"','"+s3+"','"+s4+"',"+a+")");

if(k!=0)
{
  json.put("response","Yes");
}

else
{
  json.put("response","Not");
}

response.setContentType("application/json");
response.getWriter().write(json.toString());


%>



