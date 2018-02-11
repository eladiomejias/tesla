/* User Class Globally */
export class User {

    name: string;
    second_name: string;
    profile_img: string;
    card_img: string;
    title: string;
    description: string;
    age: string;
    gender: male;

    constructor(name: string, second_name: string, profile_img: string, card_img: string, title: string, description: string, age: string, gender: string) {
        this.name = name;
        this.second_name = second_name;
        this.profile_img = profile_img;
        this.card_img = card_img;
        this.title = title;
        this.description = description;
        this.age = age;
        this.gender = gender;
    }
}
