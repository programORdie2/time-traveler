# Time Traveler

**Time Traveler** is a web application that allows users to create digital time capsules, enabling them to upload various types of files—images, documents, videos—and unlock them at a specified future date. This project integrates Pinata’s Files API to facilitate secure file uploads and storage on the IPFS network.

## Table of Contents
- [Time Traveler](#time-traveler)
  - [Table of Contents](#table-of-contents)
  - [Key Features](#key-features)
  - [Technology Used](#technology-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

## Key Features
- **Multi-file Upload**: Upload multiple file types into a single time capsule.
- **Custom Unlock Dates**: Set a designated unlock date for future access.
- **Intuitive Dashboard**: A user-friendly interface to manage and create time capsules.
- **Responsive Design**: Fully functional on both mobile and desktop devices.
- **User Authentication**: Secure login system ensuring privacy and control over user capsules.

## Technology Used
- **Next.js**: Full-stack framework for server-side rendering and API routes.
- **Pinata**: Decentralized file storage using the Pinata Files API and IPFS.
- **MongoDB**: Database for storing user data and metadata related to time capsules.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **shadcn**: UI component library for enhanced user experience.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/programORdie2/time-traveler.git
   ```

2. Navigate to the project directory:
   ```bash
   cd time-traveler
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Rename the `.env.local.sample` to `.env.local` and fill it out with your data.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.

## Usage
- Sign up or log in to your account.
- Create a new time capsule by uploading your files and setting an unlock date.
- View your time capsules on the dashboard.
- Files will be accessible after the specified unlock date.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.