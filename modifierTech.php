<?php
    require('connexion-bdd.php');
    
    include('head.php');
?>
<div class="panneau hexagones">


    <?php
    // recuperation des donnees avec une requete preparee
    $statement = $bdd->prepare("SELECT * FROM techniques where id = ?");
    if ($statement->execute(array($_GET['id']))) {
        while ($row = $statement->fetch()) {
            // print_r($row);
            // echo $row['nomTechnique'];
            ?>
            <form class="myForm1" action="" method="POST">
                <h4>Modifier technique</h4>
                <div class="sectionForm">   
                    <label for="nomTechnique">nom de la technique</label>    
                    <input type="text" name="nomTechnique" value='<?php echo $row['nomTechnique'] ?>'>
                </div>
                <div class="sectionForm">
                    <label for="titreTechnique">titre de la technique</label>
                    <input type="text" name="titreTechnique" value='<?php echo $row['titreTechnique'] ?>'>
                </div>
                <div class="sectionForm">
                    <textarea name="description" cols="44" rows="6"><?php echo $row['description'];?></textarea>
                </div>
                <div class="sectionForm">
                    <select name="categoryTech">
                        <option value="html">html</option>
                        <option value="css">css</option>
                        <option value="js">javascript</option>
                    </select>
                    <select name="niveauTech">
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="harder">harder</option>
                    </select>
                </div>
                <div class="sectionForm">
                    <button class="retour" onclick=myFunction()>retour</button>
                    <input class="submit" type="submit" value="valider">
                </div>

            </form>
            <?php
            updateTechnique($bdd);
        }
    }
?>


<?php
    function updateTechnique($bdd){
        if($_POST) {
            $nomTechnique = htmlspecialchars($_POST['nomTechnique']);
            $titreTechnique = htmlspecialchars($_POST['titreTechnique']);
            $description = $_POST['description'];
            $categTechnique = $_POST['categoryTech'];
            $niveauTech = $_POST['niveauTech'];
            $id = $_GET['id'];
            $req = $bdd->prepare('UPDATE techniques SET nomTechnique = ?, titreTechnique = ?, description = ?, categoryTech = ?, niveauTech = ? WHERE id = ?');
            $req->execute(array($nomTechnique,$titreTechnique,$description,$categTechnique,$niveauTech,$id));
            var_dump($_POST);
            var_dump($id);
            // die();
            header("Location: http://leviathan-pacifique.fr/administrateur.php");
        }
    }
?>

</div>

<script>
    function myFunction(){
        // window.location('administrateur.php');
        window.location('http://leviathan-pacifique.fr/administrateur.php');
    }
</script>