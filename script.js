```javascript
document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector("main");

    if (main) {
        const contactSection = document.createElement("section");

        contactSection.innerHTML = `
            <h2>Contact Us</h2>

            <p>Send us a message if you would like to learn more about Lesotho.</p>

            <form id="contactForm">
                <label for="name">Full Name:</label>
                <input type="text" id="name" required>

                <label for="email">Email Address:</label>
                <input type="email" id="email" required>

                <label for="message">Your Message:</label>
                <textarea id="message" rows="5" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            <p id="formMessage"></p>
        `;

        const bookingSection = document.createElement("section");

        bookingSection.innerHTML = `
            <h2>Plan Your Trip</h2>

            <form id="bookingForm">
                <label for="destination">Choose Destination:</label>
                <select id="destination" required>
                    <option value="">Select a destination</option>
                    <option value="Katse Dam">Katse Dam</option>
                    <option value="Mountain Adventures">Mountain Adventures</option>
                    <option value="Waterfalls">Waterfalls</option>
                </select>

                <label for="visitors">Number of Visitors:</label>
                <input type="number" id="visitors" min="1" value="1" required>

                <label for="days">Number of Days:</label>
                <input type="number" id="days" min="1" value="1" required>

                <button type="submit">Calculate Cost</button>
            </form>

            <p id="tripCost"></p>
        `;

        main.appendChild(contactSection);
        main.appendChild(bookingSection);
    }

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const formMessage = document.getElementById("formMessage");

            if (name === "" || email === "" || message === "") {
                formMessage.textContent = "Please fill in all the fields.";
                formMessage.style.color = "red";
                return;
            }

            formMessage.textContent =
                "Thank you, " + name + "! Your message has been received.";

            formMessage.style.color = "green";
            contactForm.reset();
        });
    }

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const destination = document.getElementById("destination").value;
            const visitors = Number(document.getElementById("visitors").value);
            const days = Number(document.getElementById("days").value);
            const tripCost = document.getElementById("tripCost");

            if (
                destination === "" ||
                !Number.isInteger(visitors) ||
                !Number.isInteger(days) ||
                visitors < 1 ||
                days < 1
            ) {
                tripCost.textContent = "Please enter valid trip details.";
                tripCost.style.color = "red";
                return;
            }

            const dailyCost = 500;
            const totalCost = visitors * days * dailyCost;

            tripCost.textContent =
                "Destination: " + destination +
                ". Estimated total cost: M" +
                totalCost.toLocaleString() +
                ". This is an example estimate.";

            tripCost.style.color = "green";
        });
    }

    const searchBox = document.getElementById("search");

    if (searchBox) {
        searchBox.addEventListener("input", function () {
            const searchText = searchBox.value.toLowerCase();
            const cards = document.querySelectorAll(".card");

            cards.forEach(function (card) {
                if (card.textContent.toLowerCase().includes(searchText)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

});
```