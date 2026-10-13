# Modern Dark Portfolio Template

A responsive multi-page portfolio starter built with HTML, CSS, Bootstrap 5, and a small amount of JavaScript.

## Pages
- `index.html` — Home / landing page
- `about.html` — About and approach
- `services.html` — Services
- `portfolio.html` — Project gallery
- `contact.html` — Contact details and form

## Open in VS Code
1. Extract the ZIP file.
2. Open the extracted `modern-portfolio-template` folder in VS Code.
3. Install the **Live Server** extension if needed.
4. Right-click `index.html` and choose **Open with Live Server**.

Use Live Server or another web server because the shared navigation and footer are inserted with JavaScript.

## Replace images
- Put your personal portrait in `assets/images/profile.jpg`.
- In `index.html`, replace the sample portrait URL with `assets/images/profile.jpg`.
- Replace the image URLs in the project cards and `about.html` with your own images, for example `assets/images/project-one.jpg`.
- Keep the image files inside the `assets/images/` folder and use relative paths.

## Personalize the content
Search the files for `Alex Morgan`, `alexmorgan`, `hello@example.com`, sample project names, and placeholder links. Replace them with your own name, bio, contact details, GitHub links, LinkedIn profile, project descriptions, and live demo URLs.

## Contact form note
The contact form has browser validation and a demo success message. It does **not** send or store messages. To receive messages, connect it to a backend or a form service and update the submit handler in `script.js`.

## External dependencies
Bootstrap and Google Fonts load from CDNs, so an internet connection is needed for those resources. The sample photography uses external Unsplash image URLs until you replace them with your own files.
