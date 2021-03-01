<?php
    require('connexion-bdd.php');
?>


<?php
    $req = $bdd->prepare('DELETE FROM techniques WHERE id = ?');
    $req->execute(array($_GET['id']));
    header('Location: administrateur.php');
    // header('Location: http://www.leviathan-pacifique.fr/administrateur.php');
    exit();
?>