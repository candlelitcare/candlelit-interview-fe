import { useState, ChangeEvent, FormEvent } from 'react';
import Link from "next/link";

const AddCoach = () => {
    const [coach, setCoach] = useState<Coach>({
        id: '',
        name: '',
        role: '',
        location: '',
        bio: '',
        email: '',
        qualifications: [],
        password: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCoach((prevCoach) => ({
            ...prevCoach,
            [name]: value,
        }));
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(coach);
        // Reset form fields
        setCoach({
            id: '',
            name: '',
            role: '',
            location: '',
            bio: '',
            email: '',
            qualifications: [],
            password: '',
        });
    };

    return (

        <div className='flex items-center p-24 flex-col'>
            <h4 className='text-xl py-4 font-extrabold'>Welcome to Candlelit Care</h4>
            <Link className='underline pb-4' href='/'>Go Back</Link>

            <form className="max-w-sm w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={coach.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                        Role
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={coach.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={coach.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={coach.bio}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={coach.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="qualifications" className="block text-gray-700 font-bold mb-2">
                        Qualifications
                    </label>
                    <input
                        type="text"
                        id="qualifications"
                        name="qualifications"
                        value={coach.qualifications.join(', ')}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={coach.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddCoach;
