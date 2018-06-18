<?php
/**
 * Created by PhpStorm.
 * User: Dudut - Techstars
 * Date: 07/06/2018
 * Time: 21:11
 */

/*
 * |_________|Variaveis $_SESSION|___________|
 * $_SESSION['Account'] = Nome do usuário;
 *
 *  */
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

if (!isset($_POST['token'])){
    // SESSÃO SEGURANÇA MINIMA
    header('HTTP/1.1 403 Anti Fraud Security(Session Min Security)');
    exit;
}

if ($_POST['token'] == $_SESSION['token']) {
    // SESSÃO SEGURANÇA MINIMA
    if (isset($_POST['requestAccount'])) {
        //Função para verirficar se o usuario está logado no sistema.
        if (isset($_SESSION['Account'])) {
            echo json_encode(["accountLogged" => 1]);
        } else {
            echo json_encode(["accountLogged" => 0]);
        }
        exit;
    }

    function conn()
    {
        $con = new \PDO("mysql:host=localhost;dbname=slrp", "root", "");
        return $con;
    }

    function authLogin($usuario, $senha)
    {
        //Função para autenticar login
        $con = conn();
        $stmt = $con->prepare("SELECT * from `accounts` WHERE `Username` = :usuario AND `Password` = :senha");
        $stmt->bindValue(":usuario", $usuario);
        $stmt->bindValue(":senha", $senha);
        $stmt->execute();
        return $stmt->rowCount();
    }

    function getPersons($usuario)
    {
        //Função para obter dados dos personagens
        $con = conn();
        $stmt = $con->prepare("SELECT * FROM `characters` WHERE `Username` = :username");
        $stmt->bindValue(":username", $usuario);
        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    //Sistema de login
    if (isset($_POST['username']) && isset($_POST['password'])) {
        if (authLogin($_POST['username'], $_POST['password']) == 1) {
            echo json_encode(["autenticado" => 1]);
            $_SESSION['Account'] = $_POST['username'];
        } else {
            echo json_encode(["autenticado" => 0]);
        }
        exit;
    }

    // Sessão SEGURANÇA MÀXIMA
    if (isset($_SESSION['Account'])) {
        if(isset($_POST['getPerson'])){ //Função que retorna os dados do personagem para o javascript

            echo json_encode(getPersons($_SESSION['Account']));


            exit;
        }
    } else {
        header('HTTP/1.1 403 Anti Fraud Security(Session Max Security)');
        exit;
    }
}
else{
    // SESSÃO SEGURANÇA MINIMA
    header('HTTP/1.1 403 Anti Fraud Security(Session Min Security)');
    exit;
}




//Options -Indexes

