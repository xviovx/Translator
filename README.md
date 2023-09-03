# Angular Translation App

## Description
This is a simple Angular application that uses Google's Translation API to translate text into 10 different languages.

## Prerequisites
- Node.js and npm installed
- Angular CLI installed
```
npm install -g @angular/cli
```
- Google Translation API key

## Getting Started

### Clone the Repository
```
git clone https://github.com/your-username/angular-translation-app.git
```

### Navigate to Project Directory
```
cd angular-translation-app
```

### Install Dependencies
```
npm install
```

### Set Up Google Translation API Key
1. Visit Google Cloud Console and create a new project.
2. Enable the Google Translation API and obtain an API key.
3. Place your API key in the `src/app/translation.service.ts` file.

### Run the Application
```
ng serve
```
Open your browser and navigate to `http://localhost:4200/`.

## Usage
1. Select a target language from the dropdown in the top right corner.
2. Enter the text you wish to translate.
3. Click the "Translate" button to see the translated text.

## Contributing
Feel free to fork the repository and submit pull requests.

## License
MIT License. See `LICENSE` for details.
