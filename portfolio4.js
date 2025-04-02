document.addEventListener("DOMContentLoaded", () => {
    const searchInputBox = document.getElementById("searchinputbox");
    const searchBtn = document.getElementById("searchbtn");

    searchBtn.addEventListener("click", function () {
        const searchItem = searchInputBox.value.trim().toLowerCase();

        if (searchItem === "") {
            alert("Please enter a field you want to search.");
            return; // Stop further execution
        }

       

        // Create new `.next` div
        let nextDiv = document.querySelector(".next");
        if(!nextDiv){
            nextDiv=document.createElement("div");
            nextDiv.classList.add("next");
            document.body.appendChild(nextDiv);
        }
        nextDiv .innerHTML="";

    

        let nextDivitem = document.createElement("p");
        nextDivitem.style.color = "black";

        if (searchItem === "home") {
            nextDivitem.textContent = "Hello, I am Deblina! BCA student of Adamas University. I am passionate , hard working and a dedicated learner.Technology inspired me since my childhood. Apart from studiyng i have loved music and dancing.";

        } else if (searchItem === "skills") {
            nextDivitem.textContent = "Skills: I have leraned the basic skills of JavaScript, HTML, CSS, React, C,C++ etc.";
        } else if (searchItem === "projects") {
            nextDivitem.textContent = "Projects: This PORTFOLIO WEBSITE is my first ever professional project.";
        }
        else if(searchItem ==="educational qualification"){
             nextDivitem.textContent="I have completed my Secondary and Higher seconadary education from St.XAVIER'S School.I have achived 90% in both my Secondary and Higher secondary";
        }
         
        else {
            nextDivitem.textContent = "No results found.";
        }

        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("id", "introbtn");
        removeBtn.innerHTML = "REMOVE";
        removeBtn.addEventListener("click", function () {
            nextDiv.remove();
        });

        nextDiv.appendChild(nextDivitem);
        nextDiv.appendChild(removeBtn);
        nextDiv.scrollIntoView({ behavior: "smooth" });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simple alert for demo purposes. Replace with actual form submission logic
    alert(`Name: ${name} \nEmail: ${email} \nMessage: ${message}\n\nMessage sent!`);


    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});