# Second Brain - A Personal Knowledge Management App

A full-stack web application designed to help you capture, organize, and share your most valuable online content, creating your own personal digital library.

![App Screenshot](https://via.placeholder.com/800x450.png?text=Your+App+Screenshot+Here)
<img width="1906" height="872" alt="Screenshot 2025-08-02 214702" src="https://github.com/user-attachments/assets/e0610b63-d06f-41d3-a613-3f4128486de0" />

*Replace the placeholder above with a real screenshot or GIF of your application.*

---

## About The Project

In an era of information overload, it's easy to lose track of valuable articles, videos, and resources. This "Second Brain" application solves that problem by providing a central, secure place to store and manage your digital knowledge. Whether you're a developer saving code snippets, a student organizing research, or just a curious mind, this tool helps you build a powerful, personalized, and shareable knowledge base.

### Key Features

* **Secure Authentication:** User accounts are protected with JWT-based authentication and hashed passwords.
* **Save Any Content:** Easily save links from articles, YouTube, Twitter, and more with a title.
* **Organize with Tags:** Add custom tags to your content to categorize and find information quickly.
* **Share Your Brain:** Generate a unique, public link to share your entire curated library with others.
* **Rich Previews:** Automatically fetches metadata like titles and descriptions for saved links (if implemented).

---

## Built With

This project is built with modern web technologies, showcasing a full-stack development process.

**Frontend:**
* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Axios](https://axios-http.com/)

**Backend:**
* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [JSON Web Tokens (JWT)](https://jwt.io/)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
* Node.js (v18 or later)
* npm
* MongoDB (either local or a cloud instance like MongoDB Atlas)

### Installation

1.  **Clone the repo**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Setup Backend**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    ```
    Start the backend server:
    ```sh
    npm run start
    ```

3.  **Setup Frontend**
    ```sh
    cd ../frontend
    npm install
    ```
    Create a `.env` file in the `frontend` directory and add the following:
    ```env
    VITE_BACKEND_URL=http://localhost:3000
    ```
    Start the frontend development server:
    ```sh
    npm run dev
    ```
    Your application should now be running, with the frontend available at `http://localhost:5173` (or another port specified by Vite).

---

## Roadmap

Here are some features planned for the future to enhance the application:

- [ ] Full-text search across all content
- [ ] Browser extension for one-click saving
- [ ] Collaborative "brains" with team members
- [ ] AI-powered auto-tagging and summarization

See the [open issues](https://github.com/your-username/your-repo-name/issues) for a full list of proposed features (and known issues).

---

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

## Contact

Your Name - [@your_linkedin_profile](https://linkedin.com/in/your-linkedin)

Project Link: [https://github.com/your-username/your-repo-name](https://github.com/your-username/your-repo-name)
