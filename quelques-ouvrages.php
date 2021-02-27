<?php
	// $bdd = new PDO('mysql:host=127.0.0.1;dbname=espace-commentaire;charset=utf8','root','root');
	$bdd = new PDO('mysql:host=db5001841472.hosting-data.io;dbname=dbs1514150;charset=utf8','dbu253495','!a8tAm9Rx792A8CD%');
?>


<?php
    // function logComment($element){
    //     if(isset($_POST[$element])AND !(empty($_POST[$element]))){
    //         $post = $_POST[$element];
    //         // var_dump($post);
    //     }
    // }
?>

<!DOCTYPE html>
<html lang="fr">
    <?php
        $title = 'contacts';
    ?>
    <?php include('head.php'); ?>
    <body>
        <div class="cadreLoader">
            <div class='cadreL'>
                <p>chargement...</p>
                <div class='myLoader'></div>
            </div>
        </div>
        
        <div class="body">
        <?php
            include('navbar.php');
        ?>
        </div>

        <div class="section-php">

            <form action="" method="POST">
                <div class="row">
                    <input type="text" name="pseudo" placeholder="pseudo">
                    <input type="date" name="dateEnvoi">
                </div>
                <div class="row2">
                    <textarea name="commentaire" id="commentaire" cols="50" rows="2" placeholder="écris ton commentaire ici ..."></textarea>
                    <input type="submit" value="poster ce commentaire">
                </div>
            </form>

            <?php     
                if(isset($_POST['pseudo']) AND (isset($_POST['commentaire']))){
                    $pseudo = htmlspecialchars($_POST['pseudo']);
                    $commentaire = htmlspecialchars($_POST['commentaire']);
                    $datePost = $_POST['dateEnvoi'];
                    $msg = "post pseudo et post commentaire existent";
                    if(!empty($pseudo) AND !empty($commentaire)){
                        $msg = "variable pseudo et commentaire non vide";
                        if(strlen($pseudo) < 10){
                            $msg = "ok on continue";
                            if(strlen($commentaire)<1000){
                                $msg = "<span style='color:green'>ok ça marche</span>";
                                $req = $bdd->prepare('INSERT INTO commentaires (pseudo, commentaire, dateEnvoi) VALUES (?,?,?)');
                                $req->execute(array($pseudo,$commentaire,$datePost));
                                // var_dump($req);
                            }
                            else{
                                $msg = "ton message est trop long";
                            }
                        }                        
                        else{
                            $msg = "le pseudo est trop long";
                        }
                    }
                    else{
                        $msg = "remplissez les champs ci-dessus";
                    }
                }
                else{
                    $msg = "";
                } 
            ?>

            <table class="liste-commentaire">
                <?php $reponse = $bdd->query('SELECT * FROM commentaires');
                while ($donnees = $reponse->fetch()){
                ?>
                <tbody class="panneauComm">
                    <tr>
                        <td class="pseudo"><span class="thePseudo"><?php echo $donnees['pseudo'];?></span> a publié le <?php echo $donnees['dateEnvoi'] ?></td>
                    </tr>
                    <tr>
                        <td class="comm"><?php echo $donnees['commentaire'];?></td>
                    </tr>
                </tbody>
                <?php
                }
                $reponse->closeCursor();?>
            </table>
        </div>
        <div class="console-erreur">
            <p style='color:red'><?php if(isset($msg)){echo $msg;}?></p>
        </div>
    


    </body>
    <script src='js/pages/quelques-ouvrages.js' type="module"></script>
</html>



