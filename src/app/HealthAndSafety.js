import React, { useState, useEffect } from 'react';

const HealthAndSafety = ({ formData, handleChange, prevStep, handleSubmit }) => {
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    useEffect(() => {
        const isFormValid = formData.healthDeclaration &&
                            formData.emergencyContact;

        setIsSubmitEnabled(isFormValid);
    }, [formData]);

    return (
        <div>
            <h2>Health and Safety</h2>
            <form>
                <label className="white-label">
                    Health Declaration
                    <select
                        value={formData.healthDeclaration}
                        onChange={handleChange('healthDeclaration')}
                        required
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>
                <input
                    type="text"
                    placeholder="Emergency Contact Information"
                    value={formData.emergencyContact}
                    onChange={handleChange('emergencyContact')}
                    required
                />
                <textarea
                    placeholder="Any Medical Conditions (if applicable)"
                    value={formData.medicalConditions}
                    onChange={handleChange('medicalConditions')}
                ></textarea>
                <button type="button" onClick={prevStep}>
                    Previous
                </button>
                <button type="button" onClick={handleSubmit} disabled={!isSubmitEnabled}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HealthAndSafety;
