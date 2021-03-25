class Painting {
    constructor(title, painter, year, era, image) {
        this.title = title;
        this.painter = painter;
        this.year = year;
        this.era = era;
        this.image = image; 
    }

    getImage(){
        //if(location.host == "127.0.0.1:5500") return "../images/"+this.image;
        //else 
        return "https://raw.githubusercontent.com/lindavilla/smArt/MVP/images/"+this.image;

    }

    getEra(){
        return this.era;
    }

    isEra(era){
        if(this.era == era) return true;
        else return false;
    }

    getTitle(){
        return this.title;
    }
}
