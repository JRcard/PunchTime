<?php      

foreach (glob('./files/*.json') as $file){
    $status = unlink($file);    
    if($status){  
        echo "File deleted successfully";    
    }
    else{  
        echo "Sorry!";    
    } 
}      

?>  