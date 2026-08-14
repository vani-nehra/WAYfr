const destinations = {
mountains: [
{
name: "Manali",
state: "Himachal Pradesh",
image: "Images/Manali.jpg",
rating: 4.8
},
{
name: "Shimla",
state: "Himachal Pradesh",
image: "Images/Shimla.webp",
rating: 4.7
},
{
name: "Leh-Ladakh",
state: "Jammu & Kashmir",
image: "Images/Ladakh.jfif",
rating: 4.9
},
{
name: "Auli",
state: "Uttarakhand",
image: "Images/Auli.jpg",
rating: 4.7
}
],


beaches: [
    {
        name: "Baga Beach",
        state: "Goa",
        image: "Images/BagaBeach.jpg",
        rating: 4.6
    },
    {
        name: "Kovalam Beach",
        state: "Kerala",
        image: "Images/Kovalam-Beach.jpg",
        rating: 4.3
    },
    {
        name: "Marina Beach",
        state: "Tamil Nadu",
        image: "Images/MArina.jpg",
        rating: 4.4
    },
    {
        name: "Alibaug",
        state: "Maharashtra",
        image: "Images/Nagaon-Beach-Alibaug.jpg",
        rating: 3.5
    }
],

deserts: [
    {
        name: "Thar Desert",
        state: "Rajasthan",
        image: "Images/Thar.jpg",
        rating: 3.6
    },
    {
        name: "Rann of Kutch",
        state: "Gujarat",
        image: "Images/kutch.jpg",
        rating: 2.9
    },
    {
        name: "Bikaner",
        state: "Rajasthan",
        image: "Images/Bikaner.jpg",
        rating: 2.2
    },
    {
        name: "Jaisalmer",
        state: "Rajasthan",
        image: "Images/Jaisalmer.jpg",
        rating: 4.1
    }
],

nationalParks: [
    {
        name: "Jim Corbett National Park",
        state: "Uttarakhand",
        image: "Images/jim-corbett.jpg",
        rating: 3.5
    },
    {
        name: "Sundarbans National Park",
        state: "West Bengal",
        image: "Images/Sundarbans.jpg",
        rating: 3.7
    },
    {
        name: "Bandipur National Park",
        state: "Karnataka",
        image: "Images/bandipur-forest.jpg",
        rating: 2.6
    }
],

lakes: [
    {
        name: "Dal Lake",
        state: "Jammu & Kashmir",
        image: "Images/Dal-lake.jpg",
        rating: 4.4
    },
    {
        name: "Naini Lake",
        state: "Uttarakhand",
        image: "Images/Naini-lake.jpg",
        rating: 4.7
    },
    {
        name: "Chilika Lake",
        state: "Odisha",
        image: "Images/Chilika-lake.jpg",
        rating: 3.1
    },
    {
        name: "Pangong Lake",
        state: "Ladakh",
        image: "Images/Pangong.jpg",
        rating: 4.5
    }
]


};


const cards = document.querySelectorAll(".card");
const destinationContainer = document.getElementById("destination-container");

cards.forEach((card) => {

card.addEventListener("click", () => {

    const category = card.dataset.category;

    console.log("Selected Category:", category);

    displayDestinations(category);
});

});

function displayDestinations(category) {


destinationContainer.innerHTML = "";

const places = destinations[category];

if (!places) {
    destinationContainer.innerHTML = "<p>Destinations not found.</p>";
    return;
}

places.forEach((place) => {

    destinationContainer.innerHTML += `

        <div class="destination-card"
             onclick="selectDestination(this, '${category}', '${place.name}')">

            <img src="${place.image}" alt="${place.name}">

            <h4>${place.name}</h4>

            <p>${place.state}</p>

            <p>⭐ ${place.rating}</p>

        </div>

    `;
});

}



const plannerForm = document.getElementById("plannerForm");
const plannerResult = document.getElementById("plannerResult");

if (plannerForm) {


plannerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const travelStyle =
        document.getElementById("travelStyle").value;

    const budget =
        document.getElementById("budget").value;

    const days =
        document.getElementById("days").value;

    const category =
        document.getElementById("category").value;

    const destination =
        document.getElementById("destination").value;


    if (!destination) {

        plannerResult.innerHTML = `
            <p>Please select a destination first.</p>
        `;

        return;
 }

plannerResult.innerHTML = `
    <div class="recommendation-card">

        <h2>🌍 Your Perfect Trip</h2>

        <h3>${destination}</h3>

        <p>
            <strong>Trip Type:</strong>
            ${travelStyle}
        </p>

        <p>
            <strong>Budget:</strong>
            ${budget}
        </p>

        <p>
            <strong>Duration:</strong>
            ${days} days
        </p>

        <p>
            <strong>Category:</strong>
            ${category}
        </p>

        <p>
            ✅ Your personalized travel plan has been generated successfully!
        </p>

        <p>
            Safe travels! ✈️🌍
        </p>

    </div>
`;
});

}

function selectDestination(card, category, destination) {


document.querySelectorAll(".destination-card").forEach((card) => {
    card.classList.remove("selected");
});

card.classList.add("selected");


const categoryNames = {

    mountains: "Mountains",
    beaches: "Beaches",
    deserts: "Deserts",
    lakes: "Lakes",
    nationalParks: "National Parks"

};


const categoryInput = document.getElementById("category");
const destinationInput = document.getElementById("destination");


if (categoryInput) {
    categoryInput.value = categoryNames[category];
}

if (destinationInput) {
    destinationInput.value = destination;
}


const plannerSection =
    document.querySelector(".planner-section");

if (plannerSection) {

    plannerSection.scrollIntoView({
        behavior: "smooth"
    });

}


}



const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchDestination() {


if (!searchInput) return;


const keyword =
    searchInput.value.trim().toLowerCase();


if (!keyword) {

    alert("Please enter a destination.");

    return;
}


const categories = [
    "mountains",
    "beaches",
    "deserts",
    "nationalParks",
    "lakes"
];


let found = false;


for (const category of categories) {

    const places = destinations[category];


    const place = places.find((p) =>
        p.name.toLowerCase().includes(keyword)
    );


    if (place) {

        displayDestinations(category);


        setTimeout(() => {

            const destinationCards =
                document.querySelectorAll(".destination-card");


            destinationCards.forEach((card) => {

                const name =
                    card.querySelector("h4")
                        .textContent
                        .toLowerCase();


                if (name === place.name.toLowerCase()) {

                    card.classList.add("selected");


                    selectDestination(
                        card,
                        category,
                        place.name
                    );


                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            });

        }, 100);


        found = true;

        break;
    }

}


if (!found) {

    alert("❌ Destination not found.");

}


}


if (searchBtn) {


searchBtn.addEventListener("click", searchDestination);


}


if (searchInput) {


searchInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        searchDestination();

    }

});


}
const themeBtn = document.querySelector(".theme-btn");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});