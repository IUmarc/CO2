//Sortiert in Tabelle die angegebene Spalte
function tableSort(n,tableID) {
  
    var i, x, y = null;
    var counter = 0;
    var sort = false;
    var change = true;
    var order = 'asc';
    var table = document.getElementById(tableID);
    var tBody = table.getElementsByTagName('tbody')[0];
    var tRow = tBody.getElementsByTagName('tr');
  
    while (change) {
        change = false;
        for (i = 0; i < (tRow.length - 1); i++) {
            sort = false;
            x = tRow[i].getElementsByTagName('td') [n];
            y = tRow[i+1].getElementsByTagName('td') [n];
            if (order == 'asc') {
                if (Number(x.innerText)) {
                    if (Number(x.innerText) > Number(y.innerText)) {
                        sort = true;
                        break;
                    }
                }
                else {
                    if (x.innerText.toUpperCase() > y.innerText.toUpperCase() ){
                    sort = true;
                    break;
                    }
                }
            } 
            else if (order == 'desc') {
                if (Number(x.innerText)) {
                    if (Number(x.innerText) < Number(y.innerText)) {
                        sort = true;
                        break;
                    }
                }
                else {
                    if (x.innerText.toUpperCase() < y.innerText.toUpperCase() ){
                    sort = true;
                    break;
                    }
                }
            } 
        }   
        if(sort) {
            tRow[i].parentNode.insertBefore(tRow[i+1], tRow[i]);
            change = true;
            counter ++;
        }
        else {
            if (counter == 0 && order == 'asc') {
                order = 'desc';
                change = true;
            }
        }
    }
}