<%@ page import="net.sf.json.JSONArray,net.sf.json.JSONObject,net.sf.json.JSONException,java.sql.*,java.util.*" %>
<%
response.setHeader("Access-Control-Allow-Origin","*");
Class.forName("com.mysql.jdbc.Driver");
Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/xargs","root","admin");
Statement st=con.createStatement();
 
String query = "Select * from apk";
ResultSet rs = st.executeQuery(query);
  
      JSONObject json = new JSONObject();      
      JSONArray array = new JSONArray();
      JSONObject record;
      try
      {
      while(rs.next()) {
         record = new JSONObject();
	 record.put("apk",rs.getString("apk"));         
         array.add(record);
      }
      json.put("kaluc", array);
     }
catch(JSONException jse)
{
 
}
response.setContentType("application.json");
response.getWriter().write(json.toString());      
%>
      