# WebSolutions

## MERN Stack Project

### Description

WebSolutions is a full-stack web application built using the MERN stack: MongoDB, Express, React, and Node.js. It provides interactive and user-friendly solutions for various digital needs such as website creation, development, and maintenance.

### Features

- Responsive and intuitive user interface
- RESTful API with Node.js and Express
- MongoDB for database management
- Interactive services and calculator tools
- **Machine Learning Integration:** A cost calculator powered by a machine learning model, implemented using a Flask backend and a Pickle file
- **Appointment Booking:** Users can book appointments through an interactive interface
- **Admin Dashboard:** Provides administrative functionality for managing users and appointments
- **Real-time data:** Admin can view real-time updates and manage bookings effectively

### Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Machine Learning:** Python (Flask API, Pickle file for model)
- **Deployment:** Netlify (Frontend)

### Live Demo

- **Website:** [WebSolutions](https://stellular-tulumba-1f2e9d.netlify.app/)

### Setup Instructions

#### 1. Clone the repository

```bash
git clone https://github.com/kiran7893/WebSolutions.git
cd WebSolutions
```

#### 2. Install dependencies

**Backend**

Navigate to the backend directory and install the dependencies:

```bash
cd Server
npm install
```

**Frontend**

Navigate to the frontend directory and install the dependencies:

```bash
cd Admin
npm install
```

```bash
cd Client
npm install
```

#### 3. Configure environment variables

Create a `.env` file in the `server` directory with the following values:

```env
PORT=5000
CONNECTION=mongodb://localhost:27017/websolutions
```

#### 4. Run the project

**Backend**

```bash
cd server
node app.js
```

**Frontend**

```bash
cd client
npm run dev
```

```bash
cd Admin
npm run dev
```

**Machine Learning Model**

```bash
cd Model
python app.py
```

### Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

### Contact

For any queries or support, feel free to reach out:

- **Email:** myadaramsaikiran@gmail.com
