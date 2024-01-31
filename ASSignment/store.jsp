<%@page import="java.sql.*"%>
<%@page import="java.sql.DriverManager"%>
<%@page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>data stored</title>
</head>
<body>
 <%
    string name=request.getParameter("Name");
    string email=request.getParameter("Email");
    string address=request.getParameter("address");

    try{
        class.forName("oracle.jdbc.driver.OracleDriver");
        connection con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","adasum");
        PreparedStatement ps=con.PrepareStatement("insert into record (name,email,address)values(?,?,?)");
        int i= ps.executeUpdate();
        if(i>0){
            System.out.print("Suuceessfully stored");
        }
        else{
            System.out.println("Failed")
        }
    }catch(Exception e){
        System.out.println(e);
    }
    %>
</body>
</html>