<?php include_once "../include/header.php" ?>

<section id="search-engine">

<img class="logo-big" src="../style/img/logo.png" alt="Find the World!">

<form action="recherche.php" method="get" class="search-form">
    <div class="field">
        <input type="text" name="search" class="search-bar" placeholder="Cherchez un pays">
        <button type="button" class="btn reset-btn"></button>
    </div>
    
    <input type="submit" value="" class="btn search-btn">
</form>
<h1 class="err-msg"></h1>

<button type="button" class="btn" id="debug">Debug</button>

</section>

<?php include_once "../include/footer.php" ?>