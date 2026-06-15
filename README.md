# 🎲 Fake Data Generator

Generate realistic fake data for testing and development. No dependencies, 100% client-side.

## 🚀 Live Demo

**[👉 Try it now](https://html-preview.github.io/?url=https://github.com/Agent-Lumi/fake-data-generator/blob/main/index.html)**

## ✨ Features

### 🎭 Data Types
- **👤 Person** - Names, emails, phone numbers, job titles, ages, avatars
- **🏢 Company** - Business names, websites, industries, revenue, employee counts
- **📍 Address** - Street addresses, cities, states, zip codes, coordinates
- **🌐 Internet** - Usernames, passwords, IPs, MAC addresses, URLs, user agents
- **🛒 Commerce** - Product names, prices, SKUs, ratings, reviews
- **📝 Lorem** - Random words, sentences, and paragraphs

### 🛠️ Export Formats
- **JSON** - Standard JSON format with proper indentation
- **CSV** - Comma-separated values for spreadsheets
- **SQL** - INSERT statements for database import

### 📤 Import Formats
- **JSON** - Import previously exported JSON data
- **CSV** - Import CSV files back into the app
- **SQL** - Import SQL INSERT statements

### 🎨 Interface
- Modern dark theme with light mode toggle
- 6 data type categories
- Adjustable quantity (1-50 items)
- Real-time statistics (lines, words, characters)
- One-click copy to clipboard
- Download as file
- Generation history (last 10)
- Keyboard shortcuts (Ctrl+Enter to generate, Ctrl+C to copy, Ctrl+S to download)
- Fully responsive design
- Works offline (PWA)

## 📦 Usage

### Online (Recommended)
Click the demo link above and start generating!

### Local
```bash
git clone https://github.com/Agent-Lumi/fake-data-generator.git
cd fake-data-generator
# Open index.html in your browser
```

## 🛠️ Tech Stack
- HTML5 / CSS3 / Vanilla JavaScript
- No external dependencies
- 100% client-side processing
- PWA with service worker
- LocalStorage for history and theme preferences

## 🎯 Example Output

### Person (JSON)
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "firstName": "James",
    "lastName": "Smith",
    "email": "james.smith@gmail.com",
    "phone": "(555) 123-4567",
    "age": 34,
    "jobTitle": "Software Engineer",
    "department": "Engineering",
    "birthDate": "1990-05-15",
    "avatar": "https://api.dicebear.com/7.x/avataaars/svg?seed=..."
  }
]
```

### Company (CSV)
```csv
id,name,industry,catchPhrase,website,email,phone,founded,employees,revenue
550e8400...,Future Smith Inc,Software,Empowering software through innovation,https://www.futuresmithinc.com,contact@futuresmithinc.com,(555) 987-6543,1995,250,$50M
```

## 📝 License
MIT License - feel free to use for any project!

## 🐛 Changelog

### v2.1 (2026-06-15)
- 📤 Added Import functionality - import previously exported JSON, CSV, or SQL data
- 🔄 Convert between export formats by importing and re-exporting
- 🔍 Live validation preview when pasting import data
- ✨ Improved UI with import button in output actions

### v2.0 (2026-06-12)
- ✨ Completely rebuilt as a real fake data generator
- 🎲 Added 6 data type categories with realistic generation
- 📤 Export to JSON, CSV, and SQL formats
- 📜 Generation history with LocalStorage
- 📊 Real-time statistics display
- 🌓 Dark/light mode toggle
- ⌨️ Keyboard shortcuts
- 🔧 Removed 90% duplicate code bloat
- 🚀 Massive performance improvements

### v1.0 (Initial)
- Basic template with placeholder functionality

---

Made with 💡 by [Agent-Lumi](https://github.com/Agent-Lumi) for [@shalkith](https://github.com/shalkith)
