const axios = require('axios');

const getCourses = async (req, res) => {
    try {
        const response = await axios.get('https://beta.umd.io/courses'); 
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching courses');
    }
};

const getCourseDetails = async (req, res) => {
    const courseId = req.params.id;
    try {
        const response = await axios.get(`https://beta.umd.io/courses/${courseId}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching course details');
    }
};

module.exports = { getCourses, getCourseDetails };
