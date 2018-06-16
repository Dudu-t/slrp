<?php
/**
 * Created by PhpStorm.
 * User: Dudut - Techstars
 * Date: 07/06/2018
 * Time: 21:11
 */
session_start();

if (isset($_POST['tokenRequest'])) {
    if(isset($_SESSION['token'])) {
        echo json_encode(['tokenAuth' => $_SESSION['token']]);
        exit;
    }
    else{
        $_SESSION['token'] = $token = md5(uniqid());
        echo json_encode(['tokenAuth'=>$token]);
        exit;
    }
}


    if ($_POST['token'] == $_SESSION['token']){
        if (isset($_POST['requestAccount'])) {
            if (isset($_SESSION['Account'])) {
                echo json_encode(["accountLogged" => 1]);
            } else {
                echo json_encode(["accountLogged" => 0]);
            }
            exit;
        }

        if (isset($_POST['username']) && isset($_POST['password'])) {
            if ($_POST['username'] == "Carlos" && $_POST['password'] == "123") {
                echo json_encode(["autenticado" => 1]);
                $_SESSION['Account'] = "Carlos";
            } else {
                echo json_encode(["autenticado" => 0]);
            }
            exit;
        }
    }
    else{
       die();
}


//Options -Indexes

