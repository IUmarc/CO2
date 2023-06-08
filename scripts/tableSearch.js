//Suche über alle 3 Spalten
function tableSearch(tableID) {
    
    var i, tData0, tData1, tData2, Sum = null;
    var search = document.getElementById('tableSearch');
    var table = document.getElementById(tableID);
    var tBody = table.getElementsByTagName('tbody')[0];
    var tRow = tBody.getElementsByTagName('tr');

    search = search.value.toUpperCase();

    for (i = 0; i < tRow.length; i++) {
        tData0 = tRow[i].getElementsByTagName('td') [0];
        tData1 = tRow[i].getElementsByTagName('td') [1];
        tData2 = tRow[i].getElementsByTagName('td') [2];
        Sum = document.getElementById('Summe').textContent
        if (tData0) {
            tData0 = tData0.textContent || tData0.innerText;
            tData1 = tData1.textContent || tData1.innerText;
            tData2 = tData2.textContent || tData2.innerText;
            if (tData0.toUpperCase().indexOf(search) > -1) {
                tRow[i].style.display = "";
            }
            else if (tData1.toUpperCase().indexOf(search) > -1) {
                tRow[i].style.display = "";
            }
            else if (tData2.toUpperCase().indexOf(search) > -1) {
                tRow[i].style.display = "";
            }
            else {
                tRow[i].style.display = "none";
                //Anpassung der Tabellen Summe
                if (Number(tData2)) {
                    document.getElementById('Summe').textContent = (Sum - (Number(tData2)));
                }                            
            }
        }
    }
}