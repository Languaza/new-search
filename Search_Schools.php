<?php


$servername = "localhost";
$username = "root";
$password = "";
$database = "school_search";
// Create connection
$conn = new mysqli($servername, $username, $password ,$database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "connected";


include 'Head.html';

if (isset($_POST['school_type']))
{
    $school =$_POST['school_type'];
 echo $school;




    if ($result = $mysqli->query("SELECT * FROM school", MYSQLI_USE_RESULT)) {
        printf("Select returned %d rows.\n", $result->num_rows);

        /* free result set */
        $result->close();
    }
}






