import { PageTemplate } from "../lib/PageTemplate.js";

class Page404 extends PageTemplate {
    constructor(time) {
        super(time);
        this.pageTitle = '404';
        this.page = '404';
    }

    main() {
        return `<main>404 PAGE CONTENT</main>`;
    }
}

export { Page404 };