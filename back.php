<?php
// Retrieve form data
$Name = $_POST['Name'];
$Mobile = $_POST['Mobile'];
$Email = $_POST['Email'];
$Domain = $_POST['Domain'];
$Need = $_POST['Need'];


// Check if any field is empty
if (!empty($Name) && !empty($Mobile) && !empty($Email) && !empty($Domain) && !empty($Need)) {
    // Database connection
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "portfolio"; 

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if(mysqli_connect_error()){
        die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    }
    else {
        $SELECT = "SELECT Mobile FROM portfolio WHERE Mobile = ?";
        $INSERT = "INSERT INTO portfolio ( Name , Mobile , Email , Domain , Need) VALUES (?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("i", $Mobile);
        $stmt->execute();
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum == 0){
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sisss", $Name , $Mobile , $Email , $Domain , $Need);
            $stmt->execute();
            echo "New record inserted successfully";
        }
        else{
            echo "Someone already registered using this MObile";
        }
        $stmt->close();
        $conn->close();
    }
}
else {
    echo "All fields are required";
    die();
}
?>
