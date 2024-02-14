
const {jsPDF} = window.jspdf;

function savePDF(map, titre){
    let doc = new jsPDF();

    // Entête
    doc.text('Horaire de: ' + titre, 32, 15);
    let head = ['DATE', 'DÉBUT', 'FIN', 'DURÉE'];

    // Set the table starting position
    let x = 32;
    let y = 20;

    // Index des rangés
    let z = 0;

    // Set the column widths
    const columnWidths = [54, 32, 32, 32];

    // Set the table styles
    const headerStyle = { fillColor: "#000000", textColor: "#ffffff" };
    let rowStyle = "#f2f2f2";

    // Draw the table headers
    head.forEach((val, key) => {
        doc.setFillColor(headerStyle.fillColor);
        doc.setTextColor(headerStyle.textColor);
        doc.setFontSize(16);
        doc.rect(x, y, columnWidths[key], 10, "FD");
        doc.text(val, x + 5, y + 5, {aling:'center', baseline:'middle'});
        x += columnWidths[key];
    });

    x = 32;
    y = 30;

    // Draw the table rows
    map.forEach((row, key) => {
        
        if (typeof(key) === 'number') {
            if(z % 2 === 0){rowStyle = '#cccccc';}
            else rowStyle = "#f2f2f2";

            row.forEach((val, i) => {
                doc.setFillColor(rowStyle)
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(13);
                doc.rect(x, y, columnWidths[i], 10, "FD");
                doc.text(val, x + 5, y + 5, {aling:'center', baseline:'middle'});
                x += columnWidths[i];
            });

            x = 32;
            y += 10;
        };
        z++;
    });

    doc.setFillColor(rowStyle);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(13);
    doc.rect(x, y, 150, 10, "FD");
    doc.text("Lieux visité " + (map.size - 1) + " fois. Pour un total de: " + map.get('dureeTotal'), x + 5, y + 5, {aling:'center', baseline:'middle'});

    doc.save(titre +'.pdf');
};

export {savePDF};