<?php 
include_once "../include/header.php";
include_once "../include/classes/Pays.php";

Pays::searchByID($_GET['id']);
?>

<div id="result">



</div>

<?php
include_once "../include/footer.php";
?>