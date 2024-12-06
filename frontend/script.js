// Mock data
const mockData = [
    { id: 1, url: "https://www.google.com", description: "Search Engine", frequency: 1000, payment: 1500.0 },
    { id: 2, url: "https://www.facebook.com", description: "Social Media Platform", frequency: 900, payment: 1200.0 },
    { id: 3, url: "https://www.wikipedia.org", description: "Online Encyclopedia", frequency: 800, payment: 600.0 },
    { id: 4, url: "https://www.amazon.com", description: "E-Commerce Website", frequency: 750, payment: 1700.0 },
    { id: 5, url: "https://www.netflix.com", description: "Streaming Platform", frequency: 700, payment: 1300.0 },
    { id: 6, url: "https://www.twitter.com", description: "Microblogging Platform", frequency: 650, payment: 1100.0 },
    { id: 7, url: "https://www.linkedin.com", description: "Professional Networking", frequency: 600, payment: 1000.0 },
    { id: 8, url: "https://www.github.com", description: "Code Repository Hosting", frequency: 550, payment: 800.0 },
    { id: 9, url: "https://www.stackoverflow.com", description: "Programming Q&A Platform", frequency: 500, payment: 700.0 },
    { id: 10, url: "https://www.medium.com", description: "Online Publishing Platform", frequency: 450, payment: 600.0 },
    { id: 11, url: "https://www.apple.com", description: "Technology Company", frequency: 800, payment: 1600.0 },
    { id: 12, url: "https://www.microsoft.com", description: "Software and Technology", frequency: 900, payment: 1800.0 },
    { id: 13, url: "https://www.youtube.com", description: "Video Sharing Platform", frequency: 1000, payment: 2000.0 },
    { id: 14, url: "https://www.instagram.com", description: "Photo Sharing Social Media", frequency: 950, payment: 1300.0 },
    { id: 15, url: "https://www.reddit.com", description: "Community Discussion Forum", frequency: 700, payment: 900.0 },
    { id: 16, url: "https://www.pinterest.com", description: "Visual Discovery Platform", frequency: 400, payment: 500.0 },
    { id: 17, url: "https://www.quora.com", description: "Question and Answer Forum", frequency: 350, payment: 450.0 },
    { id: 18, url: "https://www.bing.com", description: "Search Engine by Microsoft", frequency: 300, payment: 400.0 },
    { id: 19, url: "https://www.yahoo.com", description: "Search Engine and News", frequency: 500, payment: 700.0 },
    { id: 20, url: "https://www.weather.com", description: "Weather Updates and Forecast", frequency: 300, payment: 400.0 },
    { id: 21, url: "https://www.cnn.com", description: "News and Media", frequency: 800, payment: 1000.0 },
    { id: 22, url: "https://www.bbc.com", description: "British Broadcasting Corporation", frequency: 750, payment: 900.0 },
    { id: 23, url: "https://www.nytimes.com", description: "The New York Times", frequency: 600, payment: 800.0 },
    { id: 24, url: "https://www.wsj.com", description: "The Wall Street Journal", frequency: 550, payment: 750.0 },
    { id: 25, url: "https://www.espn.com", description: "Sports News and Highlights", frequency: 700, payment: 850.0 },
    { id: 26, url: "https://www.foodnetwork.com", description: "Food Recipes and Blogs", frequency: 400, payment: 500.0 },
    { id: 27, url: "https://www.travelchannel.com", description: "Travel and Adventure", frequency: 350, payment: 450.0 },
    { id: 28, url: "https://www.tripadvisor.com", description: "Travel Reviews and Booking", frequency: 600, payment: 750.0 },
    { id: 29, url: "https://www.booking.com", description: "Hotel and Travel Booking", frequency: 800, payment: 950.0 },
    { id: 30, url: "https://www.airbnb.com", description: "Vacation Rentals and Homes", frequency: 750, payment: 850.0 },
    { id: 31, url: "https://www.expedia.com", description: "Travel Booking and Deals", frequency: 700, payment: 800.0 },
    { id: 32, url: "https://www.nationalgeographic.com", description: "Science and Exploration", frequency: 500, payment: 700.0 },
    { id: 33, url: "https://www.khanacademy.org", description: "Free Educational Resources", frequency: 450, payment: 550.0 },
    { id: 34, url: "https://www.coursera.org", description: "Online Courses and Learning", frequency: 600, payment: 700.0 },
    { id: 35, url: "https://www.udemy.com", description: "Online Learning Platform", frequency: 550, payment: 650.0 },
    { id: 36, url: "https://www.ted.com", description: "Ideas and Talks Worth Sharing", frequency: 500, payment: 600.0 },
    { id: 37, url: "https://www.nasa.gov", description: "Space and Science Exploration", frequency: 700, payment: 850.0 },
    { id: 38, url: "https://www.who.int", description: "World Health Organization", frequency: 800, payment: 900.0 },
    { id: 39, url: "https://www.un.org", description: "United Nations", frequency: 750, payment: 850.0 },
    { id: 40, url: "https://www.imdb.com", description: "Movies and Entertainment Database", frequency: 900, payment: 1100.0 },
    { id: 41, url: "https://www.spotify.com", description: "Music Streaming Service", frequency: 950, payment: 1300.0 },
    { id: 42, url: "https://www.twitch.tv", description: "Live Streaming Platform", frequency: 800, payment: 1000.0 },
    { id: 43, url: "https://www.soundcloud.com", description: "Audio Sharing Platform", frequency: 700, payment: 900.0 },
    { id: 44, url: "https://www.etsy.com", description: "Marketplace for Handmade Goods", frequency: 650, payment: 800.0 },
    { id: 45, url: "https://www.paypal.com", description: "Online Payment System", frequency: 1000, payment: 1400.0 },
    { id: 46, url: "https://www.adobe.com", description: "Creative Software and Tools", frequency: 850, payment: 1200.0 },
    { id: 47, url: "https://www.dropbox.com", description: "File Storage and Sharing", frequency: 700, payment: 950.0 },
    { id: 48, url: "https://www.zoom.us", description: "Video Conferencing Platform", frequency: 900, payment: 1100.0 },
    { id: 49, url: "https://www.slack.com", description: "Business Communication", frequency: 800, payment: 1000.0 },
];

// Pagination variables
let currentPage = 0;
let pageSize = 5;

// Function to clean keywords
function cleanKeywords(keywords) {
    return keywords.map((kw) => kw.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase());
}

// Function to render results
function renderResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results

    results.forEach((result) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="${result.url}" target="_blank">${result.url}</a>
            <button onclick="deleteURL(${result.id})">Delete</button>
        `;
        resultsContainer.appendChild(li);
    });
}

// Function to delete a URL
function deleteURL(id) {
    const index = mockData.findIndex((data) => data.id === id);
    if (index !== -1) {
        // Remove the URL entry from mockData
        mockData.splice(index, 1);

        // Re-run the search to update results
        search();
    }
}

// Function to handle search logic
function search() {
    let keywordsInput = document.getElementById("keywords").value.trim();
    let keywords = keywordsInput.split(/\s+/);

    // Clean keywords to remove meaningless symbols
    keywords = cleanKeywords(keywords);

    const mode = document.getElementById("mode").value;
    const sort = document.getElementById("sort").value;
    pageSize = parseInt(document.getElementById("pageSize").value);

    // Filter results based on keywords and mode
    let results = mockData.filter((data) => {
        const descriptionLower = data.description.toLowerCase();
        if (mode === "OR") {
            return keywords.some((kw) => descriptionLower.includes(kw));
        } else if (mode === "AND") {
            return keywords.every((kw) => descriptionLower.includes(kw));
        } else if (mode === "NOT") {
            return keywords.every((kw) => !descriptionLower.includes(kw));
        }
        return true;
    });

    // Sort results
    if (sort === "alphabetical") {
        results.sort((a, b) => a.url.localeCompare(b.url));
    } else if (sort === "frequency") {
        results.sort((a, b) => b.frequency - a.frequency);
    } else if (sort === "payment") {
        results.sort((a, b) => b.payment - a.payment);
    }

    // Paginate results
    const fromIndex = currentPage * pageSize;
    const toIndex = Math.min(fromIndex + pageSize, results.length);
    const paginatedResults = results.slice(fromIndex, toIndex);

    // Render results and update pagination controls
    renderResults(paginatedResults);
    updatePaginationControls(results.length);
}

// Function to update pagination controls
function updatePaginationControls(resultCount) {
    document.getElementById("currentPage").innerText = `Page ${currentPage + 1}`;
    document.getElementById("prevPage").disabled = currentPage === 0;
    document.getElementById("nextPage").disabled = resultCount <= (currentPage + 1) * pageSize;
}

// Pagination navigation functions
function nextPage() {
    currentPage++;
    search();
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        search();
    }
}

// Initialize search results on page load
search();
