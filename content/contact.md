---
title: "Contact"
date: 2025-11-17
draft: false
---

## Get in Touch

Have a question, suggestion, or just want to say hello? A few ways to reach me:

- **Email**: [dragos.cirjan@gmail.com](mailto:dragos.cirjan@gmail.com)
- **LinkedIn**: [linkedin.com/in/gridorian](https://www.linkedin.com/in/gridorian/)
- **GitHub**: use the form below — it opens a pre-filled issue in the site repository, which keeps the conversation public and trackable.

<form action="https://github.com/dragoscirjan/dragoscirjan.github.io/issues/new" method="get" id="contact-form" class="contact-form">
  <div class="form-group">
    <label for="issue-title">Subject *</label>
    <input type="text" id="issue-title" name="title" required placeholder="Brief description of your message" minlength="10" maxlength="100">
  </div>
  
  <div class="form-group">
    <label for="issue-body">Message *</label>
    <textarea id="issue-body" name="body" required placeholder="Your message here..." rows="8" minlength="20"></textarea>
  </div>
  
  <div class="form-group">
    <label for="issue-labels">Topic</label>
    <select id="issue-labels" name="labels">
      <option value="question">Question</option>
      <option value="feedback">Feedback</option>
      <option value="collaboration">Collaboration</option>
      <option value="bug">Bug Report</option>
      <option value="other">Other</option>
    </select>
  </div>
  
  <div class="form-group honeypot" style="display: none;">
    <label for="website">Website</label>
    <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
  </div>
  
  <button type="submit" class="submit-btn">Send Message</button>
  
  <p class="form-note">
    <small>* Required fields. Submitting this form will redirect you to GitHub where you can review and submit your message as an issue. You'll need a GitHub account to complete the submission.</small>
  </p>
</form>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
  // Check honeypot field (spam protection)
  const honeypot = document.getElementById('website');
  if (honeypot.value !== '') {
    e.preventDefault();
    alert('Spam detected. Form submission blocked.');
    return false;
  }
  
  // Format the issue body with metadata
  const bodyTextarea = document.getElementById('issue-body');
  const originalBody = bodyTextarea.value;
  const timestamp = new Date().toISOString();
  const userAgent = navigator.userAgent;
  
  // Add metadata to help identify legitimate submissions
  const formattedBody = `${originalBody}

---

**Metadata (for spam prevention)**
- Submitted: ${timestamp}
- User Agent: ${userAgent}
- Form Version: 1.0`;
  
  bodyTextarea.value = formattedBody;
});
</script>

---

### Privacy Note

Messages submitted through the form become public GitHub issues in the site repository. Please do not include sensitive personal information — for anything private, use the email address above.
