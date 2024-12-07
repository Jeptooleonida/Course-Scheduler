# UMD Class Scheduler

An integrated web application to simplify class scheduling for UMD students by categorizing courses based on their major requirements.

## Problem Statement
UMD students face challenges in scheduling classes due to confusion about which courses are benchmark, core, major, or elective. This requires visiting multiple resources to understand degree requirements, leading to inefficiencies.

## Stakeholders
- UMD Students
- Academic Advisors
- The Registrar's Office
- Professors and Faculty Members
- Incoming Transfer Students and Freshmen

## Solution
The UMD Class Scheduler is a web application that integrates data from the UMD course catalog and categorizes courses based on their relevance to a student’s major. 

### Features:
- **Major-specific Course List**: Enter your major to view curated lists of benchmark, core, major, and elective courses.
- **Course Details**: Clickable class links provide details such as prerequisites, credits, and schedules.
- **Degree Progress Tracking**: Use the Degree Navigator API to track degree progress.
- **Dynamic Updates**: Information updates dynamically using live data from the UMD API.

### APIs:
- [UMD.io API](https://beta.umd.io/): Provides live data on course availability, prerequisites, and classifications.
- Public APIs from the [public-apis GitHub repository](https://github.com/public-apis/public-apis).

### Example Data Sources:
- Professors
- Courses
- Majors

---

## Project Deliverables
### Functional Requirements:
- Web application deployed on Vercel.
- Backend with RESTful API endpoints for retrieving and managing course data.
- Frontend built using React and styled with advanced CSS.

### Technology Stack:
- **Frontend**:
  - React
  - CSS with contemporary styling techniques (e.g., flexbox, grid).
  - Minimum of 2 JavaScript libraries (e.g., Chart.js, Picture Slider).
- **Backend**:
  - Node.js with Supabase database.
  - Custom API endpoints:
    1. Retrieve data from the database.
    2. Write data to the database or manipulate data from external providers.
- **Deployment**:
  - Hosted on Vercel.

### Pages:
1. **About Page**:
   - Displays logo, navigation menu, major selection, class categories, class details, prerequisites, schedule management, and progress tracking.
2. **Project-Specific Functionality Page**:
   - Displays core functionality with REST API integration for course names, descriptions, prerequisites, classifications (benchmark, core, major, elective).

---

## How to Run the Application
### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/umd-class-scheduler.git
   ```
2. Install dependencies:
   ```bash
   cd umd-class-scheduler
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Deployed Version
Access the live application on Vercel [here](https://your-vercel-url.vercel.app).

---

## API Endpoints
1. **GET /api/courses**:
   - Retrieves a list of courses based on major.
   - Example Response:
     ```json
     [
       {
         "course_id": "CMSC131",
         "name": "Object-Oriented Programming I",
         "prerequisites": "None",
         "credits": 4
       }
     ]
     ```

2. **POST /api/schedule**:
   - Writes user-generated schedules to the database.
   - Request Body Example:
     ```json
     {
       "user_id": 123,
       "schedule": ["CMSC131", "MATH140"]
     }
     ```

---

## Known Bugs
- None reported at this time.

## Future Development
- Add advanced analytics for course popularity and availability.
- Integrate more robust animations and user interactions.
- Support for additional APIs to enhance course and faculty data.

---

## Minimum Code Guidelines
- **Frontend**:
  - Must use RESTful APIs from the backend.
  - Styled using contemporary CSS techniques (flexbox, grids).
  - Compatible with all modern desktop browsers.
  - Includes at least 2 JavaScript libraries for interactivity.

- **Backend**:
  - Successfully connects to a Supabase database.
  - Includes at least 2 custom API endpoints:
    1. Retrieve data from the database.
    2. Write data to the database or manipulate external API data.

---

## Contact
For questions, please contact [your-email@example.com].

---

### License
This project is licensed under the [MIT License](LICENSE).
