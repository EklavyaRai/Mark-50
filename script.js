const cartoonData = {
    popular: [
        { title: "Doraemon", type: "Sci-Fi Comedy", channel: "Disney (Hungama TV)", thumbnail: "https://i.pinimg.com/736x/3b/7d/19/3b7d194a719a6248430ba4dd62c5f5a7.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/uVu-D2rC-Lg?autoplay=1", description: "Follow the adventures of a robotic cat named Doraemon who travels back in time from the 22nd century to aid a young boy named Nobita Nobi.", details: "Doraemon is a Japanese manga series written and illustrated by Fujiko F. Fujio. The series has also been adapted into a successful anime series and media franchise. The story revolves around a earless robotic cat named Doraemon, who travels back in time from the 22nd century to aid a boy named Nobita Nobi." },
        { title: "Tom and Jerry", type: "Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://i.pinimg.com/736x/30/4f/7e/304f7e6c2594371e06bdd5b20c30bf04.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/t0Q2otsqC4I?autoplay=1", description: "The iconic cat and mouse duo engage in endless comedic rivalries and slapstick battles.", details: "Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry." },
        { title: "Shinchan", type: "Slice of Life / Comedy", channel: "Disney (Hungama TV)", thumbnail: "https://i.pinimg.com/736x/0a/5f/07/0a5f073bd75fece31a6e68442f505fc5.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/5dlrOosqSb8?autoplay=1", description: "The humorous antics of five-year-old Shinnosuke 'Shin-chan' Nohara and his parents, baby sister, dog, and friends.", details: "Crayon Shin-chan is a Japanese manga series written and illustrated by Yoshito Usui. It follows the adventures of the five-year-old Shinnosuke 'Shin' Nohara and his parents, baby sister, dog, neighbours, and best friends and is set in Kasukabe, Saitama Prefecture." },
        { title: "Ninja Hattori", type: "Comedy / Martial Arts", channel: "Nickelodeon / Disney", thumbnail: "https://i.pinimg.com/736x/d5/6a/e3/d56ae300c79ed1a355529ce5c540782a.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/1RK1b8zGXPI?autoplay=1", description: "Kanzo Hattori, a ninja, becomes good friends with Kenichi and helps him with various problems.", details: "Ninja Hattori-kun is a Japanese manga series written and illustrated by duo Fujiko Fujio. It follows Kanzo Hattori, a little ninja who moves into the Mitsuba household along with his brother Shinzo and his ninja dog Shishimaru, helping Kenichi Mitsuba in everyday life." },
        { title: "Ben 10 (Original)", type: "Sci-Fi / Action", channel: "Cartoon Network", thumbnail: "https://i.pinimg.com/1200x/38/c4/90/38c4907765c86a29a0c7813f8e4cd646.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/IoiVaeqwIR0?autoplay=1", description: "Ben Tennyson discovers an alien device called the Omnitrix that allows him to transform into ten different extraterrestrial creatures.", details: "Ben 10 is an American animated franchise created by Man of Action Studios and produced by Cartoon Network Studios. The franchise centers on a boy named Ben Tennyson who acquires an alien device, the Omnitrix, which allows him to transform into ten different alien creatures." },
        { title: "Pokémon", type: "Anime / Fantasy", channel: "Cartoon Network / Disney", thumbnail: "https://i.pinimg.com/736x/35/04/44/350444c2abb255ffaf7e254d463124fa.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/MdibbinoM_o?autoplay=1", description: "Ash Ketchum journeys across various regions to become a Pokémon Master alongside Pikachu.", details: "Pokémon is a Japanese anime television series, part of The Pokémon Company's Pokémon media franchise. It premiered on TV Tokyo in April 1997 and follows young trainer Ash Ketchum and his partner Pokémon Pikachu as they travel the world." }
    ],
    "cartoon-network": [
        { title: "Tom and Jerry", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/30/4f/7e/304f7e6c2594371e06bdd5b20c30bf04.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/t0Q2otsqC4I?autoplay=1", description: "The classic chase between Tom the cat and Jerry the mouse.", details: "Full history of Hanna-Barbera's legendary chase animation shorts and television series on Cartoon Network." },
        { title: "Ben 10 (Original)", type: "Sci-Fi / Action", era: "2000–2010 Golden Era", thumbnail: "https://i.pinimg.com/1200x/38/c4/90/38c4907765c86a29a0c7813f8e4cd646.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/IoiVaeqwIR0?autoplay=1", description: "Young Ben uses the Omnitrix to defend Earth from intergalactic threats.", details: "Comprehensive information about Ben Tennyson, Gwen, Grandpa Max, and the alien transformations." }
    ],
    nickelodeon: [
        { title: "SpongeBob SquarePants", type: "Surreal Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/15/28/31/1528315696535196b07d7bcde8c1eed4.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/07QPKPgBL5Y?autoplay=1", description: "The aquatic adventures of SpongeBob and his sea creature friends in Bikini Bottom.", details: "SpongeBob SquarePants is an American animated comedy television series created by marine science educator and animator Stephen Hillenburg for Nickelodeon." },
        { title: "Ninja Hattori", type: "Comedy / Martial Arts", era: "2000–2010 Golden Era", thumbnail: "https://i.pinimg.com/736x/d5/6a/e3/d56ae300c79ed1a355529ce5c540782a.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/1RK1b8zGXPI?autoplay=1", description: "Hattori the ninja brings ancient skills to modern town living.", details: "Detailed information about Ninja Hattori's techniques, friends, and enemies." }
    ],
    disney: [
        { title: "Doraemon", type: "Sci-Fi Comedy", era: "2000–2010 Era", thumbnail: "https://i.pinimg.com/736x/3b/7d/19/3b7d194a719a6248430ba4dd62c5f5a7.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/uVu-D2rC-Lg?autoplay=1", description: "Futuristic gadgets resolve daily childhood dilemmas in hilarious ways.", details: "Complete details on Doraemon's gadgets, pocket dimensions, and character backgrounds." },
        { title: "Phineas and Ferb", type: "Musical / Sci-Fi", era: "2000–2010 Era", thumbnail: "https://i.pinimg.com/1200x/31/8f/09/318f09c1431bf7ad9a758c0442a4f24c.jpg", videoUrl: "https://www.youtube-nocookie.com/embed/t-Q5PPMRCRE?autoplay=1", description: "Two stepbrothers conquer summer boredom with grand inventions while Perry the Platypus acts as a secret agent.", details: "Phineas and Ferb is an American animated musical comedy television series produced by Disney Television Animation." }
    ]
};

// Open cartoon interface in a NEW TAB
function openCartoonTab(categoryKey, title) {
    const url = `show.html?cat=${encodeURIComponent(categoryKey)}&title=${encodeURIComponent(title)}`;
    window.open(url, '_blank');
}

// Render homepage sections
function renderSection(categoryKey, containerId, filterText = "") {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = "";
    const list = cartoonData[categoryKey] || [];
    const filtered = list.filter(item => 
        item.title.toLowerCase().includes(filterText.toLowerCase()) || 
        item.type.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-results">No cartoons found matching your search.</p>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openCartoonTab(categoryKey, item.title);

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                <div class="play-overlay"><span>▶</span></div>
            </div>
            <div class="card-info">
                <h3>${item.title}</h3>
                <p class="genre">${item.type}</p>
                <span class="badge">${item.era || item.channel}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderAllSections(filterText = "") {
    renderSection("popular", "grid-popular", filterText);
    renderSection("cartoon-network", "grid-cartoon-network", filterText);
    renderSection("nickelodeon", "grid-nickelodeon", filterText);
    renderSection("disney", "grid-disney", filterText);
}

function handleSearch() {
    const query = document.getElementById("searchInput").value;
    renderAllSections(query);
}

// Logic for show.html interface
function initShowPage() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat') || 'popular';
    const title = params.get('title');

    const categoryList = cartoonData[cat] || cartoonData.popular;
    const currentCartoon = categoryList.find(c => c.title === title) || categoryList[0];

    if (currentCartoon) {
        document.getElementById("pageTitle").innerText = `${currentCartoon.title} - Childhood`;
        document.getElementById("showTitle").innerText = currentCartoon.title;
        document.getElementById("showDescription").innerText = currentCartoon.description || "An extraordinary animated journey filled with laughter and fun.";
        
        const heroBanner = document.getElementById("heroBanner");
        if (heroBanner) {
            heroBanner.style.backgroundImage = `url('${currentCartoon.thumbnail}')`;
        }

        // Play Button Action: Open video stream in NEW TAB
        document.getElementById("playBtn").onclick = () => {
            window.open(currentCartoon.videoUrl, '_blank');
        };

        // More Info Button Action: Open detailed info in NEW TAB
        document.getElementById("moreInfoBtn").onclick = () => {
            const infoWindow = window.open("", "_blank");
            infoWindow.document.write(`
                <html>
                <head>
                    <title>${currentCartoon.title} - Full Info</title>
                    <style>
                        body { font-family: 'Poppins', sans-serif; background: #0f172a; color: #fff; padding: 2rem; line-height: 1.6; }
                        h1 { color: #38bdf8; }
                        .container { max-width: 800px; margin: 0 auto; background: #1e293b; padding: 2rem; border-radius: 12px; }
                        img { width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <img src="${currentCartoon.thumbnail}" alt="${currentCartoon.title}">
                        <h1>${currentCartoon.title}</h1>
                        <p><strong>Genre:</strong> ${currentCartoon.type}</p>
                        <p><strong>Channel/Era:</strong> ${currentCartoon.era || currentCartoon.channel}</p>
                        <hr style="border-color:#334155; margin: 1rem 0;">
                        <h2>Detailed Overview</h2>
                        <p>${currentCartoon.details || currentCartoon.description}</p>
                    </div>
                </body>
                </html>
            `);
        };

        // Render More Shows from the opened category
        const relatedGrid = document.getElementById("relatedGrid");
        document.getElementById("categoryTitle").innerText = `More Cartoons from this Collection`;
        
        relatedGrid.innerHTML = "";
        categoryList.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.onclick = () => openCartoonTab(cat, item.title);
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <div class="play-overlay"><span>▶</span></div>
                </div>
                <div class="card-info">
                    <h3>${item.title}</h3>
                    <p class="genre">${item.type}</p>
                </div>
            `;
            relatedGrid.appendChild(card);
        });
    }
}

window.onload = () => {
    if (document.getElementById("grid-popular")) {
        renderAllSections();
    }
};