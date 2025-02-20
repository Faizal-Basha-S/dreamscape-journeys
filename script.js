
// Destination Data
const destinations = [
    {
        id: "swiss-alps",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
        title: "Swiss Alps",
        location: "Switzerland",
        description: "Experience the majestic beauty of the Swiss Alps with breathtaking views and adventures.",
        duration: "7 days",
        groupSize: "2-12 people",
        activities: ["Hiking", "Skiing", "Mountain Climbing", "Photography"],
        highlights: [
            "Visit the iconic Matterhorn",
            "Experience Swiss chocolate making",
            "Stay in luxury mountain chalets",
            "Ride the Glacier Express"
        ]
    },
    {
        id: "tropical-paradise",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        title: "Tropical Paradise",
        location: "Maldives",
        description: "Escape to crystal clear waters and white sandy beaches in this tropical paradise.",
        duration: "5 days",
        groupSize: "2-8 people",
        activities: ["Snorkeling", "Diving", "Beach Yoga", "Island Hopping"],
        highlights: [
            "Stay in overwater villas",
            "Swim with manta rays",
            "Sunset dolphin cruise",
            "Private beach dinners"
        ]
    },
    {
        id: "mountain-retreat",
        image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed",
        title: "Mountain Retreat",
        location: "Canada",
        description: "Find peace and tranquility in our exclusive mountain retreats and lodges.",
        duration: "6 days",
        groupSize: "2-10 people",
        activities: ["Wildlife Watching", "Canoeing", "Nature Walks", "Photography"],
        highlights: [
            "Spot local wildlife",
            "Northern lights viewing",
            "Luxury lodge accommodation",
            "Guided nature tours"
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    initializeAnimations();
});

// Render Destination Cards
function renderDestinations() {
    const container = document.querySelector('.destinations-grid');
    container.innerHTML = destinations.map(destination => `
        <div class="destination-card" onclick="showDestinationDetails('${destination.id}')">
            <div class="destination-image">
                <img src="${destination.image}" alt="${destination.title}">
            </div>
            <div class="destination-content">
                <div class="destination-location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${destination.location}
                </div>
                <h3 class="destination-title">${destination.title}</h3>
                <p class="destination-description">${destination.description}</p>
                <button class="button button-primary">Explore Now</button>
            </div>
        </div>
    `).join('');
}

// Show Destination Details
function showDestinationDetails(id) {
    const destination = destinations.find(d => d.id === id);
    const modal = document.getElementById('destination-modal');
    
    modal.classList.add('active');
    modal.querySelector('.modal-content').innerHTML = `
        <div class="destination-details">
            <img src="${destination.image}" alt="${destination.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 0.5rem;">
            <h2>${destination.title}</h2>
            <p>${destination.description}</p>
            <div class="details-grid">
                <div>
                    <h3>Duration</h3>
                    <p>${destination.duration}</p>
                </div>
                <div>
                    <h3>Group Size</h3>
                    <p>${destination.groupSize}</p>
                </div>
            </div>
            <h3>Activities</h3>
            <div class="activities-grid">
                ${destination.activities.map(activity => `<div class="activity">${activity}</div>`).join('')}
            </div>
            <h3>Highlights</h3>
            <ul>
                ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
            </ul>
            <button onclick="closeModal()" class="button">Close</button>
        </div>
    `;
}

// Close Modal
function closeModal() {
    document.getElementById('destination-modal').classList.remove('active');
}

// Smooth Scroll to Destinations
function scrollToDestinations() {
    document.getElementById('featured-destinations').scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize Animations
function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.destination-card').forEach(card => {
        observer.observe(card);
    });
}

// Handle Newsletter Submit
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
    event.target.reset();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('destination-modal');
    if (event.target === modal) {
        closeModal();
    }
}
