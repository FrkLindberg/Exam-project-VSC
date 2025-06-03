Creator: 
  M.Lindberg, anno 2025



About the project: 
  This is a exam-project in the subject "Fronend Essentials". The project description is as following: "A sustainable food delivery service in Norway connects customers with   fresh products from local farms. Customers can browse and order groceries online, with deliveries made directly to their homes from partner farms. The service emphasises sustainability and supporting local agriculture. Now, the company wants to enhance their online presence with a new webshop that highlights their commitment to   sustainability while making the ordering process easy and intuitive for customers."



Setup instructions:
  1. If you don't have it, install Visual Studio Code (or something similar - whatever you prefere)
  2. Download/Clone the full repository
  3. Install NPM packages

For the Chatbot to work:
  1. Get an API Key
  2. In the chatbot-script.js, insert your API key to -> const apiKey = "YOUR_OPENAI_API_KEY";
  3. Change git remote url to avoid accidental pushes to base project
        - git remote set-url origin github_username/repo_name
        - git remote -v # confirm the changes

For the sidebar-menu link "checkout" to work:
  1. Code the page "checout.html"
        - Remember to put in the code for the header with the sidebar
        - Remember to put in the footer (if it sounds like a good idea - if not, fuck it)
  2. Change the html code for the link on all the pages -> PUT IN TO THE NAV-ANCHOR:  id="checkoutNav" href="checkout.html">CHECKOUT



Overview of the pages features:
- HTML
- CSS
- JavaScript

  Index-page: 
    - Hero-section
    - Scortcut-section for shopping produce or asking questions
    - An overview of what the business can offer you
    - An overview of the most popular produce (scrollable sideways on mobile)

  Product-page:
    - An overview of all the produce (products) available at the moment, with prices.
    - A GoogleMmaps feature, showing the partnering farms.

  Similar on all pages:
    - Header with a burger-menu, the company logo and a shopping cart feature.
    - A sidebar that pops up when clicking the burger-menu-icon, with links to product-page, chat-page (chatbot) and checkout (page not made yet).
    - Footer with a subscription form.


 
Contributing:
- Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
- If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

  Fork the Project:
    - Create your Feature Branch (git checkout -b feature/AmazingFeature)
    - Commit your Changes (git commit -m 'Add some AmazingFeature')
    - Push to the Branch (git push origin feature/AmazingFeature)
    - Open a Pull Request



License:
- Distributed under the project_license. See LICENSE.txt for more information.

Contact:
- Project Link: https://github.com/FrkLindberg/Exam-project-VSC
