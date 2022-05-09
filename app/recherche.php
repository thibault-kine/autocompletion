<?php 
include_once "../include/header.php";
require_once "../include/classes/Pays.php";
?>


<section id="results">

<?php 
switch($_GET["search-by"]) {
    case "country":
        Pays::searchByName($_GET["search"]);
        break;

    case "capitale":
        Pays::searchByCapitale($_GET["search"]);
        break;

    case "continent":
        Pays::searchByContinent($_GET["search"]);
        break;

    case "region":
        Pays::searchByRegion($_GET["search"]);
        break;

    default:
        Pays::searchAll();
        break;
}
?>

</section>


<?php include_once "../include/footer.php" ?>