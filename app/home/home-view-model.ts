import { Observable } from "tns-core-modules/data/observable";
import { Item } from "./shared/item";

export class HomeViewModel extends Observable {
    items: Array<Item>;

    constructor() {
        super();

        this.items = new Array<Item>(
            {
                name: "Provo",
                description: "Description for Item 1"
            },
            {
                name: "Orem Central",
                description: "Description for Item 2"
            },
            {
                name: "American Fork",
                description: "Description for Item 3"
            },
            {
                name: "Lehi",
                description: "Description for Item 4"
            },
            {
                name: "Draper",
                description: "Description for Item 5"
            },
            {
                name: "South Jordan",
                description: "Description for Item 6"
            },
            {
                name: "Murray",
                description: "Description for Item 7"
            },
            {
                name: "Salt Lake",
                description: "Description for Item 8"
            },
            {
                name: "North Temple",
                description: "Description for Item 9"
            },
            {
                name: "Woods Cross",
                description: "Description for Item 10"
            }
        );
    }
}
