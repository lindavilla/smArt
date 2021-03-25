class Painting {
    constructor(title, painter, year, era, image) {
        this.title = title;
        this.painter = painter;
        this.year = year;
        this.era = era;
        this.image = image; 
    }

    getImage(){
        return "https://raw.githubusercontent.com/lindavilla/smArt/MVP/images/"+this.image;
        //return "../images/"+this.image;
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
