document.addEventListener('DOMContentLoaded', function() {
    // Sample book data (in a real app, this would come from your backend)
    const booksData = {
        physics: [
            { 
                title: "Cengage Physics", 
                description: "Complete Cengage Physics series for JEE preparation", 
                link: "https://drive.google.com/drive/folders/1oFFzlQsGRN144RqGVd5kr7tmib2IPcsz",
                contributor: null
            },
            { 
                title: "Irodov Problems", 
                description: "Collection of Irodov physics problems with solutions", 
                link: "https://drive.google.com/drive/folders/1zLa_9k9U-7o-n4njA4MqSKQ0k3abMMxt",
                contributor: null
            },
            { 
                title: "Lakshya JEE Physics", 
                description: "Physics modules from Lakshya JEE", 
                link: "https://drive.google.com/drive/folders/1nGQxpBzgKn9OrtTP6Hhp-qaG9x1xR_-O",
                contributor: null
            }
        ],
        chemistry: [
            { 
                title: "All Chemistry Resources", 
                description: "Comprehensive chemistry collection for JEE", 
                link: "https://drive.google.com/drive/folders/1z2jTRdsdriWMYCVLmT0e4pS2qI1PbkeC",
                contributor: null
            },
            { 
                title: "Arjuna JEE Chemistry", 
                description: "Chemistry modules from Arjuna JEE", 
                link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5",
                contributor: null
            },
            { 
                title: "PW Chemistry Mindmaps", 
                description: "Visual mindmaps for chemistry concepts", 
                link: "https://drive.google.com/drive/folders/1yBNmYoPAeBBe3zJkAq20FnCJXWStm-f6",
                contributor: null
            }
        ],
        mathematics: [
            { 
                title: "RD Sharma Objective", 
                description: "Objective mathematics by RD Sharma", 
                link: "https://drive.google.com/drive/folders/1p1ZWgpoFAxHTDrqouUEB0ayAobnNTg8g",
                contributor: null
            },
            { 
                title: "Prayas JEE Maths", 
                description: "Mathematics modules from Prayas JEE", 
                link: "https://drive.google.com/drive/folders/1yPIRL9I_0zlaZjQTPS48Q_jEpJECEzlM",
                contributor: null
            },
            { 
                title: "Black Book Maths", 
                description: "Advanced mathematics problems collection", 
                link: "https://drive.google.com/drive/folders/1zP1RANMAz8XJqfc6-bEpNUYU6gz6sk2B",
                contributor: null
            }
        ],
        contributors: {
            harshit: [
                { 
                    title: "100%iler Notes", 
                    description: "Comprehensive notes by Harshit", 
                    link: "https://drive.google.com/drive/folders/1ysbuQgLp7QmVmFtkjgr5lPLQDK8RY5ca",
                    contributor: "harshit"
                }
            ],
            ayush: [
                { 
                    title: "JEE Advanced PYQ", 
                    description: "Previous year questions collected by Ayush", 
                    link: "https://drive.google.com/drive/folders/1omIy2ZmvVDrRUSlJ5SK60YtPKOvxyUv_",
                    contributor: "ayush"
                }
            ],
            dev: [
                { 
                    title: "Disha PYQ", 
                    description: "PYQ collection by Dev", 
                    link: "https://drive.google.com/drive/folders/1z6m8mPjl7fGVGayXZ8FJGKXsSmY2mOfH",
                    contributor: "dev"
                }
            ],
            tijil: [
                { 
                    title: "Arjuna JEE Modules", 
                    description: "Modules collected by Tijil", 
                    link: "https://drive.google.com/drive/folders/1mZaT9E-zrbiAWqTTUH8dUudSGsQSAvt5",
                    contributor: "tijil"
                }
            ]
        }
    };

    // Render books function
    function renderBooks(category) {
        const physicsGrid = document.getElementById('physics-books');
        const chemistryGrid = document.getElementById('chemistry-books');
        const mathGrid = document.getElementById('mathematics-books');
        const harshitGrid = document.getElementById('harshit-books');
        const ayushGrid = document.getElementById('ayush-books');
        const devGrid = document.getElementById('dev-books');
        const tijilGrid = document.getElementById('tijil-books');

        // Clear existing content
        physicsGrid.innerHTML = '';
        chemistryGrid.innerHTML = '';
        mathGrid.innerHTML = '';
        harshitGrid.innerHTML = '';
        ayushGrid.innerHTML = '';
        devGrid.innerHTML = '';
        tijilGrid.innerHTML = '';

        // Show/hide sections based on category
        document.getElementById('physics-section').style.display = 
            (category === 'all' || category === 'physics') ? 'block' : 'none';
        document.getElementById('chemistry-section').style.display = 
            (category === 'all' || category === 'chemistry') ? 'block' : 'none';
        document.getElementById('mathematics-section').style.display = 
            (category === 'all' || category === 'mathematics') ? 'block' : 'none';
        document.getElementById('contributors-section').style.display = 
            (category === 'all' || category === 'contributors') ? 'block' : 'none';

        // Render physics books
        if (category === 'all' || category === 'physics') {
            booksData.physics.forEach(book => {
                physicsGrid.appendChild(createBookCard(book));
            });
        }

        // Render chemistry books
        if (category === 'all' || category === 'chemistry') {
            booksData.chemistry.forEach(book => {
                chemistryGrid.appendChild(createBookCard(book));
            });
        }

        // Render math books
        if (category === 'all' || category === 'mathematics') {
            booksData.mathematics.forEach(book => {
                mathGrid.appendChild(createBookCard(book));
            });
        }

        // Render contributor books
        if (category === 'all' || category === 'contributors') {
            booksData.contributors.harshit.forEach(book => {
                harshitGrid.appendChild(createBookCard(book));
            });

            booksData.contributors.ayush.forEach(book => {
                ayushGrid.appendChild(createBookCard(book));
            });

            booksData.contributors.dev.forEach(book => {
                devGrid.appendChild(createBookCard(book));
            });

            booksData.contributors.tijil.forEach(book => {
                tijilGrid.appendChild(createBookCard(book));
            });
        }
    }

    // Create book card element
    function createBookCard(book) {
        const card = document.createElement('div');
        card.className = 'book-card';
        
        const cover = document.createElement('div');
        cover.className = 'book-cover';
        cover.innerHTML = '<i class="fas fa-book-open"></i>';
        
        const info = document.createElement('div');
        info.className = 'book-info';
        
        const title = document.createElement('h3');
        title.textContent = book.title;
        
        const desc = document.createElement('p');
        desc.textContent = book.description;
        
        const link = document.createElement('a');
        link.href = book.link;
        link.className = 'download-btn';
        link.target = '_blank';
        link.innerHTML = '<i class="fas fa-download"></i> Download';
        
        info.appendChild(title);
        info.appendChild(desc);
        info.appendChild(link);
        
        card.appendChild(cover);
        card.appendChild(info);
        
        return card;
    }

    // Search functionality
    function searchBooks(query) {
        query = query.toLowerCase();
        
        // Search in all categories
        const allBooks = [
            ...booksData.physics,
            ...booksData.chemistry,
            ...booksData.mathematics,
            ...booksData.contributors.harshit,
            ...booksData.contributors.ayush,
            ...booksData.contributors.dev,
            ...booksData.contributors.tijil
        ];
        
        const results = allBooks.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.description.toLowerCase().includes(query)
        );
        
        // Clear all grids
        document.getElementById('physics-books').innerHTML = '';
        document.getElementById('chemistry-books').innerHTML = '';
        document.getElementById('mathematics-books').innerHTML = '';
        document.getElementById('harshit-books').innerHTML = '';
        document.getElementById('ayush-books').innerHTML = '';
        document.getElementById('dev-books').innerHTML = '';
        document.getElementById('tijil-books').innerHTML = '';
        
        // Show only search results in physics section (as a results container)
        const physicsSection = document.getElementById('physics-section');
        physicsSection.style.display = 'block';
        physicsSection.querySelector('h2').textContent = `Search Results for "${query}"`;
        
        const physicsGrid = document.getElementById('physics-books');
        physicsGrid.innerHTML = '';
        
        if (results.length === 0) {
            physicsGrid.innerHTML = '<p>No books found matching your search.</p>';
        } else {
            results.forEach(book => {
                physicsGrid.appendChild(createBookCard(book));
            });
        }
        
        // Hide other sections
        document.getElementById('chemistry-section').style.display = 'none';
        document.getElementById('mathematics-section').style.display = 'none';
        document.getElementById('contributors-section').style.display = 'none';
    }

    // Navigation click handlers
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('nav ul li a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            // Get category and render books
            const category = this.getAttribute('data-category');
            renderBooks(category);
        });
    });

    // Search button click handler
    document.getElementById('search-btn').addEventListener('click', function() {
        const query = document.getElementById('search-input').value.trim();
        if (query) {
            searchBooks(query);
        }
    });

    // Search input enter key handler
    document.getElementById('search-input').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                searchBooks(query);
            }
        }
    });

    // Initial render
    renderBooks('all');
});