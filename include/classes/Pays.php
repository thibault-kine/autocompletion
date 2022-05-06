<?php

class Pays {

    private int $id;
    public string $nom;
    public string $continent;
    public string $region;
    public string $capitale;


    public function __construct() {

    }



    public function searchAll() {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        return $result;
    }

    public function searchByID($id) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE id = $id");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        return $result;
    }

    public function searchByName($name) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE nom LIKE '%$name%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        return $result;
    }

    public function searchByContinent($continent) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE continent LIKE '%$continent%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        return $result;
    }

    public function searchByRegion($region) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE region LIKE '%$region%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        return $result;
    }

    public function searchByCapitale($capitale) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE capitale LIKE '%$capitale%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        return $result;
    }
}