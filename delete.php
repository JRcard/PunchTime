<?php      
$msg = '';
foreach (glob('./files/*.json') as $file){
    $status = unlink($file);    
    if($status){  
        $msg = "File deleted successfully";    
    }
    else{  
        $msg = "Sorry!";    
    } 
}      
echo json_encode($msg);
?>  