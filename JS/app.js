$(document).ready (function() {
    //console.log('salut');

    let nom_eleve = "";
    let prenom_eleve = "";
  
    $('.btn').click( ()=>{ // Afficher les idents des élèves
           
            $.ajax({
                url:'moyenne.json',
                dataType:"json",
                success:function(data) {
                    //console.log(data.Tableau);
                    

                    var style = "<ul>"; // on met dans la variable string une balise <ul> ouverte

                    //.Tableau pour voir la variable Tableau de mon fichier moyenne.json
                    for (let index = 0; index < data.Tableau.length; index++) {
                        
                        let nom_eleve = data.Tableau[index].Nom;
                        let prenom_eleve = data.Tableau[index].Prenom;
                        let note_eleve = data.Tableau[index].Note;
                        let notes_eleve = data.Tableau[index].Notes;
                        

                        console.log(nom_eleve, prenom_eleve, note_eleve);
                        
                        style = style+"<li>"; // = style += "<li>";
                        
                         style +=  nom_eleve+"  "; // style = "<li> (lgn29) + nom_eleve + espace";
                         style += prenom_eleve +" "; // style = "<li> (lgn29) + prenom_eleve + espace";
                         style += " </li>"; // on ferme la balise </li>
                    } 
                    style += " </ul> "; // on ferme la balise </ul>
                    $(".ident_eleves").html("Promotion de cette année :"+"<br>"+ style); 
                    // on affiche à chaque tour de boucle le "msg + style"
                    // donc on affiche au tour index =0 de boucle : <ul>
                    // donc on affiche au tour index =1 de boucle : <ul><li>
                    // donc on affiche au tour index =2 de boucle : <ul><li>+ nom_eleve
                    // donc on affiche au tour index =3 de boucle : <ul><li> + nom_eleve + prenom_eleve
                    // donc on affiche au tour index =4 de boucle : <ul><li> + nom_eleve + prenom_eleve + </li>
                    //la Boucle est finie 0 à 4 = 5 (mon tableau a 5 objets), on sort de la boucle style devient : <ul><li> + nom_eleve + prenom_eleve + </li> + </ul>...
                    // On affiche avec .html dans la classe ident_eleves style dans son intégralité....
                    // Ici aucune condition j'affiche le nom & prénom des élèves ! 


                },
                error:function(xhr) {
                    console.log(xhr.status);
                }
            })
            $('.ident_eleves').slideToggle();
//return false;
        })
        $('.btn2').click( ()=>{ //affichage des notes
           
            $.ajax({
                url:'moyenne.json',
                dataType:"json",
                success:function(data) {
                    //console.log(data.Tableau);
                    
                   

                    var style1 = "<ul>"; // type de variable string
                    
                    var style2 = "<ul>"; // type de variable string

                 /////////////////////////////////   Boucle ForEach   //////////////////////////////////////////////////////////////////////

                    data.Tableau.forEach(element => { 
                    //ici on fait une boucle ForEach sur le tableau tout entier "element" est une variable qui prendra toute les valeurs du contenu du tableau "Tableau"

                        /*console.log(element.Nom, element.Prenom); // Pour vérifier le contenu
                        console.log(element.Notes); //on remarque que le ForEach créé un Tableau de Notes et donc pour le choper on fait:*/
                          
                     /////////////////////////////////   AFFECTATION de mes Variables   //////////////////////////////////////////////////////////////

                     var nbrenote=0;
                     var total_notes = 0;
                     var moy_eleve=0;
                     nom_eleve = element.Nom;
                     prenom_eleve = element.Prenom; 

                    /////////////////////////////////   Boucle ForEach   //////////////////////////////////////////////////////////////////////

                            element.Notes.forEach(elt => { //Une boucle ForEach pour n'avoir que les notes 1par1 de l'element.Notes créé par ma boucle
                                                            // précédente.. 
                            //console.log(elt); // on affiche chaque note
                            //console.log(element.Notes.length);
                            total_notes += parseFloat(elt);
                            
                            //total_notes+=total_notes;
                            nbrenote++;
                            
                            console.log(element.Notes);
                            //console.log('Total des notes est:', total_notes);
                           
                        });
                        moy_eleve = total_notes/nbrenote;
                        console.log(element.Nom, element.Prenom);
                        console.log('Total des notes est:', total_notes);
                        console.log('Nbre de note est:', nbrenote);
                        console.log('Moyenne élève :', moy_eleve.toFixed(2));
                         if (moy_eleve>12) {
                        style1 = style1+"<li>"; // = style += "<li>";
                        style1 += nom_eleve+" ";
                        style1 += " "+prenom_eleve;
                        style1 += ", avec une moyenne de : "+moy_eleve.toFixed(2)+"/ 20";
                        


                         //style += "  "+prenom_eleve;
                         style1 += " ";
                         $(".eleves_admis").html("Les élèves admis sont : "+style1);
                        } 
                        if (moy_eleve<12) {
                            
                            style2 = style2+"<li>"; // = style += "<li>";
                            
                            style2 += nom_eleve+" ";
                            style2 += " "+prenom_eleve;
                            style2 += " avec une moyenne de : "+moy_eleve.toFixed(2);
    
    
                             //style += "  "+prenom_eleve;
                             style2 += " </li>";
                             $("footer").html("<u>Le(s) élève(s) non admis:</u>"+style2);
                            }
                        
              //      } 
                    //style += " </ul> ";

                    });

                    //console.log('le type de variable est: ',typeof style);

                    //.Tableau pour voir la variable Tableau de mon fichier moyenne.json
                  /*  for (let index = 0 ; index < data.Tableau.length; index++) {
                        //console.log('ok');

                        nom_eleve = data.Tableau[index].Nom;
                        prenom_eleve = data.Tableau[index].Prenom;

                       // console.log(data.Tableau[index].Notes);


                        for (let j = 0; j <= data.Tableau[index].Notes.length; j++) {
                            console.log("aaaaaaaaaaaaaaaa*************************");
                            console.log(data.Tableau[j].Notes);
                            console.log("aaaaaaaaaaaaaaaa");
                            
                        }*/


                       // console.log(data.Tableau[index].Notes);
                       /* for (let j = 0; j < ; j++) {
                            console.log('OK',data.Tableau[index].Notes);
                            /*notes_eleve = (data.Tableau[j].Notes);
                            var moy_eleve= notes_eleve/data.Tableau[j].length;
                            console.log(notes_eleve);*
                        }*/
                        
                        
                       // let remark_eleve = data.Tableau[index].Remarques;
                        

                        /*if (note_eleve>12) {
                        style1 = style1+"<li>"; // = style += "<li>";
                        style1 += nom_eleve+" ";
                        style1 += " "+prenom_eleve;
                        style1 += " avec une moyenne de : "+note_eleve;
                        


                         //style += "  "+prenom_eleve;
                         style1 += " ";
                         $(".eleves_admis").html("Les élèves admis sont : "+style1);
                        } 
                        if (note_eleve<12) {
                            
                            style2 = style2+"<li>"; // = style += "<li>";
                            
                            style2 += nom_eleve+" ";
                            style2 += " "+prenom_eleve;
                            style2 += " avec une moyenne de : "+note_eleve;
    
    
                             //style += "  "+prenom_eleve;
                             style2 += " </li>";
                             $("footer").html("<u>Le(s) élève(s) non admis:</u>"+style2);
                            }
                     */   
              //      } 
                    //style += " </ul> ";
                    
                        
                },
                error:function(xhr) {
                    console.log(xhr.status);
                    if(xhr.status==404){
                        $('.sub_container1').html("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcbF1DvH-nV8OU8AzOGp5meVFnaBQePlRzQ&usqp=CAU' alt=''>")
                    }
                }
            })
            
            $('.eleves_admis').slideToggle();
            $('footer').slideToggle();

//return false;
        })
});