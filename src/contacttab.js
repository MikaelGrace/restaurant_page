export function ContactPage() {
    const divContent = document.querySelector("#content");
    const introDiv = document.createElement("div");

    const contactHead = document.createElement("h1");
    contactHead.textContent = "Contact Us";

    const contactSection = document.createElement("div");
    const contactForm = document.createElement("form");
    contactForm.setAttribute('name', 'contactForm');

    const firstnameLabel = document.createElement("label");
    firstnameLabel.textContent = "First Name";
    firstnameLabel.setAttribute('for', 'firstName');
    const lastnameLabel = document.createElement("label");
    lastnameLabel.textContent = "Last Name";
    lastnameLabel.setAttribute('for', 'lastName')
    const countryLabel = document.createElement("label");
    countryLabel.textContent = "Country";
    countryLabel.setAttribute('for', 'selectCountry');
    const subjectLabel = document.createElement("label");
    subjectLabel.textContent = "Message";
    subjectLabel.setAttribute('for', 'subject');

    //First Name input
    const firstnameInput = document.createElement("input");
    firstnameInput.setAttribute('type', 'text');
    firstnameInput.setAttribute('name', 'firstName');
    firstnameInput.setAttribute('id', 'firstName');
    firstnameInput.setAttribute('placeholder', 'Enter your first name');

    //Last Name input
    const lastnameInput = document.createElement("input");
    lastnameInput.setAttribute('type', 'text');
    lastnameInput.setAttribute('name', 'lastName');
    lastnameInput.setAttribute('id', 'lastName');
    lastnameInput.setAttribute('placeholder', 'Enter your last name');


    //Country selection
    const countrySelect = document.createElement("select");
    countrySelect.setAttribute('name', 'selectCountry');
    countrySelect.setAttribute('id', 'selectCountry');
    const optionOne = document.createElement("option");
    optionOne.value = "russia";
    optionOne.textContent = "Russia";
    const optionTwo = document.createElement("option");
    optionTwo.value = "usa";
    optionTwo.textContent = "USA";
    const optionThree = document.createElement("option");
    optionThree.value = "china";
    optionThree.textContent = "China";

    //Textarea
    const textArea = document.createElement("textarea");
    textArea.setAttribute('name', 'subject');
    textArea.setAttribute('id', 'subject');
    textArea.setAttribute('placeholder', 'Write something...');

    // Submit button
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');



    introDiv.setAttribute("class", "intro");
    introDiv.textContent = "Welcome to the home of savory dishes that make you feel like a kid again...";

    //CSS Styling of the form

    contactSection.style.borderRadius = "5px";
    contactSection.style.backgroundColor = "#f2f2f2";
    contactSection.style.padding = "20px";


    firstnameInput.style.width = "100%";
    firstnameInput.style.padding = "12px 20px";
    firstnameInput.style.margin = "8px 0";
    firstnameInput.style.display = "inline-block";
    firstnameInput.style.border = "1px solid #ccc";
    firstnameInput.style.borderRadius = "4px";
    firstnameInput.style.boxSizing = "border-box";


    lastnameInput.style.width = "100%";
    lastnameInput.style.padding = "12px 20px";
    lastnameInput.style.margin = "8px 0";
    lastnameInput.style.display = "inline-block";
    lastnameInput.style.border = "1px solid #ccc";
    lastnameInput.style.borderRadius = "4px";
    lastnameInput.style.boxSizing = "border-box";

    countrySelect.style.width = "100%";
    countrySelect.style.padding = "12px 20px";
    countrySelect.style.margin = "8px 0";
    countrySelect.style.display = "inline-block";
    countrySelect.style.border = "1px solid #ccc";
    countrySelect.style.borderRadius = "4px";
    countrySelect.style.boxSizing = "border-box";


    textArea.style.width = "100%";
    textArea.style.padding = "12px 20px";
    textArea.style.margin = "8px 0";
    textArea.style.display = "inline-block";
    textArea.style.border = "1px solid #ccc";
    textArea.style.borderRadius = "4px";
    textArea.style.boxSizing = "border-box";


    submitButton.style.width = "100%";
    submitButton.style.backgroundColor = "#00a3e0";
    submitButton.style.color = "white";
    submitButton.style.padding = "14px 20px";
    submitButton.style.margin = "8px 0";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "4px";
    submitButton.style.cursor = "pointer";

    // Hover effect for button
    submitButton.addEventListener("mouseover", () => {
    submitButton.style.backgroundColor = "#2D68C4";
    });
    submitButton.addEventListener("mouseout", () => {
    submitButton.style.backgroundColor = "#00a3e0";
    });


    

    countrySelect.appendChild(optionOne);
    countrySelect.appendChild(optionTwo);
    countrySelect.appendChild(optionThree);

    contactForm.appendChild(firstnameLabel);
    contactForm.appendChild(firstnameInput);
    contactForm.appendChild(lastnameLabel);
    contactForm.appendChild(lastnameInput);
    contactForm.appendChild(countryLabel);
    contactForm.appendChild(countrySelect);
    contactForm.appendChild(subjectLabel);
    contactForm.appendChild(textArea);
    contactForm.appendChild(submitButton)

    contactSection.appendChild(contactForm)



    divContent.appendChild(introDiv);
    divContent.appendChild(contactHead);
    divContent.appendChild(contactSection);


}