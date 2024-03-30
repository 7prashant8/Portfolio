<?php
// Check if form is submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $Name = isset($_POST['Name']) ? $_POST['Name'] : "";
    $Email = isset($_POST['Email']) ? $_POST['Email'] : "";
    $Domain = isset($_POST['Domain']) ? $_POST['Domain'] : "";
    $Contact = isset($_POST['Contact']) ? $_POST['Contact'] : "";
    $Message = isset($_POST['Message']) ? $_POST['Message'] : "";

    // Check if any field is empty
    if (empty($Name) || empty($Email) || empty($Domain) || empty($Contact) || empty($Message)) {
        echo "All fields are required";
    } else {
        // Database connection
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbname = "portfolio"; 

        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

        if ($conn->connect_error) {
            die('Connect Error('. $conn->connect_errno .')'. $conn->connect_error);
        } else {
            // Prepare SQL statements
            $SELECT = "SELECT Contact FROM portfoli WHERE Contact = ?";
            $INSERT = "INSERT INTO portfoli (Name , Email , Domain , Contact , Message) VALUES (?, ?, ?, ?, ?)";

            // Check if Mobile already exists
            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("i", $Contact);
            $stmt->execute();
            $stmt->store_result();
            $rnum = $stmt->num_rows;

            if ($rnum == 0) {
                $stmt->close();

                // Insert new record
                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("sssis", $Name, $Email, $Domain, $Contact, $Message);
                $stmt->execute();
                echo "New record inserted successfully";
            } else {
                echo "Someone already registered using this Mobile";
            }
            $stmt->close();
            $conn->close();
        }
    }
} else {
    echo "Form not submitted";
}
?>
