function sortTable () {
    var table ,rows,switching,i,x,y, shouldSwitch;
    table = document.getElementsByClassName("matches");
    switching=true;
    while (switching){
        switching=false;
        rows = table.rows;
        for (i=1;i<(rows.length-1);i++){
            shouldSwitch =false;
            x = rows[i].getElementByTagName('TD')[0];
            Y = rows[i+1].getElementByTagName('TD')[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                shouldSwitch =true;
                break;
            }
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
            switching=true;
        }
        
    }

}