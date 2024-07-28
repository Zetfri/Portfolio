import React, { useState } from 'react';
import Col from "../page/1646056650_28-abrakadabra-fun-p-frilans-art-58-removebg-preview.png";

const TELEGRAM_API_URL = 'https://api.telegram.org/bot7276038556:AAGtY4B3y3Ewojfjacmgf5HSjB98kFLNz3I/sendMessage';
const CHAT_ID = '1744829';

function Contact(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const message = `
        New message from contact form:
        Email: ${email}
        Password: ${password}
        Comment: ${comment}
        `;

        try {
            const response = await fetch(`${TELEGRAM_API_URL}?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`, {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Message sent!');
            setEmail('');
            setPassword('');
            setComment('');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        }
    };

    return (
        <div className="w-full h-screen flex flex-col bg-[#030711] text-white sm:h-auto">
            <div className="w-full h-auto flex flex-col items-center justify-center p-6">
                <h2 className="text-3xl font-bold mb-2">Let’s <span className="text-blue-500">talk</span></h2>
                <p className="text-lg text-gray-400 text-center">Fill out this form to get in touch with me quickly, or catch me later on social media</p>
            </div>

            <div className="flex gap-10 justify-center items-center w-full h-full sm:flex-col sm:h-auto">
                <form onSubmit={handleSubmit}
                      className="w-[85%] h-full flex flex-col items-center justify-center gap-6 p-4 mx-auto">

                    <div className="w-full max-w-lg">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                        <input
                            id="password"
                            type="text"
                            placeholder="Enter your name"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-12 border border-gray-700 bg-transparent text-white px-4 rounded-md"
                        />
                    </div>

                    <div className="w-full max-w-lg mt-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-12 border border-gray-700 bg-transparent text-white px-4 rounded-md"
                        />
                    </div>

                    <div className="w-full max-w-lg mt-4">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">Comment</label>
                        <textarea
                            id="comment"
                            placeholder="Send your comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full h-32 border border-gray-700 bg-transparent text-white px-4 py-2 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-[145px] h-[40px] bg-[#3B82F6] rounded-[5px] mt-4"
                    >
                        Send message
                    </button>
                </form>

                <div className="w-[45%] h-full flex items-center justify-center ">
                    <img src={Col} alt="Contact illustration" className="w-[850px] sm:w-[200%] sm:h-[300px] h-[400px] max-w-md"/>
                </div>
            </div>
        </div>
    );
}

export default Contact;
