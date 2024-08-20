import React, { useState, useEffect } from 'react';

const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "India", 
    "Germany", "France", "China", "Japan", "Brazil", "Mexico", "South Africa",
    
];

const PersonalInformation = ({ formData, handleChange, nextStep }) => {
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{10,}$/;

        const isFormValid = formData.fullName &&
                            formData.dateOfBirth &&
                            formData.nationality &&
                            emailRegex.test(formData.email) &&
                            phoneRegex.test(formData.phone);

        setIsNextEnabled(isFormValid);
    }, [formData]);

    return (
        <div>
            <h2>Personal Information</h2>
            <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange('fullName')}
                    required
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleChange('dateOfBirth')}
                    required
                />
                <select
                    value={formData.nationality}
                    onChange={handleChange('nationality')}
                    required
                >
                    <option value="">Select Nationality</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))}
                </select>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    required
                />
                <button type="button" onClick={nextStep} disabled={!isNextEnabled}>
                    Next
                </button>
            </form>
        </div>
    );
};

export default PersonalInformation;
