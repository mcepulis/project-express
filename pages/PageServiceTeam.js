import { servicesData } from "../data/servicesData.js";
import { servicesUser } from "../data/servicesUsers.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class ServiceTeam extends PageTemplate {
    constructor(params) {
        super();
        this.pageTitle = 'Team';
        this.page = 'team';
        this.params = params;
    }

    main() {
        let serviceObj = null;

        for (const service of servicesData) {
            if (service.id === this.params.serviceId) {
                serviceObj = service;
                break;
            }
        }
        let listHTML = '';
        for (const user of servicesUser) {
            listHTML += `
           
                <div class="row">
                    <div class="col-lg-3 col-sm-6 my-3 wow fadeInUp" style="width: 100%">
                        <div class="hover-top-in text-center">
                            <div class="overflow-hidden z-index-1 position-relative px-5"><img class="rounded-circle border border-5 border-white shadow" src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt=""></div>
                            <div class="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
            <h6 class="fw-700 dark-color mb-1">${user.name}</h6>
            <a href="${serviceObj.href}${user.href}" class="btn btn-primary my-2">More Info</a>
            </div>
            </div>
        </div>
    </div>
</section>`
        }
        return `
        <section id="team" class="section bg-gray-100">
        <div class="container">
            <div class="row section-heading justify-content-center text-center wow fadeInUp"">
                <div class="col-lg-8 col-xl-6">
                    <h3 class="h1 bg-primary-after after-50px pb-3 mb-3">Our Teams</h3>
                    <div class="lead">Mombo is a HTML5 template based on Sass and Bootstrap 5 with modern and creative multipurpose design you can use it as a startups.</div>
                </div>
            </div>
        ${listHTML}  
        `}
    }

    export { ServiceTeam };