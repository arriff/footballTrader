    // functie om een lijst te genereren
    function lijstMaken(tabelID){
        var tabelID;

        var tableHeaderRowCount = 1;
        var table = document.getElementById(tabelID);
        var rowCount = table.rows.length;
        for (var i = 1; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }

        if(tabelID == 'tabelTeams'){
        var rows = teams;
        var html = document.getElementById(tabelID).innerHTML;
        for (var i = 0; i < rows.length; i++) {
            html+="<tr>";
            html+="<td>"+rows[i].id+"</td>";
            html+="<td>"+rows[i].naam+"</td>";
            html+="<td>"+rows[i].competitie[0].naam+"</td>";
            html+="<td>"+rows[i].competitie[0].land+"</td>";
            html+="</tr>";
        }
        } else if(tabelID == 'tabelSpelers'){
        var rows = spelers;
        var html = document.getElementById(tabelID).innerHTML;
        for (var i = 0; i < rows.length; i++) {
            html+="<tr>";
            html+="<td>"+rows[i].id+"</td>";
            html+="<td>"+rows[i].naam+"</td>";
            html+="<td>"+rows[i].team+"</td>";
            html+="<td>"+rows[i].competitie+"</td>";
            html+="<td>"+rows[i].positie+"</td>";
            html+="<td>"+rows[i].snelheid+"</td>";
            html+="<td>"+rows[i].schieten+"</td>";
            html+="<td>"+rows[i].passen+"</td>";
            html+="<td>"+rows[i].dribbelen+"</td>";
            html+="<td>"+rows[i].verdedigen+"</td>";
            html+="<td>"+rows[i].fysiek+"</td>";
            html+="</tr>";
        }    
        } else if(tabelID == 'tabelKaarten'){
            var rows = kaarten;
            var html = document.getElementById(tabelID).innerHTML;
            for (var i = 0; i < rows.length; i++) {
                html+="<tr>";
                html+="<td>"+rows[i].speler.naam+"</td>";
                html+="<td>"+rows[i].versie+"</td>";
                html+="<td>"+rows[i].kaartwaarde+"</td>";
                html+="</tr>";
                // console.log(rows[i].speler.naam);

            } 

        }
        
        else{
            alert("probleem bij genereren van tabel");
        }
        document.getElementById(tabelID).innerHTML = html;
        
    }

