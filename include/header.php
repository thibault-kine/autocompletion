<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- STYLE -->
    <link rel="stylesheet" href="../style/style.css">
    
    <!-- SCRIPTS -->
    <script src="../scripts/script.js"></script>
    <script src="../scripts/autocompletion.js"></script>
</head>
<body>

<header>
    <a href="index.php">
        <img class="logo-small" src="../style/img/logo.png" alt="Find the World!">
    </a>

    <form action="recherche.php" method="get" class="search-form">
        <select name="search-by" class="search-by btn">
            <option value="country">Pays</option>
            <option value="capitale">Capitale</option>
            <option value="continent">Continent</option>
            <option value="region">Région</option>
        </select>

        <div class="field">
            <input type="text" name="search" class="search-bar" placeholder="Cherchez un pays" autocomplete="off">
            <button type="button" class="btn reset-btn"></button>
        </div>

        <input type="submit" value="" class="btn search-btn">
    </form>
</header>

<main>