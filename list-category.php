<?php

function listCateg($bdd,string $categ){
    $requete = $bdd->query("SELECT * FROM techniques WHERE categoryTech = '$categ'");
    while ($donnees = $requete->fetch()){
        ?>
        <div>
            <h4><?php echo $donnees['titreTechnique'];?></h4>
            <h5><?php echo $donnees['nomTechnique'];?></h5>
            <table class="tableTech">
                <tr>
                    <td class="description" rowspan="2"><?php
                    if(strlen($donnees['description']) < 120){
                        echo $donnees['description'];
                    }     
                    else{
                        $desc = substr($donnees['description'],0,120);
                        // var_dump($desc);
                        echo '<span class="fullContent">'. substr($donnees['description'],120,-1).'</span>';
                        echo $desc. '<button class="toggleContent">...</button>';
                    }
                    ?>
                    </td>
                    <?php 
                        if($donnees['niveauTech'] == "easy"){
                            echo '<td class="niveauTech centerTd niveauGreen">';
                            echo $donnees['niveauTech'];
                        ?></td><?php
                        }
                        elseif($donnees['niveauTech'] == "medium"){
                            echo '<td class="niveauTech centerTd niveauBlue">';
                            echo $donnees['niveauTech'];
                        ?></td><?php
                        }
                        else{
                            echo '<td class="niveauTech centerTd niveauRed">';
                            echo $donnees['niveauTech'];
                        ?></td><?php
                        }
                        ?>
                </tr>
                <tr>
                    <td class="centerTd">
                        <?php 
                        if($donnees['niveauTech'] == "easy"){
                            echo "<span>⭐</span>";
                        }
                        elseif($donnees['niveauTech'] == "medium"){
                            echo "<span>⭐⭐</span>";
                        }
                        else{
                            echo "<span>⭐⭐⭐</span>";
                        }
                        ?>
                    </td>
                </tr>
            </table>
        </div>
        <?php
    }
}

?>