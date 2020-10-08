<%@ page import="java.sql.*,java.util.*" %>
<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*" %>

<%response.setHeader("Access-Control-Allow-Origin","*");%>
<%
String s1=request.getParameter("platform");
String s2=request.getParameter("sbc");
String s3=request.getParameter("device");
String s4=request.getParameter("model");
String s5=request.getParameter("company");
String s6=request.getParameter("platform1");
String s7=request.getParameter("os");
String s8=request.getParameter("Android");

JSONObject JS = new JSONObject();
JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
address=new JSONObject();

Class.forName("com.mysql.jdbc.Driver");


Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/xargs","root","root");
 
Statement st=con.createStatement();

int k=st.executeUpdate("insert into adddevice values('"+s1+"','"+s2+"','"+s3+"','"+s4+"','"+s5+"','"+s6+"','"+s7+"','"+s8+"')");

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