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
    
    init() {
        this.cacheElements();
        this.bindEvents();
        this.loadTheme();
        this.renderHistory();
        this.showToast('Ready to generate fake data!');
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
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
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
                }
            }
        });
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
        const count = parseInt(this.els.quantity.value);
        const format = this.els.format.value;
        const generator = Generators[this.currentType];
        
        const data = [];
        for (let i = 0; i < count; i++) {
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
