<?php include_once "../include/header.php" ?>

<section id="search-engine">

<a href="index.php">
    <img class="logo-big" src="../style/img/logo.png" alt="Find the World!">
</a>

<form action="recherche.php" method="get" class="search-form">
    <select name="search-by" class="search-by btn">
        <option value="country">Pays</option>
        <option value="capitale">Capitale</option>
        <option value="continent">Continent</option>
        <option value="region">Région</option>
    </select>

    <div class="field">
        <div class="search-container">
            <input type="text" name="search" class="search-bar" placeholder="Cherchez un pays" autocomplete="off">
            <div class="suggestions">
                <ul></ul>
            </div>
        </div>
        <button type="button" class="btn reset-btn"></button>
    </div>
    
    <input type="submit" value="" class="btn search-btn">
</form>
<h1 class="err-msg"></h1>

<button type="button" class="btn" id="debug">Debug</button>

</section>

<?php include_once "../include/footer.php" ?>