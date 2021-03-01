<?php

function listCateg($bdd,string $categ){
    $requete = $bdd->query("SELECT * FROM techniques WHERE categoryTech = '$categ'");
    while ($donnees = $requete->fetch()){
        ?>
        <div>
            <h4><?php echo $donnees['titreTechnique'];?></h4>
            <h5><?php echo $donnees['nomTechnique'];?></h5>
            <p><?php echo $donnees['description'];?></p>
        </div>
        <?php
    }
}

?>