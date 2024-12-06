const supabase = require('../services/supabase'); // We'll set this up in Step 5

const getSchedule = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const { data, error } = await supabase
            .from('schedules')
            .select('*')
            .eq('student_id', studentId);

        if (error) throw error;

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching schedule');
    }
};

const addCourseToSchedule = async (req, res) => {
    const studentId = req.params.studentId;
    const { courseId } = req.body; // Assuming we're sending courseId in the body

    try {
        const { data, error } = await supabase
            .from('schedules')
            .insert([{ student_id: studentId, course_id: courseId }]);

        if (error) throw error;

        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding course to schedule');
    }
};

module.exports = { getSchedule, addCourseToSchedule };
