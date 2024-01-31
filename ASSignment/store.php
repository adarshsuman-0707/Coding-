<?php
$name=$_POST['Name'];

$email=$_POST['Email'];
$address=$_POST['address'];
//database connection
$conn=new mysqli('localhost','root','','portfolio');
if($conn->connect_error){
    die('connection failed : ' .$conn->connect_error);
}
else{
    $stmt =$conn->prepare("insert into registration(name,email,address) values(?,?,?)");
     $stmt->bind_param("sss",$name,$email,$address);
     $stmt ->execute();
     echo "registration successfully";
     $stmt->close();
     $conn->close();
}

?>