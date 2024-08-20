'use client';  

import React, { useState } from 'react';
import PersonalInformation from './PersonalInformation';
import TravelPreferences from './TravelPreferences';
import HealthAndSafety from './HealthAndSafety';
import './formStyles.css';

const MultiStageForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContact: '',
        medicalConditions: '',
    });

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const handleChange = (input) => (e) => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    const handleSubmit = () => {
        if (!formData.fullName || !formData.dateOfBirth || !formData.nationality || 
            !formData.email || !formData.phone || !formData.departureDate || 
            !formData.returnDate || !formData.accommodation || 
            !formData.healthDeclaration || !formData.emergencyContact) {
            alert('Please fill in all required fields.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?\d{10,}$/;
    
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        if (!phoneRegex.test(formData.phone)) {
            alert('Please enter a valid phone number.');
            return;
        }
    
        alert('Form Submitted Successfully!');
    };

    switch (currentStep) {
        case 1:
            return (
                <PersonalInformation
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                />
            );
        case 2:
            return (
                <TravelPreferences
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <HealthAndSafety
                    formData={formData}
                    handleChange={handleChange}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                />
            );
        default:
            return null;
    }
};

export default MultiStageForm;
