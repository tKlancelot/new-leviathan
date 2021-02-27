<?php
	// $bdd = new PDO('mysql:host=127.0.0.1;dbname=espace-commentaire;charset=utf8','root','root');    
	$bdd = new PDO('mysql:host=db5001841472.hosting-data.io;dbname=dbs1514150;charset=utf8','dbu253495','!a8tAm9Rx792A8CD%');
?>


<?php
    session_start();
    echo $_SESSION['role'];
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
                                $msg = "<span style='color:#4c8'>ton commentaire a bien été posté</span>";
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
                        $msg = "remplis les champs ci-dessus";
                    }
                }
                else{
                    $msg = "";
                } 
            ?>

            <table class="liste-commentaire">
                <?php $reponse = $bdd->query('SELECT UPPER(pseudo) as pseudo,id,commentaire,dateEnvoi FROM commentaires ORDER BY dateEnvoi DESC');
                while ($donnees = $reponse->fetch()){
                ?>
                <tbody class="panneauComm">
                    <tr>
                        <td class="pseudo"><span class="thePseudo"><?php echo $donnees['pseudo'];?></span> a publié le <?php echo $donnees['dateEnvoi'] ?></td>
                    </tr>
                    <tr>
                        <td class="comm"><?php echo $donnees['commentaire'];?></td>
                        <?php if(isset($_SESSION['role'])){
                        ?>
                            <td><a href="supprimer.php?id=<?php echo $donnees['id'];?>">delete</a></td>
                        <?php
                        }
                        ?>
                    </tr>
                </tbody>
                <?php
                }
                $reponse->closeCursor();?>
            </table>
        </div>
        <div class="console-erreur">
            <div>
            <p style='color:red;opacity:0.64'><?php if(isset($msg)){echo $msg;}?></p>
            <?php
            $req2 = $bdd->query('SELECT COUNT(*) AS nbCommentaires FROM commentaires');
                while ($donnees = $req2->fetch())
                {
                    ?><p><?php echo $donnees['nbCommentaires'];?></p><?php
                }
            ?>
            <?php $req2->closeCursor();?>
            </div>
        </div>
    


    </body>
    <script src='js/pages/quelques-ouvrages.js' type="module"></script>
</html>


