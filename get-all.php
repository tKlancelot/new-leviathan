<?php

function getAll($bdd,$table,$champs1,$champs2,$champs3){
        $requete = $bdd->query("SELECT * FROM $table");
        ?>
        <table class="oneSection">
        <thead>
            <tr>
                <th colspan="4"><?php echo $table ?></th>
            </tr>
        </thead>
        <tbody>
        <?php
        while ($donnees = $requete->fetch()){
            ?>

                <tr>
                    <td><?php echo $donnees[$champs1];?></td>
                    <td><?php echo $donnees[$champs2];?></td>
                    <td class="modifier" rowspan="2">modifier</td>
                    <td class="supprimer" rowspan="2"><a href="supprimerTech.php?id=<?php echo $donnees['id'];?>">delete</a></td>
                </tr>
                <tr>
                    <td colspan="2"><?php echo $donnees[$champs3];?></td>
                </tr>

                <?php
        }?>
        </tbody>
        </table><?php
    }

?>