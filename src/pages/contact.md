---
title: Contact
description: If you want to get in touch- you can do it from this page!
layout: "../layouts/MainLayout.astro"

---
# Contact

Hey! If you want to get in touch- you can do it from this page!

## Say Hello!

There are a few ways you can reach out to me...

### Social Accounts

If you want to see other places I'm active on the internet here are my social links: 

* [Twitter](https://twitter.com/MykalMachon)
* [GitHub](https://GitHub.com/MykalMachon)
* [Linkedin](https://www.linkedin.com/in/mykalmachon/)

### Form Below 👇🏻

Use the form below to reach out directly to my email- I'll try and get back to you ASAP!

<form
class="form__contact"
name="Contact Form"
method="POST"
data-netlify="true">
<div class="form-control">
<label for="name">What's your name?</label>
<input type="text" name="name" id="name" required />
</div>
<div class="form-control">
<label for="email">What's your email address?</label>
<input type="email" name="email" id="email" required />
</div>
<div class="form-control">
<label for="message">What do you want to talk about?</label>
<textarea name="message" id="message" cols={30} rows={6}></textarea>
</div>
<button class="btn" type="submit">Send Message</button>
</form>