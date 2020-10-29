$(document).ready(function() {

    var num_gen = [];
    var cont = 0;
    var tempo = 30;
    var num_ins = [];
    var game_over=false;


    do{
        var r = Math.floor((Math.random() * 100)+1); /*Genero numeri random*/
        if(num_gen.indexOf(r) === -1) { /*se diversi da quelli generati in precedenza li pusho altrimenti ripeto*/
            num_gen.push(r);
            $( ".num-gen" ).append( "<span>"+num_gen[cont]+" </span>" ); /*Li faccio visualizzare in pagina*/
            cont++;
        }
    }while (num_gen.length<5);

    var clock = setInterval(function () {  /*Creo un timer di 30 secondi*/

        console.log(tempo);
        document.getElementById('secondi').innerHTML=tempo;
        tempo--;

        if(tempo<0){ /*se il tempo è minore di 0 fermo il countdown*/
            clearInterval(clock);/*fermo il countdown*/
            console.log("Tempo scaduto");
            $( ".num-gen" ).hide(); /*Nascondo i numeri da memorizzare*/
            $( ".avvisi" ).text( "Tempo Scaduto" ); /*avviso che il tempo è scaduto in pagina*/

            setTimeout(function(){ /*Se il tempo è scaduto faccio passare qualche secondo prima di avviare la funzione successiva cosi il prompt non mi blocca la scomparsa dei numeri generati casualmente*/
                tempo_scaduto(); /*avvio la funzione*/
            }, 2000);

        }

    }, 1000);

    function tempo_scaduto(){
        var cont=0;
        var num;
        do{
            num=parseInt(prompt("Inserisci uno de numeri che hai visualizzato " + '('+(cont+1)+')' ));/*Inserisco uno dei numeri che ricordo*/
                if(num_ins.indexOf(num) === -1) { /*Se nuovo lo aggiungo all'array*/
                    console.log("va bene");
                    num_ins.push(num);
                    cont++;
                }
                else{ /*Se gia aggiunto lo faccio inserire nuovamente*/
                    console.log("hai gia inserito questo numero, riprova");
                }
        }while (num_ins.length<5);/*Se ne ho inseriti 5 vado allo step successivo*/

        for (var i = 0; i < num_ins.length; i++) {
            if(num_ins.indexOf(num_gen[i]) === -1) {/*confronto ogni numero generato con ogni numero da me inserito*/

                game_over=true; /*se solo uno non corrisponde hai perso*/
            }
        }

        $( ".num-gen" ).show(); /*Mostro nuovamete i numeri generati*/
        $( ".avvisi" ).text( "Tempo Scaduto" ).hide(); /*Nascondo "tempo scaduto"*/

        if(game_over==true){ 
            console.log("hai perso");
            $( ".avvisi" ).append( "<H1>Hai Perso</H1>" );
        }
        else{
            console.log("congratulazioni hai vinto");
            $( ".avvisi" ).append( "<H1>Hai vinto</H1>" );
        }

    }

});
