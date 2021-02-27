<?php
	$bdd = new PDO('mysql:host=127.0.0.1;dbname=espace-commentaire;charset=utf8','root','root');    
	// $bdd = new PDO('mysql:host=db5001841472.hosting-data.io;dbname=dbs1514150;charset=utf8','dbu253495','!a8tAm9Rx792A8CD%');
?>


<?php
    // echo "page de suppression";
    // echo $_GET['id'];
    $req = $bdd->prepare('DELETE FROM commentaires WHERE id = ?');
    $req->execute(array($_GET['id']));
    header('Location: quelques-ouvrages.php');
?>