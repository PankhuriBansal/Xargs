<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*" %>

<% response.setHeader("Access-Control-Allow-Origin","*");%>

<% 
String s1=request.getParameter("sbc");
JSONObject JS = new JSONObject();

JSONObject json = new JSONObject();
JSONArray addresses = new JSONArray();
JSONObject address;
 address = new JSONObject();

Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/xargs","root","root");
Statement st=con.createStatement();

int k=st.executeUpdate("delete from addsbc where sbc='"+s1+"'");


if(k!=0){
json.put("response","yes");
}
else{
json.put("response","no");
}


response.setContentType("application/json");
response.getWriter().write(json.toString());
%>