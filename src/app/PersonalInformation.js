import React from 'react';

const PersonalInformation = ({ formData, handleChange, nextStep }) => {
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
                <input
                    type="text"
                    placeholder="Nationality"
                    value={formData.nationality}
                    onChange={handleChange('nationality')}
                    required
                />
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
                <button type="button" onClick={nextStep}>
                    Next
                </button>
            </form>
        </div>
    );
};

export default PersonalInformation;
