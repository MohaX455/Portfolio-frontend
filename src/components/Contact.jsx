import React from 'react'
import { useState } from "react";

const Contact = ({ setSuccess }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const cancel = () => {
        setFormData({ name: "", email: "", subject: "", message: "" });
    }

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData)

        try {
            const API_RUL = "https://portfolio-backend-roir.onrender.com/"
            const res = await fetch(`${API_RUL}/mail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
            }
        } catch (error) {
            console.error("Erreur :", error);
        }
    };
    return (
        <div className='py-12 pt-6 w-full flex flex-col justify-center items-center'>
            <section id='Contact'>
                <div className="p-4 w-full">
                    <h2 className="text-orange-500 text-xl font-medium flex gap-2 text-[24px] items-center pl-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-orange-500 lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                        Get in touch
                    </h2>
                    <p className='pt-4 text-[15px] px-2 md:px-0 max-sm:max-w-[300px]'>Have a project in mind send me a message.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-6 p-4 py-6 pt-2">
                    <div className="flex flex-col gap-6 md:gap-7 w-[300px] md:w-[350px]">
                        <div className="h-11 w-full border border-[rgba(0_0_0_/_0.3)] flex gap-2 rounded-[1px]">
                            <div
                                className="h-full w-[40px] flex justify-center items-center border-r-[1px] border-[rgba(0_0_0_/_0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="text-[rgba(0_0_0_/_0.3)] h-[18px] w-[18px] text-[15px] lucide lucide-user-icon lucide-user">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <input type="text" name='name' placeholder='Your name' onChange={handleChange} value={formData.name}
                                className="h-full outline-none pr-2.5" required />
                        </div>
                        <div className="h-11 w-full border border-[rgba(0_0_0_/_0.3)] flex gap-2 rounded-[1px]">
                            <div
                                className="h-full w-[40px] flex justify-center items-center border-r-[1px] border-[rgba(0_0_0_/_0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="text-[rgba(0_0_0_/_0.3)] h-[18px] w-[18px] lucide lucide-mail-icon lucide-mail">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                </svg>
                            </div>
                            <input type="email" name='email' placeholder='Your email' onChange={handleChange} value={formData.email}
                                className="h-full outline-none pr-2.5" required />
                        </div>
                        <div className="h-11 w-full border border-[rgba(0_0_0_/_0.3)] flex gap-2 rounded-[1px]">
                            <div
                                className="h-full w-[40px] flex justify-center items-center border-r-[1px] border-[rgba(0_0_0_/_0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="text-[rgba(0_0_0_/_0.3)] h-[18px] w-[18px] text-[15px] lucide lucide-paperclip-icon lucide-paperclip">
                                    <path
                                        d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
                                </svg>
                            </div>
                            <input type="text" name='subject' placeholder='Subject' onChange={handleChange} value={formData.subject}
                                className="h-full outline-none pr-2.5" required />
                        </div>
                    </div>
                    <div className="w-[300px] md:w-[350px] flex flex-col gap-6 md:gap-7">
                        <textarea name="message" onChange={handleChange} value={formData.message}
                            className="w-full h-28 border border-[rgba(0_0_0_/_0.3)] p-2 outline-none rounded-[1px]" required></textarea>
                        <div className="w-full h-11 flex items-center justify-end gap-4">
                            <button type='button' onClick={cancel} class="h-full w-[100px] text-[15px] border border-[rgba(0_0_0_/_0.3)] text-[rgba(0_0_0_/_0.5)] cursor-pointer rounded-md">
                                Cancel
                            </button>
                            <button className="h-full px-3 text-[15px] text-white bg-blue-800 rounded-md cursor-pointer flex gap-2 justify-center items-center font-medium" type="submit">
                                Send message
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="text-white h-[18px] w-[18px] lucide lucide-send-icon lucide-send">
                                    <path
                                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                    <path d="m21.854 2.147-10.94 10.939" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
                {/* {success && <p className="text-green-600">Message sent successfully!</p>} */}
            </section>

        </div>
    )
}

export default Contact