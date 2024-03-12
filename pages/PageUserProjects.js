import { servicesProject } from "../data/servicesProjects.js";
import { servicesData } from "../data/servicesData.js";
import { servicesUser } from "../data/servicesUsers.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class UserProject extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Project';
        this.page = 'project';
        this.params = params;
    }


main() {
    
    let serviceObj3 = null;

    for (const service of servicesData) {
        if (service.id === this.params.serviceId) {
            serviceObj3 = service;
            break;
        }
    }

    let serviceObj2 = null;

    for (const user of servicesUser) {
        if (user.id === this.params.username) {
            serviceObj2 = user;
            
            break;
        }
    }
    

    
     
    
    let serviceObj = null;
    let listHTML = '';
    for (const project of servicesProject) {
        if (project.id === this.params.projectId) {
            serviceObj = project;
            break;
        }
        listHTML += ` 
        <div class="list-group list-group-flush border-bottom scrollarea">
        <a href="${serviceObj3.href}${serviceObj2.href}" class="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
          <div class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">${project.name}</strong>
            <small>Wed</small>
          </div>
          <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
        </a>
      </div>
        `
    
}
return `
<div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 380px;">
    <a href="#" class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
      <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold">List group</span>
    </a>
   ${listHTML}
  </div>`
}
}

export { UserProject };