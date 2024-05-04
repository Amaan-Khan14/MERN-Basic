// import React, { useState } from 'react';
// import axios from 'axios';

// const DetailsForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         dob: '',
//         gender: '',
//         moodleId: '',
//         percentage: '',
//         cgpa: ''
//     });


//     const [scoreType, setScoreType] = useState('percentage'); // Default to 'percentage'

//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     }

//     const handleScoreTypeChange = () => {
//         setScoreType(scoreType === 'percentage' ? 'cgpa' : 'percentage');
//         // Optionally, clear the irrelevant field when toggling
//         if (scoreType === 'percentage') {
//             setFormData({ ...formData, percentage: '' });
//         } else {
//             setFormData({ ...formData, cgpa: '' });
//         }
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Check if all required fields are filled
//         const requiredFieldsFilled = Object.entries(formData).every(([key, value]) => {
//             if (key === 'percentage' && scoreType === 'cgpa') return true;
//             if (key === 'cgpa' && scoreType === 'percentage') return true;
//             return value !== '';
//         });

//         if (!requiredFieldsFilled) {
//             alert('All fields are mandatory, including either Percentage or CGPA.');
//             return;
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/details', formData);
//             console.log('Form data submitted successfully:', response.data);
//             alert('Form submitted successfully!');
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             alert('Error submitting form. Please try again.');
//         }
//     }

//     return (
//         <div>
//             <h1>Details Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <br />
//                 <label>
//                     Name:
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Email:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Phone:
//                     <input
//                         type="text"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>
//                     Date of Birth (YYYY-MM-DD):
//                     <input
//                         type="text"
//                         name="dob"
//                         pattern="\d{4}-\d{2}-\d{2}"
//                         placeholder="YYYY-MM-DD"
//                         value={formData.dob}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Gender:
//                     <input
//                         type="text"
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Moodle ID:
//                     <input
//                         type="text"
//                         name="moodleId"
//                         value={formData.moodleId}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <br />
//                 <button type="button" onClick={handleScoreTypeChange}>
//                     Switch to {scoreType === 'percentage' ? 'CGPA' : 'Percentage'}
//                 </button>
//                 {scoreType === 'percentage' ? (
//                     <>
//                         <label>
//                             Percentage:
//                             <input
//                                 type="text"
//                                 name="percentage"
//                                 value={formData.percentage}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                     </>
//                 ) : (
//                     <>
//                         <label>
//                             CGPA:
//                             <input
//                                 type="text"
//                                 name="cgpa"
//                                 value={formData.cgpa}
//                                 onChange={handleChange}
//                             />
//                         </label>
//                     </>
//                 )}
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default DetailsForm;

import React, { useState } from 'react';
import axios from 'axios';

const DetailsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        gender: '',
        moodleId: '',
        percentage: '',
        cgpa: ''
    });

    const [scoreType, setScoreType] = useState('percentage'); // Default to 'percentage'

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleScoreTypeChange = () => {
        setScoreType(scoreType === 'percentage' ? 'cgpa' : 'percentage');
        // Optionally, clear the irrelevant field when toggling
        if (scoreType === 'percentage') {
            setFormData({ ...formData, percentage: '' });
        } else {
            setFormData({ ...formData, cgpa: '' });
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if all required fields are filled
        const requiredFieldsFilled = Object.entries(formData).every(([key, value]) => {
            if (key === 'percentage' && scoreType === 'cgpa') return true;
            if (key === 'cgpa' && scoreType === 'percentage') return true;
            return value !== '';
        });

        if (!requiredFieldsFilled) {
            alert('All fields are mandatory, including either Percentage or CGPA.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/details', formData);
            console.log('Form data submitted successfully:', response.data);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
                <h1 style={{ marginBottom: '1px' }}>Student Registration</h1>
                <form onSubmit={handleSubmit}>
                    <label style={{ display: 'block', marginBottom: '1px' }}>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '1px' }}>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '1px' }}>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Date of Birth (YYYY-MM-DD):
                        <input
                            type="text"
                            name="dob"
                            pattern="\d{4}-\d{2}-\d{2}"
                            placeholder="YYYY-MM-DD"
                            value={formData.dob}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Gender:
                        <input
                            type="text"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                        />
                    </label>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Moodle ID:
                        <input
                            type="text"
                            name="moodleId"
                            value={formData.moodleId}
                            onChange={handleChange}
                            style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                        />
                    </label>
                    <button type="button" onClick={handleScoreTypeChange} style={{ marginBottom: '10px', padding: '8px 16px', cursor: 'pointer' }}>
                        {scoreType === 'percentage' ? 'CGPA' : 'Percentage'}
                    </button>
                    {scoreType === 'percentage' ? (
                        <label style={{ display: 'block', marginBottom: '10px' }}>
                            Percentage:
                            <input
                                type="text"
                                name="percentage"
                                value={formData.percentage}
                                onChange={handleChange}
                                style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                            />
                        </label>
                    ) : (
                        <label style={{ display: 'block', marginBottom: '10px' }}>
                            CGPA:
                            <input
                                type="text"
                                name="cgpa"
                                value={formData.cgpa}
                                onChange={handleChange}
                                style={{ marginLeft: '10px', padding: '8px', width: '100%' }}
                            />
                        </label>
                    )}
                    <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default DetailsForm;


