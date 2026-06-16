/**
 * Fake Data Generator
 * Generate realistic fake data for testing and development
 */

// Data pools for generating realistic fake data
const DataPools = {
    firstNames: ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth',
        'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen',
        'Christopher', 'Nancy', 'Daniel', 'Lisa', 'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra',
        'Donald', 'Ashley', 'Steven', 'Kimberly', 'Paul', 'Emily', 'Andrew', 'Donna', 'Joshua', 'Michelle',
        'Kenneth', 'Dorothy', 'Kevin', 'Carol', 'Brian', 'Amanda', 'George', 'Melissa', 'Timothy', 'Deborah'],
    
    lastNames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
        'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
        'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
        'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
        'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts'],
    
    domains: ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'protonmail.com', 'aol.com', 'msn.com'],
    
    streets: ['Main St', 'Oak Ave', 'Elm St', 'Maple Dr', 'Cedar Ln', 'Pine Rd', 'Washington Ave', 'Highland Blvd',
        'Park Ave', 'Lake St', 'River Rd', 'Forest Dr', 'Sunset Blvd', 'Hillside Ave', 'Broadway', 'Market St'],
    
    cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego',
        'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco'],
    
    states: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
        'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
        'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
    
    companySuffixes: ['Inc', 'LLC', 'Corp', 'Ltd', 'Co', 'Group', 'Solutions', 'Technologies', 'Enterprises', 'Industries'],
    
    companyTypes: ['Tech', 'Digital', 'Global', 'Smart', 'Future', 'Innovative', 'Advanced', 'Dynamic', 'Creative', 'Strategic'],
    
    industries: ['Software', 'Consulting', 'Manufacturing', 'Services', 'Solutions', 'Industries', 'Enterprises', 'Technologies'],
    
    jobTitles: ['Software Engineer', 'Product Manager', 'Data Analyst', 'Marketing Manager', 'Sales Representative',
        'UX Designer', 'DevOps Engineer', 'HR Manager', 'Accountant', 'Operations Manager', 'Customer Success',
        'Business Analyst', 'Project Manager', 'Content Writer', 'Graphic Designer', 'System Administrator'],
    
    departments: ['Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations', 'Customer Support',
        'Product', 'Design', 'IT', 'Legal', 'Research', 'Development', 'Quality Assurance'],
    
    products: ['Laptop', 'Smartphone', 'Tablet', 'Headphones', 'Smart Watch', 'Camera', 'Monitor', 'Keyboard',
        'Mouse', 'Speaker', 'Charger', 'Cable', 'Adapter', 'Case', 'Stand', 'Hub', 'Drive', 'Router'],
    
    productAdjectives: ['Pro', 'Ultra', 'Max', 'Lite', 'Plus', 'Premium', 'Elite', 'Essential', 'Advanced', 'Smart'],
    
    colors: ['Black', 'White', 'Silver', 'Gold', 'Blue', 'Red', 'Green', 'Purple', 'Pink', 'Orange', 'Gray'],
    
    departments: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Toys', 'Health', 'Automotive']
};

// Utility functions
const Utils = {
    randomItem: (arr) => arr[Math.floor(Math.random() * arr.length)],
    
    randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    
    randomDate: (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    },
    
    formatDate: (date) => date.toISOString().split('T')[0],
    
    generatePhone: () => {
        const area = Utils.randomInt(200, 999);
        const prefix = Utils.randomInt(200, 999);
        const line = Utils.randomInt(1000, 9999);
        return `(${area}) ${prefix}-${line}`;
    },
    
    generateZip: () => String(Utils.randomInt(10000, 99999)),
    
    generateUUID: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },
    
    generateCreditCard: () => {
        const prefixes = ['4', '5', '37', '6'];
        const prefix = Utils.randomItem(prefixes);
        let number = prefix;
        for (let i = 0; i < 15; i++) {
            number += Utils.randomInt(0, 9);
        }
        return number.match(/.{1,4}/g).join(' ');
    }
};

// Data generators by type
const Generators = {
    person: () => ({
        id: Utils.generateUUID(),
        firstName: Utils.randomItem(DataPools.firstNames),
        lastName: Utils.randomItem(DataPools.lastNames),
        email: null, // Will be set after generation
        phone: Utils.generatePhone(),
        age: Utils.randomInt(18, 80),
        jobTitle: Utils.randomItem(DataPools.jobTitles),
        department: Utils.randomItem(DataPools.departments),
        birthDate: Utils.formatDate(Utils.randomDate(new Date(1950, 0, 1), new Date(2005, 0, 1))),
        avatar: null // URL placeholder
    }),
    
    company: () => ({
        id: Utils.generateUUID(),
        name: `${Utils.randomItem(DataPools.companyTypes)} ${Utils.randomItem(DataPools.lastNames)} ${Utils.randomItem(DataPools.companySuffixes)}`,
        industry: Utils.randomItem(DataPools.industries),
        catchPhrase: `Empowering ${Utils.randomItem(DataPools.industries).toLowerCase()} through innovation`,
        website: null, // Will be set after generation
        email: null,
        phone: Utils.generatePhone(),
        founded: Utils.randomInt(1990, 2023),
        employees: Utils.randomInt(10, 10000),
        revenue: `$${Utils.randomInt(1, 500)}M`
    }),
    
    address: () => ({
        id: Utils.generateUUID(),
        street: `${Utils.randomInt(1, 9999)} ${Utils.randomItem(DataPools.streets)}`,
        city: Utils.randomItem(DataPools.cities),
        state: Utils.randomItem(DataPools.states),
        zipCode: Utils.generateZip(),
        country: 'USA',
        coordinates: {
            lat: (Math.random() * 180 - 90).toFixed(6),
            lng: (Math.random() * 360 - 180).toFixed(6)
        }
    }),
    
    internet: () => ({
        id: Utils.generateUUID(),
        username: null, // Will be set
        password: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        ip: `${Utils.randomInt(1, 255)}.${Utils.randomInt(0, 255)}.${Utils.randomInt(0, 255)}.${Utils.randomInt(0, 255)}`,
        ipv6: null, // Will be generated
        macAddress: Array.from({length: 6}, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join(':'),
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        url: null // Will be set
    }),
    
    commerce: () => ({
        id: Utils.generateUUID(),
        productName: `${Utils.randomItem(DataPools.productAdjectives)} ${Utils.randomItem(DataPools.colors)} ${Utils.randomItem(DataPools.products)}`,
        price: (Math.random() * 1000 + 10).toFixed(2),
        department: Utils.randomItem(DataPools.departments),
        sku: `SKU-${Utils.randomInt(10000, 99999)}`,
        description: `High-quality ${Utils.randomItem(DataPools.products).toLowerCase()} for professional use`,
        inStock: Utils.randomItem([true, false]),
        rating: (Math.random() * 2 + 3).toFixed(1),
        reviews: Utils.randomInt(0, 1000)
    }),
    
    lorem: () => ({
        id: Utils.generateUUID(),
        words: null, // Will be generated
        sentences: null,
        paragraphs: null
    })
};

// Lorem ipsum text
const loremWords = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do',
    'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'ut',
    'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi'];

// Application state
const App = {
    currentType: 'person',
    history: JSON.parse(localStorage.getItem('fdg_history') || '[]'),
    maxHistory: 10,
    undoStack: [],
    redoStack: [],
    maxUndoSize: 20,
    favorites: JSON.parse(localStorage.getItem('fdg_favorites') || '[]'),
    isBatchGenerating: false,
    
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadTheme();
        this.renderHistory();
        this.renderFavorites();
        this.showToast('Ready to generate fake data! (Press ? for help)');
    },
    
    cacheElements() {
        this.els = {
            themeToggle: document.getElementById('themeToggle'),
            themeIcon: document.querySelector('.theme-icon'),
            typeBtns: document.querySelectorAll('.type-btn'),
            quantity: document.getElementById('quantity'),
            quantityValue: document.getElementById('quantityValue'),
            format: document.getElementById('format'),
            generateBtn: document.getElementById('generateBtn'),
            output: document.getElementById('output'),
            copyBtn: document.getElementById('copyBtn'),
            downloadBtn: document.getElementById('downloadBtn'),
            clearBtn: document.getElementById('clearBtn'),
            statsBar: document.getElementById('statsBar'),
            historyList: document.getElementById('historyList'),
            historySection: document.getElementById('historySection'),
            toast: document.getElementById('toast')
        };
    },
    
    saveState() {
        const state = {
            output: this.els.output.value,
            type: this.currentType,
            format: this.els.format.value,
            quantity: this.els.quantity.value
        };
        this.undoStack.push(state);
        if (this.undoStack.length > this.maxUndoSize) {
            this.undoStack.shift();
        }
        this.redoStack = [];
    },
    
    undo() {
        if (this.undoStack.length === 0) return;
        
        const currentState = {
            output: this.els.output.value,
            type: this.currentType,
            format: this.els.format.value,
            quantity: this.els.quantity.value
        };
        this.redoStack.push(currentState);
        
        const prevState = this.undoStack.pop();
        this.els.output.value = prevState.output;
        this.currentType = prevState.type;
        this.els.format.value = prevState.format;
        this.els.quantity.value = prevState.quantity;
        this.els.quantityValue.textContent = prevState.quantity;
        
        this.els.typeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === prevState.type);
        });
        
        this.updateStats(prevState.output);
        this.showToast('Undo successful');
    },
    
    redo() {
        if (this.redoStack.length === 0) return;
        
        const currentState = {
            output: this.els.output.value,
            type: this.currentType,
            format: this.els.format.value,
            quantity: this.els.quantity.value
        };
        this.undoStack.push(currentState);
        
        const nextState = this.redoStack.pop();
        this.els.output.value = nextState.output;
        this.currentType = nextState.type;
        this.els.format.value = nextState.format;
        this.els.quantity.value = nextState.quantity;
        this.els.quantityValue.textContent = nextState.quantity;
        
        this.els.typeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === nextState.type);
        });
        
        this.updateStats(nextState.output);
        this.showToast('Redo successful');
    },
    
    bindEvents() {
        // Theme toggle
        this.els.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Type selection
        this.els.typeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.els.typeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentType = btn.dataset.type;
            });
        });
        
        // Quantity slider
        this.els.quantity.addEventListener('input', () => {
            this.els.quantityValue.textContent = this.els.quantity.value;
        });
        
        // Generate button
        this.els.generateBtn.addEventListener('click', () => this.generate());
        
        // Output actions
        this.els.copyBtn.addEventListener('click', () => this.copyToClipboard());
        this.els.downloadBtn.addEventListener('click', () => this.download());
        this.els.clearBtn.addEventListener('click', () => this.clear());
        
        // Add favorite button handler
        const favoriteBtn = document.getElementById('favoriteBtn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', () => this.addToFavorites());
        }
        
        // Import functionality - create import button
        this.createImportUI();
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === '?') {
                e.preventDefault();
                this.showKeyboardHelp();
                return;
            }
            
            if (e.ctrlKey || e.metaKey) {
                switch(e.key) {
                    case 'Enter':
                        e.preventDefault();
                        this.generate();
                        break;
                    case 'c':
                        if (document.activeElement !== this.els.output) {
                            e.preventDefault();
                            this.copyToClipboard();
                        }
                        break;
                    case 's':
                        e.preventDefault();
                        this.download();
                        break;
                    case 'z':
                        e.preventDefault();
                        if (e.shiftKey) {
                            this.redo();
                        } else {
                            this.undo();
                        }
                        break;
                    case 'y':
                        e.preventDefault();
                        this.redo();
                        break;
                    case 'd':
                        e.preventDefault();
                        this.addToFavorites();
                        break;
                }
            }
        });
    },
    
    showKeyboardHelp() {
        const modal = document.createElement('div');
        modal.className = 'help-modal';
        modal.innerHTML = `
            <div class="help-modal-content">
                <h3>⌨️ Keyboard Shortcuts</h3>
                <div class="shortcuts-grid">
                    <div class="shortcut-item"><kbd>Ctrl</kbd> + <kbd>Enter</kbd> <span>Generate Data</span></div>
                    <div class="shortcut-item"><kbd>Ctrl</kbd> + <kbd>C</kbd> <span>Copy to Clipboard</span></div>
                    <div class="shortcut-item"><kbd>Ctrl</kbd> + <kbd>S</kbd> <span>Download File</span></div>
                    <div class="shortcut-item"><kbd>Ctrl</kbd> + <kbd>Z</kbd> <span>Undo</span></div>
                    <div class="shortcut-item"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> <span>Redo</span></div>
                    <div class="shortcut-item"><kbd>Ctrl</kbd> + <kbd>Y</kbd> <span>Redo</span></div>
                    <div class="shortcut-item"><kbd>Ctrl</kbd> + <kbd>D</kbd> <span>Add to Favorites</span></div>
                    <div class="shortcut-item"><kbd>?</kbd> <span>Show this Help</span></div>
                </div>
                <button class="btn-close-help" onclick="this.closest('.help-modal').remove()">Close</button>
            </div>
            <div class="help-modal-backdrop"></div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.help-modal-backdrop').addEventListener('click', () => {
            modal.remove();
        });
    },
    
    addToFavorites() {
        if (!this.els.output.value) {
            this.showToast('Nothing to save! Generate data first.');
            return;
        }
        
        const favorite = {
            id: Utils.generateUUID(),
            name: `${this.currentType.charAt(0).toUpperCase() + this.currentType.slice(1)} Data`,
            content: this.els.output.value,
            type: this.currentType,
            format: this.els.format.value,
            timestamp: Date.now()
        };
        
        // Ask for custom name
        const customName = prompt('Save as (optional):', favorite.name);
        if (customName !== null) {
            favorite.name = customName || favorite.name;
            this.favorites.push(favorite);
            localStorage.setItem('fdg_favorites', JSON.stringify(this.favorites));
            this.renderFavorites();
            this.showToast('Added to favorites! 💚');
        }
    },
    
    removeFavorite(id) {
        this.favorites = this.favorites.filter(f => f.id !== id);
        localStorage.setItem('fdg_favorites', JSON.stringify(this.favorites));
        this.renderFavorites();
        this.showToast('Removed from favorites');
    },
    
    loadFavorite(id) {
        const favorite = this.favorites.find(f => f.id === id);
        if (!favorite) return;
        
        this.saveState();
        this.els.output.value = favorite.content;
        this.currentType = favorite.type;
        this.els.format.value = favorite.format;
        
        this.els.typeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === favorite.type);
        });
        
        this.updateStats(favorite.content);
        this.showToast(`Loaded: ${favorite.name}`);
    },
    
    renderFavorites() {
        let section = document.getElementById('favoritesSection');
        if (!section) {
            section = document.createElement('div');
            section.id = 'favoritesSection';
            section.className = 'favorites-section';
            section.innerHTML = '<h3>💚 Favorites</h3><div class="favorites-list" id="favoritesList"></div>';
            this.els.historySection.after(section);
        }
        
        const list = document.getElementById('favoritesList');
        if (this.favorites.length === 0) {
            section.style.display = 'none';
            return;
        }
        
        section.style.display = 'block';
        list.innerHTML = this.favorites.map(f => {
            const date = new Date(f.timestamp);
            const timeStr = date.toLocaleDateString();
            const typeEmojis = {
                person: '👤', company: '🏢', address: '📍', internet: '🌐', commerce: '🛒', lorem: '📝'
            };
            
            return `
                <div class="favorite-item">
                    <div class="favorite-info" onclick="App.loadFavorite('${f.id}')">
                        <span class="favorite-type">${typeEmojis[f.type] || '📄'}</span>
                        <span class="favorite-name">${f.name}</span>
                        <span class="favorite-meta">${f.format.toUpperCase()} • ${timeStr}</span>
                    </div>
                    <button class="btn-favorite-delete" onclick="App.removeFavorite('${f.id}')" title="Remove">🗑️</button>
                </div>
            `;
        }).join('');
    },
    
    loadTheme() {
        const savedTheme = localStorage.getItem('fdg_theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
            document.body.classList.add('dark-mode');
            this.els.themeIcon.textContent = '☀️';
        }
    },
    
    toggleTheme() {
        const isDark = document.body.classList.toggle('dark-mode');
        this.els.themeIcon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('fdg_theme', isDark ? 'dark' : 'light');
    },
    
    generate() {
        // Save state before generating
        this.saveState();
        
        const count = parseInt(this.els.quantity.value);
        const format = this.els.format.value;
        const generator = Generators[this.currentType];
        
        // Show progress for large batches
        if (count > 20) {
            this.showProgress(`Generating ${count} records...`, 0);
        }
        
        const data = [];
        const batchSize = 100; // Process in chunks for large datasets
        
        const generateBatch = (startIdx) => {
            const endIdx = Math.min(startIdx + batchSize, count);
            
            for (let i = startIdx; i < endIdx; i++) {
                let item = generator();
                
                // Post-process based on type
                switch(this.currentType) {
                    case 'person':
                        const emailDomain = Utils.randomItem(DataPools.domains);
                        item.email = `${item.firstName.toLowerCase()}.${item.lastName.toLowerCase()}@${emailDomain}`;
                        item.avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id}`;
                        break;
                        
                    case 'company':
                        const cleanName = item.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                        item.website = `https://www.${cleanName}.com`;
                        item.email = `contact@${cleanName}.com`;
                        break;
                        
                    case 'internet':
                        item.username = `user_${Math.random().toString(36).substring(2, 8)}`;
                        item.ipv6 = Array.from({length: 8}, () => 
                            Math.floor(Math.random() * 65536).toString(16).padStart(4, '0')
                        ).join(':');
                        item.url = `https://example.com/${Math.random().toString(36).substring(2, 10)}`;
                        break;
                        
                    case 'lorem':
                        item.words = Array.from({length: Utils.randomInt(5, 20)}, () => 
                            Utils.randomItem(loremWords)
                        ).join(' ');
                        item.sentences = Array.from({length: Utils.randomInt(3, 8)}, () => 
                            Array.from({length: Utils.randomInt(5, 15)}, () => 
                                Utils.randomItem(loremWords)
                            ).join(' ') + '.'
                        ).join(' ');
                        item.paragraphs = Array.from({length: Utils.randomInt(1, 4)}, () => 
                            Array.from({length: Utils.randomInt(3, 6)}, () => 
                                Array.from({length: Utils.randomInt(5, 15)}, () => 
                                    Utils.randomItem(loremWords)
                                ).join(' ') + '.'
                            ).join(' ')
                        ).join('\n\n');
                        break;
                }
                
                data.push(item);
            }
            
            // Update progress
            if (count > 20) {
                const progress = Math.round((endIdx / count) * 100);
                this.updateProgress(progress);
            }
            
            // Continue with next batch or finish
            if (endIdx < count) {
                setTimeout(() => generateBatch(endIdx), 0);
            } else {
                finishGeneration();
            }
        };
        
        const finishGeneration = () => {
            // Hide progress
            this.hideProgress();
            
            // Format output
            let output = '';
            switch(format) {
                case 'json':
                    output = JSON.stringify(data, null, 2);
                    break;
                case 'csv':
                    output = this.toCSV(data);
                    break;
                case 'sql':
                    output = this.toSQL(data);
                    break;
            }
            
            this.els.output.value = output;
            this.updateStats(output);
            this.addToHistory(this.currentType, count, format);
            this.showToast(`Generated ${count} ${this.currentType} records!`);
            
            // Validate data and show preview
            this.validateAndPreview(data);
        };
        
        // Start generation
        generateBatch(0);
    },
    
    showProgress(message, percent) {
        let progressEl = document.getElementById('generationProgress');
        if (!progressEl) {
            progressEl = document.createElement('div');
            progressEl.id = 'generationProgress';
            progressEl.className = 'progress-overlay';
            progressEl.innerHTML = `
                <div class="progress-content">
                    <div class="progress-spinner"></div>
                    <div class="progress-text">${message}</div>
                    <div class="progress-bar"><div class="progress-fill"></div></div>
                </div>
            `;
            document.body.appendChild(progressEl);
        }
        progressEl.style.display = 'flex';
        this.updateProgress(percent);
    },
    
    updateProgress(percent) {
        const progressEl = document.getElementById('generationProgress');
        if (progressEl) {
            const fill = progressEl.querySelector('.progress-fill');
            if (fill) {
                fill.style.width = `${percent}%`;
            }
            const text = progressEl.querySelector('.progress-text');
            if (text) {
                text.textContent = `Generating... ${percent}%`;
            }
        }
    },
    
    hideProgress() {
        const progressEl = document.getElementById('generationProgress');
        if (progressEl) {
            progressEl.style.display = 'none';
        }
    },
    
    validateAndPreview(data) {
        const validation = this.validateData(data);
        
        // Show validation summary in stats bar
        const statsBar = document.getElementById('statsBar');
        if (statsBar && validation.isValid) {
            const previewDiv = document.createElement('div');
            previewDiv.className = 'validation-preview';
            previewDiv.innerHTML = `
                <span class="validation-badge valid">✅ Valid ${validation.format.toUpperCase()}</span>
                <span class="validation-count">${data.length} records</span>
            `;
            
            // Remove existing preview
            const existing = statsBar.querySelector('.validation-preview');
            if (existing) existing.remove();
            
            statsBar.appendChild(previewDiv);
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
                if (previewDiv.parentNode) {
                    previewDiv.remove();
                }
            }, 3000);
        }
    },
    
    validateData(data) {
        if (!Array.isArray(data) || data.length === 0) {
            return { isValid: false, error: 'No data generated' };
        }
        
        // Check each record has required fields
        const sampleRecord = data[0];
        const requiredFields = Object.keys(sampleRecord);
        
        const invalidRecords = data.filter(record => {
            return requiredFields.some(field => !(field in record));
        });
        
        if (invalidRecords.length > 0) {
            return { 
                isValid: false, 
                error: `${invalidRecords.length} records missing fields`,
                format: 'unknown'
            };
        }
        
        return { 
            isValid: true, 
            format: this.els.format.value,
            recordCount: data.length
        };
    },
        this.updateStats(output);
        this.addToHistory(this.currentType, count, format);
        this.showToast(`Generated ${count} ${this.currentType} records!`);
    },
    
    toCSV(data) {
        if (data.length === 0) return '';
        const headers = Object.keys(data[0]);
        const rows = data.map(item => 
            headers.map(h => {
                const val = item[h];
                if (typeof val === 'object') return JSON.stringify(val);
                return String(val).includes(',') ? `"${val}"` : val;
            }).join(',')
        );
        return [headers.join(','), ...rows].join('\n');
    },
    
    toSQL(data) {
        if (data.length === 0) return '';
        const tableName = this.currentType + 's';
        const columns = Object.keys(data[0]).filter(k => typeof data[0][k] !== 'object');
        
        return data.map(item => {
            const values = columns.map(col => {
                const val = item[col];
                if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
                return val;
            });
            return `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.join(', ')});`;
        }).join('\n');
    },
    
    updateStats(output) {
        const lines = output.split('\n').length;
        const chars = output.length;
        const words = output.split(/\s+/).filter(w => w.length > 0).length;
        
        this.els.statsBar.innerHTML = `
            <span>📄 ${lines.toLocaleString()} lines</span>
            <span>📝 ${words.toLocaleString()} words</span>
            <span>📊 ${chars.toLocaleString()} chars</span>
        `;
    },
    
    copyToClipboard() {
        if (!this.els.output.value) return;
        navigator.clipboard.writeText(this.els.output.value).then(() => {
            this.showToast('Copied to clipboard!');
        });
    },
    
    download() {
        if (!this.els.output.value) return;
        
        const format = this.els.format.value;
        const mimeTypes = {
            json: 'application/json',
            csv: 'text/csv',
            sql: 'text/plain'
        };
        const extensions = { json: 'json', csv: 'csv', sql: 'sql' };
        
        const blob = new Blob([this.els.output.value], { type: mimeTypes[format] });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fake-data-${this.currentType}-${Date.now()}.${extensions[format]}`;
        a.click();
        URL.revokeObjectURL(url);
        
        this.showToast('Downloaded!');
    },
    
    clear() {
        this.els.output.value = '';
        this.els.statsBar.innerHTML = '';
    },
    
    // Import functionality
    createImportUI() {
        // Create import button
        const importBtn = document.createElement('button');
        importBtn.id = 'importBtn';
        importBtn.className = 'btn-icon';
        importBtn.title = 'Import data (JSON/CSV)';
        importBtn.innerHTML = '📤';
        
        // Insert import button after download button
        const outputActions = document.querySelector('.output-actions');
        if (outputActions) {
            outputActions.insertBefore(importBtn, this.els.clearBtn);
        }
        
        importBtn.addEventListener('click', () => this.showImportModal());
    },
    
    showImportModal() {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'import-modal';
        modal.innerHTML = `
            <div class="import-modal-content">
                <h3>📤 Import Data</h3>
                <p>Paste your previously exported JSON or CSV data:</p>
                <textarea id="importInput" placeholder="Paste JSON array or CSV data here..."></textarea>
                <p class="import-hint">Supports: JSON arrays, CSV files, and SQL INSERT statements</p>
                <div class="import-actions">
                    <button id="processImportBtn" class="btn-primary">✓ Import</button>
                    <button id="cancelImportBtn" class="btn-secondary">✕ Cancel</button>
                </div>
                <div id="importPreview" class="import-preview"></div>
            </div>
            <div class="import-modal-backdrop"></div>
        `;
        
        document.body.appendChild(modal);
        
        // Event listeners
        document.getElementById('cancelImportBtn').addEventListener('click', () => {
            modal.remove();
        });
        
        document.getElementById('processImportBtn').addEventListener('click', () => {
            this.processImport();
        });
        
        document.querySelector('.import-modal-backdrop').addEventListener('click', () => {
            modal.remove();
        });
        
        // Live preview
        document.getElementById('importInput').addEventListener('input', () => {
            this.previewImport();
        });
        
        // Focus textarea
        document.getElementById('importInput').focus();
    },
    
    previewImport() {
        const input = document.getElementById('importInput').value.trim();
        const preview = document.getElementById('importPreview');
        
        if (!input) {
            preview.innerHTML = '';
            preview.className = 'import-preview';
            return;
        }
        
        const result = this.parseImportData(input);
        
        if (result.success) {
            preview.innerHTML = `✅ Valid ${result.format.toUpperCase()}: ${result.data.length} records found`;
            preview.className = 'import-preview import-valid';
        } else {
            preview.innerHTML = `❌ ${result.error}`;
            preview.className = 'import-preview import-error';
        }
    },
    
    parseImportData(input) {
        // Try JSON first
        try {
            const data = JSON.parse(input);
            if (Array.isArray(data)) {
                return { success: true, format: 'json', data };
            }
            if (typeof data === 'object') {
                return { success: true, format: 'json', data: [data] };
            }
            return { success: false, error: 'JSON must be an array or object' };
        } catch (e) {
            // Not valid JSON
        }
        
        // Try CSV
        const lines = input.split('\n').filter(l => l.trim());
        if (lines.length >= 2 && lines[0].includes(',')) {
            const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, ''));
            const data = [];
            
            for (let i = 1; i < lines.length; i++) {
                const values = this.parseCSVLine(lines[i]);
                const row = {};
                headers.forEach((h, idx) => {
                    row[h] = values[idx] !== undefined ? values[idx] : null;
                });
                data.push(row);
            }
            
            if (data.length > 0) {
                return { success: true, format: 'csv', data };
            }
        }
        
        // Try SQL INSERT statements
        const sqlMatches = input.match(/INSERT INTO\s+\w+\s*\([^)]+\)\s*VALUES\s*\([^)]+\)/gi);
        if (sqlMatches) {
            const data = [];
            sqlMatches.forEach(match => {
                const valuesMatch = match.match(/VALUES\s*\(([^)]+)\)/i);
                if (valuesMatch) {
                    const values = valuesMatch[1].split(',').map(v => {
                        v = v.trim();
                        if ((v.startsWith("'") && v.endsWith("'")) || 
                            (v.startsWith('"') && v.endsWith('"'))) {
                            return v.slice(1, -1);
                        }
                        return isNaN(v) ? v : Number(v);
                    });
                    data.push({ imported: values });
                }
            });
            
            if (data.length > 0) {
                return { success: true, format: 'sql', data };
            }
        }
        
        return { success: false, error: 'Unable to parse data. Please check format.' };
    },
    
    parseCSVLine(line) {
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                if (inQuotes && line[i + 1] === '"') {
                    current += '"';
                    i++;
                } else {
                    inQuotes = !inQuotes;
                }
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        return values.map(v => v.replace(/^["']|["']$/g, ''));
    },
    
    processImport() {
        const input = document.getElementById('importInput').value.trim();
        
        if (!input) {
            this.showToast('Please paste data to import');
            return;
        }
        
        const result = this.parseImportData(input);
        
        if (!result.success) {
            this.showToast(result.error);
            return;
        }
        
        // Format and display imported data
        let output = '';
        switch (this.els.format.value) {
            case 'json':
                output = JSON.stringify(result.data, null, 2);
                break;
            case 'csv':
                output = this.toCSV(result.data);
                break;
            case 'sql':
                output = this.toSQLFromImport(result.data);
                break;
        }
        
        this.els.output.value = output;
        this.updateStats(output);
        
        // Close modal
        document.querySelector('.import-modal').remove();
        
        // Show success message
        this.showToast(`Imported ${result.data.length} records from ${result.format.toUpperCase()}!`);
        
        // Add to history
        this.addToHistory('import', result.data.length, this.els.format.value);
    },
    
    toSQLFromImport(data) {
        if (data.length === 0) return '';
        const tableName = 'imported_data';
        const columns = Object.keys(data[0]);
        
        return data.map(item => {
            const values = columns.map(col => {
                const val = item[col];
                if (typeof val === 'string') return `'${val.replace(/'/g, "''")}'`;
                if (typeof val === 'object') return `'${JSON.stringify(val)}'`;
                return val === null ? 'NULL' : val;
            });
            return `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.join(', ')});`;
        }).join('\n');
    },
    
    addToHistory(type, count, format) {
        const entry = {
            type,
            count,
            format,
            timestamp: Date.now()
        };
        
        this.history.unshift(entry);
        if (this.history.length > this.maxHistory) {
            this.history = this.history.slice(0, this.maxHistory);
        }
        
        localStorage.setItem('fdg_history', JSON.stringify(this.history));
        this.renderHistory();
    },
    
    renderHistory() {
        if (this.history.length === 0) {
            this.els.historySection.style.display = 'none';
            return;
        }
        
        this.els.historySection.style.display = 'block';
        this.els.historyList.innerHTML = this.history.map(item => {
            const date = new Date(item.timestamp);
            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const typeEmojis = {
                person: '👤', company: '🏢', address: '📍', internet: '🌐', commerce: '🛒', lorem: '📝'
            };
            
            return `
                <div class="history-item">
                    <span class="history-type">${typeEmojis[item.type] || '📄'} ${item.type}</span>
                    <span class="history-count">${item.count} items</span>
                    <span class="history-format">${item.format.toUpperCase()}</span>
                    <span class="history-time">${timeStr}</span>
                </div>
            `;
        }).join('');
    },
    
    showToast(message) {
        this.els.toast.textContent = message;
        this.els.toast.classList.add('show');
        setTimeout(() => this.els.toast.classList.remove('show'), 3000);
    }
};

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.error);
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => App.init());
