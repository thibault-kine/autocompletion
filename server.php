<?php
// connexion à la bdd
$connexion = mysqli_connect("localhost", "root", "", "autocompletion");
// récupération des données
$sql = mysqli_query($connexion, "SELECT * FROM pays");
// stockage des données
$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));