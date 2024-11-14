# Frontend Data Analysis Task 

A data analysis frontend application built with Vite, React, TypeScript, and Mantine.

- [Frontend Data Analysis Task](https://data-analysis-manufac.netlify.app/) - Live Link
- [Indian Agriculture dataset](https://drive.google.com/file/d/1p1UW__9DvRuscA01kUFTMz_CUMKvTbyM/view) - Dataset for project
- [Vite Template](https://github.com/mantinedev/vite-min-template) - Base template for project setup

This project features two main tables:

- **Crop Production Table**: Displays maximum and minimum production data for various crops.
- **Crop Averages Table**: Shows average production data for different crops.

![Crop Production Table](https://github.com/user-attachments/assets/94513c08-3730-49ea-aec8-336c9066d617)
*Figure 1: Crop Production Table*

![Crop Averages Table](https://github.com/user-attachments/assets/a30d11fb-65ad-4a10-b87a-742f3734e421)
*Figure 2: Crop Averages Table*

## Features
- **Responsive UI** using Mantine components
- **TypeScript** for static type checking
- **Vite** for fast builds and hot-reloading during development
- Crop production and average data displayed in organized tables

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/pankajmokashi/manufac-analytics.git
   cd manufac-analytics
   ```

2. **Install Dependencies**

   ```bash
   yarn
   ```

### Running the Project

Start the development server:

  ```bash
  yarn dev
  ```

## Functions
- **getMaxMinCropProduction():-** Generates data for the Crop Production Table, providing maximum and minimum production figures for various crops.
- **getAverageCropData():-** Generates data for the Crop Averages Table, calculating average production metrics for various crops.
