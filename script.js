const cartoonData = {
    popular: [
        { 
            title: "Doraemon", 
            type: "Sci-Fi Comedy", 
            channel: "Disney (Hungama TV)", 
            thumbnail: "https://i.pinimg.com/736x/3b/7d/19/3b7d194a719a6248430ba4dd62c5f5a7.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/uVu-D2rC-Lg?playlist=uVu-D2rC-Lg&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "A robotic cat travels back in time from the 22nd century to aid a young boy named Nobita Nobi using futuristic gadgets.",
            detailedInfo: "Doraemon is a Japanese manga and anime series created by Fujiko F. Fujio. The story revolves around a robotic cat named Doraemon, who travels back in time from the 22nd century to aid a young boy named Nobita Nobi using advanced gadgets from his 4D pocket."
        },
        { 
            title: "Tom and Jerry", 
            type: "Slapstick Comedy", 
            channel: "Cartoon Network", 
            thumbnail: "https://i.pinimg.com/736x/30/4f/7e/304f7e6c2594371e06bdd5b20c30bf04.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/t0Q2otsqC4I?playlist=t0Q2otsqC4I&autoplay=1&iv_load_policy=3&loop=1&start=7",
            shortDesc: "The legendary iconic rivalry between Tom the cat and Jerry the mouse in comedic chase sequences.",
            detailedInfo: "Tom and Jerry is an American animated media franchise created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters, a cat named Tom and a mouse named Jerry."
        },
        { 
            title: "Shinchan", 
            type: "Slice of Life / Comedy", 
            channel: "Disney (Hungama TV)", 
            thumbnail: "https://i.pinimg.com/736x/0a/5f/07/0a5f073bd75fece31a6e68442f505fc5.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/5dlrOosqSb8?playlist=5dlrOosqSb8&autoplay=1&iv_load_policy=3&loop=1&start=1",
            shortDesc: "Follow the hilarious antics of 5-year-old Shinnosuke Nohara and his family in Kasukabe.",
            detailedInfo: "Crayon Shin-chan follows the adventures of five-year-old Shinnosuke 'Shin-chan' Nohara and his parents, baby sister, dog, neighbors, and best friends in Kasukabe, Saitama Prefecture."
        },
        { 
            title: "Ninja Hattori", 
            type: "Comedy / Slice of Life / Martial Arts", 
            channel: "Nickelodeon / Disney", 
            thumbnail: "https://i.pinimg.com/736x/d5/6a/e3/d56ae300c79ed1a355529ce5c540782a.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/1RK1b8zGXPI?playlist=1RK1b8zGXPI&autoplay=1&iv_load_policy=3&loop=1&start=34",
            shortDesc: "Hattori Kanzo, a ninja boy, becomes part of Kenichi's life and helps him overcome everyday problems.",
            detailedInfo: "Ninja Hattori-kun follows Kanzo Hattori, a young ninja who moves into the Mitsuba household along with his brother Shinzo and ninja-dog Shishimaru to help Kenichi with his daily struggles."
        },
        { 
            title: "Ben 10 (Original)", 
            type: "Sci-Fi / Action", 
            channel: "Cartoon Network", 
            thumbnail: "https://i.pinimg.com/1200x/38/c4/90/38c4907765c86a29a0c7813f8e4cd646.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/IoiVaeqwIR0?playlist=IoiVaeqwIR0&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Ten-year-old Ben Tennyson discovers a high-tech alien device called the Omnitrix.",
            detailedInfo: "Ben 10 tells the story of Ben Tennyson, a 10-year-old boy on a summer road trip with his cousin Gwen and grandfather Max, who finds an alien watch device called the Omnitrix that transforms him into 10 different alien heroes."
        },
        { 
            title: "Pokémon", 
            type: "Anime / Fantasy", 
            channel: "Cartoon Network / Disney", 
            thumbnail: "https://i.pinimg.com/736x/35/04/44/350444c2abb255ffaf7e254d463124fa.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/MdibbinoM_o?playlist=MdibbinoM_o&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Ash Ketchum journeys across regions to become the ultimate Pokémon Master.",
            detailedInfo: "Pokémon follows Ash Ketchum and his partner Pikachu as they travel across various regions, catching new Pokémon, challenging gym leaders, and striving to earn the title of Pokémon Master."
        },
        { 
            title: "SpongeBob SquarePants", 
            type: "Surreal Comedy", 
            channel: "Nickelodeon", 
            thumbnail: "https://i.pinimg.com/1200x/15/28/31/1528315696535196b07d7bcde8c1eed4.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/07QPKPgBL5Y?playlist=07QPKPgBL5Y&autoplay=1&iv_load_policy=3&loop=1&start=1",
            shortDesc: "Chronicles the adventures of SpongeBob and his aquatic friends in Bikini Bottom.",
            detailedInfo: "SpongeBob SquarePants chronicles the adventures and endeavors of the title character and his various friends in the fictional underwater city of Bikini Bottom."
        },
        { 
            title: "Phineas and Ferb", 
            type: "Musical / Sci-Fi", 
            channel: "Disney Channel", 
            thumbnail: "https://i.pinimg.com/1200x/31/8f/09/318f09c1431bf7ad9a758c0442a4f24c.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/t-Q5PPMRCRE?playlist=t-Q5PPMRCRE&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Stepbrothers embark on grand inventions during their summer vacation while their sister tries to bust them.",
            detailedInfo: "Phineas and Ferb centers on stepbrothers Phineas Flynn and Ferb Fletcher on summer vacation. Every day, the boys embark on ambitious projects, while their sister Candace attempts to expose them."
        },
        { 
            title: "Oggy and the Cockroaches", 
            type: "Slapstick Comedy / Non-verbal", 
            channel: "Cartoon Network", 
            thumbnail: "https://i.pinimg.com/736x/dd/a7/67/dda7670d98e43c93d466bf234750542b.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/NqoZKOk6BTM?playlist=NqoZKOk6BTM&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Lazy cat Oggy constantly deals with three mischievous cockroaches: Joey, Dee Dee, and Marky.",
            detailedInfo: "Oggy and the Cockroaches centers on Oggy, a lazy blue cat who prefers spending his days watching TV and cooking, but is constantly pestered by three mischievous cockroaches."
        },
        { 
            title: "Dragon Ball Z", 
            type: "Anime / Action", 
            channel: "Cartoon Network", 
            thumbnail: "https://i.pinimg.com/736x/74/79/8b/74798b82e4e8b085eefd60c375f039e0.jpg",
            videoUrl: "https://www.youtube-nocookie.com/embed/r5nbjb_S3Zg?playlist=r5nbjb_S3Zg&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Goku and the Z Fighters defend Earth against cosmic threats and powerful warriors.",
            detailedInfo: "Dragon Ball Z follows the adventures of Goku who, along with his companions, defends the Earth against an assortment of villains ranging from intergalactic space fighters to powerful magical creatures."
        }
    ],
    "cartoon-network": [
        { 
            title: "Tom and Jerry", 
            type: "Slapstick Comedy", 
            era: "Pre-2000 Classics", 
            thumbnail: "https://i.pinimg.com/736x/30/4f/7e/304f7e6c2594371e06bdd5b20c30bf04.jpg", 
            videoUrl: "https://www.youtube-nocookie.com/embed/t0Q2otsqC4I?playlist=t0Q2otsqC4I&autoplay=1&iv_load_policy=3&loop=1&start=7",
            shortDesc: "Classic cat-and-mouse slapstick chase comedy.",
            detailedInfo: "Tom and Jerry standard edition featuring classic shorts produced by Metro-Goldwyn-Mayer."
        },
        { 
            title: "Looney Tunes / Baby Looney Tunes", 
            type: "Slapstick Comedy", 
            era: "Pre-2000 Classics", 
            thumbnail: "https://i.pinimg.com/736x/65/61/03/65610312b411ef9166fb5463440f2906.jpg", 
            videoUrl: "https://www.youtube-nocookie.com/embed/U2oliAFLDwU?playlist=U2oliAFLDwU&autoplay=1&iv_load_policy=3&loop=1&start=2",
            shortDesc: "Bugs Bunny, Daffy Duck, and friends in chaotic animated shorts.",
            detailedInfo: "Looney Tunes is an American animated comedy series produced by Warner Bros. from 1930 to 1969."
        },
        { 
            title: "The Flintstones", 
            type: "Sitcom / Comedy", 
            era: "Pre-2000 Classics", 
            thumbnail: "https://i.pinimg.com/736x/97/a8/f3/97a8f304b62dd2a4f4971eedc45dadc1.jpg", 
            videoUrl: "https://www.youtube-nocookie.com/embed/dm4EPKDD570?playlist=dm4EPKDD570&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Stone-age family living in the town of Bedrock.",
            detailedInfo: "The Flintstones is an animated prime-time sitcom about a working-class Stone Age man's life with his family and next-door neighbors."
        }
    ],
    nickelodeon: [
        { 
            title: "SpongeBob SquarePants", 
            type: "Slapstick / Surreal Comedy", 
            era: "Pre-2000 Classics", 
            thumbnail: "https://i.pinimg.com/1200x/15/28/31/1528315696535196b07d7bcde8c1eed4.jpg", 
            videoUrl: "https://www.youtube-nocookie.com/embed/kQlx-gMsUqQ?playlist=kQlx-gMsUqQ&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Adventures of a pineapple-dwelling sea sponge.",
            detailedInfo: "SpongeBob SquarePants is an American animated comedy television series created by marine science educator and animator Stephen Hillenburg."
        },
        { 
            title: "Rugrats", 
            type: "Slice of Life / Comedy", 
            era: "Pre-2000 Classics", 
            thumbnail: "https://i.pinimg.com/236x/c7/07/ae/c707ae776b8d37db4ca67fd9807b9ae1.jpg", 
            videoUrl: "https://www.youtube-nocookie.com/embed/nnS_BTG3hmI?list=PLiHCGKI2GVtqgha8gRIbcNtZ2Mf4JZp-H&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Day-to-day life of toddler Tommy Pickles and his friends.",
            detailedInfo: "Rugrats focuses on a group of toddlers and their day-to-day lives, involving common life experiences that become adventures in the babies' imaginations."
        }
    ],
    disney: [
        { 
            title: "DuckTales", 
            type: "Adventure / Comedy", 
            era: "Pre-2000 Classics", 
            thumbnail: "https://i.pinimg.com/1200x/27/aa/1b/27aa1b13112fc975d23a3d9e87c9ec67.jpg", 
            videoUrl: "https://www.youtube-nocookie.com/embed/vyK2gPdQMPw?list=PLmmcE32REy4Y24ZmauPjc2VdfdpSzTF7H&autoplay=1&iv_load_policy=3&loop=1&start=",
            shortDesc: "Scrooge McDuck and his grandnephews travel the world.",
            detailedInfo: "DuckTales follows the adventures of billionaire Scrooge McDuck and his three grandnephews, Huey, Dewey, and Louie."
        },
        { 
            title: "Chip 'n Dale: Rescue Rangers", 
            type: "Mystery / Adventure", 
            era: "Pre-2000 Classics", 
            thumbnail: "https://i.pinimg.com/736x/13/11/86/131186e0e5087a0d3a8927388f920f97.jpg", 
            videoUrl: "https://www.youtube-nocookie.com/embed/Uh6Gu3sVoL0?playlist=Uh6Gu3sVoL0&autoplay=1&iv_load_policy=3&loop=1&start=7",
            shortDesc: "Chip and Dale head a detective agency solving small-scale crimes.",
            detailedInfo: "Chip 'n Dale: Rescue Rangers features chipmunks Chip and Dale starting a detective agency, Rescue Rangers, catering to animal clients."
        }
    ]
};

// Open the new website inside the 'doremon' folder in the SAME TAB
function openCartoonInterface(categoryKey, title) {
    const url = `Cartoon/Popular/Doremon?category=${encodeURIComponent(categoryKey)}&title=${encodeURIComponent(title)}`;
    window.location.href = url;
}

// Render section grid
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
        card.onclick = () => openCartoonInterface(categoryKey, item.title);

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                <div class="play-overlay">
                    <span>▶</span>
                </div>
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
    const query = document.getElementById("searchInput")?.value || "";
    renderAllSections(query);
}

// Initializer for doremon page / details view
function initDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category') || 'popular';
    const titleParam = urlParams.get('title');

    const categoryList = cartoonData[categoryParam] || cartoonData.popular;
    let selectedCartoon = categoryList.find(c => c.title.toLowerCase() === (titleParam || "").toLowerCase());

    if (!selectedCartoon && categoryList.length > 0) {
        selectedCartoon = categoryList[0];
    }

    if (selectedCartoon) {
        document.title = `${selectedCartoon.title} - Childhood`;

        const heroSection = document.getElementById('heroSection');
        if (heroSection) {
            heroSection.style.backgroundImage = `linear-gradient(to right, rgba(15, 23, 42, 0.95) 30%, rgba(15, 23, 42, 0.3) 70%, rgba(15, 23, 42, 0.95)), url('${selectedCartoon.thumbnail}')`;
        }

        const heroTitle = document.getElementById('heroTitle');
        if (heroTitle) heroTitle.innerText = selectedCartoon.title;

        const heroShortDesc = document.getElementById('heroShortDesc');
        if (heroShortDesc) {
            heroShortDesc.innerText = selectedCartoon.shortDesc || `${selectedCartoon.title} is an exciting ${selectedCartoon.type} show on Childhood.`;
        }

        // Play Button -> Opens video stream in the SAME TAB
        const playBtn = document.getElementById('playBtn');
        if (playBtn) {
            playBtn.onclick = () => {
                const playUrl = selectedCartoon.videoUrl.includes("?") 
                    ? `${selectedCartoon.videoUrl}&autoplay=1` 
                    : `${selectedCartoon.videoUrl}?autoplay=1`;
                window.location.href = playUrl;
            };
        }

        // More Info Button -> Opens detailed pop-up inside the SAME TAB window
        const moreInfoBtn = document.getElementById('moreInfoBtn');
        if (moreInfoBtn) {
            moreInfoBtn.onclick = () => {
                const infoText = selectedCartoon.detailedInfo || `${selectedCartoon.title} is a famous ${selectedCartoon.type} cartoon series. Watch and explore your childhood nostalgia on Childhood Portal!`;
                document.body.innerHTML = `
                    <div style="background: #0f172a; color: #fff; font-family: 'Poppins', sans-serif; padding: 40px; min-height: 100vh;">
                        <div style="max-width: 800px; margin: 0 auto;">
                            <a href="javascript:location.reload()" style="color: #38bdf8; text-decoration: none; font-weight: bold; display: inline-block; margin-bottom: 20px;">← Back to Show</a>
                            <h1 style="color: #38bdf8; border-bottom: 2px solid #f43f5e; padding-bottom: 10px;">${selectedCartoon.title}</h1>
                            <span style="background: #f43f5e; padding: 4px 10px; border-radius: 4px; font-size: 0.9rem; font-weight: bold;">${selectedCartoon.type}</span>
                            <p style="font-size: 1.1rem; margin-top: 20px; color: #cbd5e1; line-height: 1.8;">${infoText}</p>
                        </div>
                    </div>
                `;
            };
        }

        const categoryTitle = document.getElementById('categoryTitle');
        if (categoryTitle) {
            const formattedCategory = categoryParam.replace('-', ' ').toUpperCase();
            categoryTitle.innerText = `More Cartoons from ${formattedCategory}`;
        }

        renderSection(categoryParam, 'grid-related');
    }
}

if (document.getElementById('grid-popular')) {
    window.onload = () => renderAllSections();
}