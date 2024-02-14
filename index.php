<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS/style.css">
    <title>Document</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>
<body>
    <h1>Calcul tes heures</h1>
    <div>
        
        <a href="https://takeout.google.com/" target="_blank">Download ton timeline de Google</a>

        <form class="fichier" action="" method="post" enctype="multipart/form-data"> <!-- action="uploads.php" -->
            <label for="file">Téléversez la Timeline ici (JSON)</label>
            <input class='fileInput' id="file" name="" type="file" multiple>
            <button class='submit' type="button">Export PDF</button>
        </form>

        <div id="err"></div>
    </div>
    <div class="container-fluid">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-3">
                <select class="form-select text-center text-uppercase" id="files" name="fichiers">
                    <option selected>Choisi un fichier</option>
                </select> 
            </div>
            <div class="col-md-4">
                <select class="form-select text-center text-uppercase" id="lieux" name="lieux">
                    <option selected>Choisi un lieu</option>
                </select> 
            </div>
        </div>
        <div>
            <h2 class='phpAffiche'></h2>
        </div>
        <div class="horaire tableRow align-items-center w-50">
                <table class="table table-bordered table-striped table-dark">
                    <thead>
                        <tr class='entete'>
                        </tr>
                    </thead>
                    <tbody class="affiche table-group-divider">
                    </tbody>
                </table>
                <!-- <div class="affiche col-lg-3 text-center"></div> -->
        </div>
    </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="JS/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script type="module" src="JS/mainMultiFile.js"></script>
    
</body>
</html> 