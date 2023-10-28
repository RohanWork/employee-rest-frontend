// import React, { Component } from 'react';

// class ContactForm extends Component {

//     render() {
//         return (
//             <div class="BackCon">
//                 <form>
//                     <input type="text" id="name" placeholder="Enter your name" required/>
//                     <input type="email" id="email" placeholder="Enter your email" required/>
//                     <input type="number" id="call" placeholder="Enter your contact number" required/>
//                     <textarea id="message" placeholder="Enter your message"/>
//                     <button type="submit" id="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default ContactForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const navigate = useNavigate();

    window.scroll(0, 0);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const alertMessage = `
            Name:       ${formData.name}
            Email:         ${formData.email}
            Message:    ${formData.message}
            `;

        alert("\nResponse submitted : "+alertMessage);

        // setFormData({
        //     name: '',
        //     email: '',
        //     message: '',
        // });

        navigate("/employeeList");
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen mt-10">
                <div className="w-full max-w-md px-8 py-8 border shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-600 mb-6 text-center">Contact Us</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 mt-2">
                            <label className="block text-gray-600 text-sm font-bold">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full h-10 border px-2 py-2"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full h-10 border px-2 py-2"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 text-sm font-bold">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full h-12 border px-2 py-2"
                                placeholder="Enter your message"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white font-semibold py-2 px-3 rounded ml-5">
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/employeeList")}
                                className="bg-red-500 text-white font-semibold py-2 px-3 rounded ml-2">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
