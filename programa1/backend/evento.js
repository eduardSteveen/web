export class evento{

    constructor(artista,aforo,costo){
        this.artista=artista;
        this.aforo=aforo;
        this.costo=costo
    }

    iniciarEvento(asistentes){
        if(this.aforo<asistentes){
            console.log("evento con sobre cupo")
        }else{
            let ganacia=this.costo*asistentes;
            console.log(ganacia)
        }
    }
}
