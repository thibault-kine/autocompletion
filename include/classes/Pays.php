<?php

class Pays {

    public static function searchAll() {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        file_put_contents('../results.json', json_encode($result));
    }

    public static function searchByID($id) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE id = $id");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        file_put_contents('../results.json', json_encode($result));
    }

    public static function searchByName($name) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE nom LIKE '$name%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        file_put_contents('../results.json', json_encode($result));
    }

    public static function searchByContinent($continent) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE continent LIKE '$continent%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        file_put_contents('../results.json', json_encode($result));
    }

    public static function searchByRegion($region) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE region LIKE '$region%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        file_put_contents('../results.json', json_encode($result));
    }

    public static function searchByCapitale($capitale) {
        $connexion = mysqli_connect("localhost", "root", "", "autocompletion");
        $sql = mysqli_query($connexion, "SELECT * FROM pays WHERE capitale LIKE '$capitale%'");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        
        file_put_contents('../results.json', json_encode($result));
    }
}