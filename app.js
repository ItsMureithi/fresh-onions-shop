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






