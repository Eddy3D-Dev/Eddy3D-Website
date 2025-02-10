---
hide:
  - navigation
  - toc
---

 <!-- Additional styles for landing page -->
  <style>
    /* Application header should be static for the landing page */
    .md-header {
      position: initial;
    }
    /* Hide navigation */
    @media screen and (min-width: 76.25em) {
      .md-sidebar--primary {
        display: none;
      }
    }
      .md-content__button {
    display: none;
  }
</style>


<!-- 
    This is a working contact form. To receive email, 
    Replace YOUR_ACCESS_KEY_HERE with your actual Access Key.

    Create Access Key here 👉 https://web3forms.com/
 -->

<style>
.contact-section {
  width: 100%;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  /*padding: 3rem 1rem; */
}

.contact-intro > * + * {
  margin-top: 1rem;
}

.contact-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
}

.contact-description {
  color: rgb(107 114 128);
}

.form-group-container {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.form-input::placeholder,
.form-textarea:focus-visible {
  color: #6b7280;
}

.form-input:focus-visible,
.form-textarea:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.form-textarea {
  min-height: 120px;
}

.form-submit {
  width: 100%;
  margin-top: 1.2rem;
  background-color: #3124ca;
  color: #fff;
  padding: 13px 5px;
  border-radius: 0.375rem;
}

</style>


Fill out the form below and we'll get back to you as soon as possible.
 


<section class="contact-section">

  <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">
  

    <input type="hidden" name="access_key" value="a5322283-e1f8-41cf-9f2b-45ce8feab64f" />
    <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
    <input type="hidden" name="from_name" value="My Website" />
    <!-- More customization options available in the docs: https://docs.web3forms.com -->

    <div class="form-group-container">
      <div class="form-group">
        <label for="name" class="form-label">Your Name</label>
        <input id="name" name="name" class="form-input" placeholder="Your name" type="text" />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" class="form-input" placeholder="Your email" type="email" />
      </div>
      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-textarea" id="message" name="message" placeholder="Your message"></textarea>
      </div>
    </div>
    <br>

    <! -- Step 1: Add this line -->
    <div class="h-captcha" data-captcha="true"></div>
    <button class="form-submit" type="submit">Send Message</button>
  </form>

</section>


<script src="https://web3forms.com/client/script.js" async defer></script>