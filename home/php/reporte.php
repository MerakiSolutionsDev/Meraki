<?php
    require_once('../lib/pdf/mpdf.php');

    $mpdf = new mPDF('c', 'A4');
    $mpdf->WriteHTML('<div>Hola</div>');
    $mpdf->Output('reporte.pdf', 'I');
 ?>
