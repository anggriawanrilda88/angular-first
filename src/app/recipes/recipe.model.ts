export class Recipe {
    public name: string;
    public desctription: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.desctription = desc;
        this.imagePath = imagePath;
    }
}
