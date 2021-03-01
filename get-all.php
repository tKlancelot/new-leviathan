<?php

function getAll($bdd,$table,$champs1,$champs2,$champs3,$champs4){
        $requete = $bdd->query("SELECT * FROM $table");
        ?>
        <table class="oneSection">
        <thead>
            <tr>
                <th colspan="5"><?php echo $table ?></th>
            </tr>
        </thead>
        <tbody>
        <?php
        while ($donnees = $requete->fetch()){
            ?>

                <tr>
                    <td><?php echo $donnees[$champs1];?></td>
                    <td><?php echo $donnees[$champs2];?></td>
                    <?php
                        if(isset($champs4)){
                            echo '<td>'.$donnees[$champs4].'</td>';
                        }
                    ?>
                    <td class="modifier" rowspan="2"><a href="modifierTech.php?id=<?php echo $donnees['id'];?>">edit</a></td>
                    <td class="supprimer" rowspan="2"><a href="supprimerTech.php?id=<?php echo $donnees['id'];?>">delete</a></td>
                </tr>
                <tr>
                    <td colspan="3"><?php echo $donnees[$champs3];?></td>
                </tr>
                <?php
            }?>
        </tbody>
        </table><?php
    }

?>