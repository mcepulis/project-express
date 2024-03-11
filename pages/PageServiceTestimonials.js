import { PageTemplate } from '../lib/PageTemplate.js';

class PageServiceTestimonials extends PageTemplate {
    constructor() {
        super();
        this.pageTitle = 'Testimonials';
        this.page = 'testimonials';
    }

    main() {
        return `
        <div class="container-feedback">
        <h2>Feedback</h2>
        <div class="mb-4 small">
        Please provide your feedback in the form below
        </div>
        <form name="feedback_form" id="feedback_form" method="post">
        <label>How do you rate your overall experience?</label>
        <div class="mb-3 d-flex flex-row py-1">
          <div class="form-check mr-3">
          <input class="form-check-input" type="radio" name="rating" id="rating_bad" value="bad">
          <label class="form-check-label" for="rating_bad">
            Bad
          </label>
          </div>
          
          <div class="form-check mx-3">
          <input class="form-check-input" type="radio" name="rating" id="rating_good" value="good">
          <label class="form-check-label" for="rating_good">
            Good
          </label>
          </div>
          
          <div class="form-check mx-3">
          <input class="form-check-input"  type="radio" name="rating" id="rating_excellent" value="excellent">
          <label class="form-check-label" for="rating_excellent">
            Excellent!
          </label>
          </div>
        </div>
        <div class="mb-4">
          <label class="form-label"  for="feedback_comments">Comments:</label>
          <textarea class="form-control" required rows="6" name="comments" id="feedback_comments" ></textarea>
        </div>
        <div class="row">
          <div class="col">
            <label class="form-label" for="feedback_name">Your Name:</label>
            <input type="text" required name="name" class="form-control" id="feedback_name"/>
          </div>
          
          <div class="col mb-4">
            <label class="form-label" for="feedback_email">Email:</label>
            <input type="email" name="email" required class="form-control" id="feedback_email"/>
          </div>
        </div>
        <button type="submit" class="btn btn-success btn-lg" >Post</button>
        </form>
        </div>`;


}
}

export { PageServiceTestimonials };