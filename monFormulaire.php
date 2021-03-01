<?php

    function monFormulaire(){
        ?>
        <form class="myForm1" action="" method='POST'>
            <h4>formulaire d'ajout de techniques</h4>
            <div class="sectionForm">
                <label for="titreTechnique">titre de la technique</label>
                <input type="text" name="titreTechnique" placeholder="saisis un titre">
            </div>

            <div class="sectionForm">
                <label for="nomTechnique">nom de la technique</label>
                <input type="text" name="nomTechnique" placeholder="saisis un nom pour cette technique">
            </div>

            <div class="sectionForm">
                <textarea name="description"  cols="50" rows="4" placeholder="saisis une description pour cette technique"></textarea>
            </div>
            <div class="sectionForm lastRow">
                <select name="niveauTech">
                    <option value="easy">facile</option>
                    <option value="medium">intermédiaire</option>
                    <option value="harder">difficile</option>
                </select>
            </div>
            <div class="sectionForm lastRow">
                <select name="categoryTech">
                    <option value="html">html</option>
                    <option value="css">css</option>
                    <option value="js">javascript</option>
                </select>
                <input id="submit" type="submit" value="valider">
            </div>
        </form>
        <?php
    }

?>