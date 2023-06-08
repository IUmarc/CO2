//Summiert in Tabelle die angegebene Spalte
function tableSum(tableID,n) {

    var i, v, tData = null;
    var sum = 0;
    var table = document.getElementById(tableID);
    var tBody = table.getElementsByTagName('tbody')[0];
    var tRow = tBody.getElementsByTagName('tr');

    for (i = 0; i < tRow.length; i++) {
        tData = tRow[i].getElementsByTagName('td') [n];
        if (Number(tData.innerText)) {
            v = Number(tData.innerText);
            sum += v;
        }
    }
    //Ausgabe im Footer
    document.getElementById('Summe').textContent = sum;
}