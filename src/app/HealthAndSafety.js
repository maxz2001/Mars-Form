import React from 'react';

const HealthAndSafety = ({ formData, handleChange, prevStep, handleSubmit }) => {
    return (
        <div>
            <h2>Health and Safety</h2>
            <form>
                <label className="health-declaration-label">
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
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default HealthAndSafety;
