import { servicesProject } from "../data/servicesProjects.js";
import { servicesData } from "../data/servicesData.js";
import { servicesUser } from "../data/servicesUsers.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class Project extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Project';
        this.page = 'project';
        this.params = params;
    }

main() {

    

    let listHTML = '';
    for (const project of servicesProject) {
        listHTML += ` 
        <div>${project.name}</div>`
    }
    return `
    ${listHTML}
    `



}
}

export { Project };