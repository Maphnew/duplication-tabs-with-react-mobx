import { makeAutoObservable } from "mobx";

export default class TabStore {
    id;
    content;
    counter = 0;
    constructor(id="initialId", content) {
        this.id = id;
        this.content = content;
        makeAutoObservable(this);
    }
    setId(id) {
        this.id = id;
    }
    setContent(content) {
        this.content = content;
    }
    increment() {
        this.counter += 1;
    }
}