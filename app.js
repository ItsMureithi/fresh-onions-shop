    //.btn adding javascript
    
    const btns = document.querySelectorAll(".btn");

    //loop through each button and add the event listener
    btns.forEach(function(btn) {

    btn.addEventListener("click", function(e){
        e.preventDefault();
       
        btn.textContent ="...loading";
        btn.style.background ="red";
        btn.style.color ="#fff";
        btn.style.textTransform = "capitalize";

        
        //Add a  loading spinner inside the button
        const spinner = document.createElement('span');
        spinner.classList.add('spinner'); //Assigns the spinner class
        btn.appendChild(spinner);//Add spinner inside the button;
    });


});


//Tooltip on hover

const benefitItems = document.querySelectorAll('.benefit-item');

benefitItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = 'Click to learn more about this feature';
        item.appendChild(tooltip);
        item.style.color = "#fff";
        item.style.padding = "20px";
    });

    item.addEventListener('mouseleave', () => {
        const tooltip = item.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});


// JavaScript to dynamically create and style the footer
document.addEventListener("DOMContentLoaded", function() {
    // Footer container
    const footer = document.createElement('footer');
    footer.style.backgroundColor = "#333";
    footer.style.color = "#fff";
    footer.style.padding = "40px 20px"; // Increased padding for better spacing
    footer.style.textAlign = "center";
    footer.style.fontSize = "14px";
    footer.style.position = "relative";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    footer.style.display = "grid";
    footer.style.gridTemplateColumns = "repeat(4, 1fr)";
    footer.style.gridGap = "20px"; // Added gap between grid items
    footer.style.fontFamily = "Arial, sans-serif"; // Font family consistency

    // Add quick links
    const quickLinks = document.createElement('div');
    quickLinks.style.marginBottom = "20px"; // Margin between sections

    const linkLists = ["Home", "AboutUs", "Shop", "Contact", "Privacy Policy", "Terms & Conditions", "Copyright Notice", "Newsletter Signup", "Site Map"];

    linkLists.forEach(linkText => {
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = linkText;
        link.style.margin = "5px 15px";
        link.style.padding ="5px";
        link.style.gridTemplateColumns = "repeat(4, 1fr)";
        link.style.color = "#fff";
        link.style.textDecoration = "none";
        link.style.fontSize = "18px";  // Font size for links
        quickLinks.appendChild(link);
    });

    footer.appendChild(quickLinks);

    // Add social media icons
    const socialIcons = document.createElement('div');
    socialIcons.style.marginBottom = "20px"; // Margin between sections

    const socialMedia = [
        { icon: "🌐", link: "#" },
        { icon: "📱", link: "#" },
        { icon: "📧", link: "#" },
        { icon: "Hey", link: "#" }, // Fixed "Hey" icon
        { icon: "•", link: "#" } // Fixed "Dot" icon to something more appropriate
    ];

    socialMedia.forEach(media => {
        const socialIcon = document.createElement('a');
        socialIcon.href = media.link;
        socialIcon.textContent = media.icon;
        socialIcon.style.fontSize = "24px";
        socialIcon.style.margin = "0 10px";
        socialIcon.style.textDecoration = "none";
        socialIcon.style.color = "#fff";
        socialIcon.setAttribute('aria-label', media.icon);
        socialIcons.appendChild(socialIcon);
    });

    footer.appendChild(socialIcons);

    // Add copyright text
    const copyright = document.createElement('p');
    copyright.textContent = "© 2025 Fresh Onions Shop. All rights reserved.";
    copyright.style.fontSize = "12px";
    footer.appendChild(copyright);

    // Attach footer to the body of the website
    document.getElementById('footer-container').appendChild(footer);
});
