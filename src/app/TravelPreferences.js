import React, { useState, useEffect } from 'react';

const TravelPreferences = ({ formData, handleChange, nextStep, prevStep }) => {
    const [isNextEnabled, setIsNextEnabled] = useState(false);
    const [minReturnDate, setMinReturnDate] = useState('');

    useEffect(() => {
        if (formData.departureDate) {
            setMinReturnDate(formData.departureDate);
        }

        const isFormValid = formData.departureDate &&
                            formData.returnDate &&
                            formData.accommodation &&
                            new Date(formData.departureDate) < new Date(formData.returnDate);

        setIsNextEnabled(isFormValid);
    }, [formData]);

    return (
        <div>
            <h2>Travel Preferences</h2>
            <form>
                <label className="white-label">
                    Departure Date
                    <input
                        type="date"
                        value={formData.departureDate}
                        onChange={handleChange('departureDate')}
                        required
                    />
                </label>
                <label className="white-label">
                    Return Date
                    <input
                        type="date"
                        value={formData.returnDate}
                        onChange={handleChange('returnDate')}
                        required
                        min={minReturnDate}
                    />
                </label>
                <label className="white-label">
                    Accommodation Preference
                    <select
                        value={formData.accommodation}
                        onChange={handleChange('accommodation')}
                        required
                    >
                        <option value="">Select Accommodation</option>
                        <option value="Space Hotel">Space Hotel</option>
                        <option value="Martian Base">Martian Base</option>
                    </select>
                </label>
                <textarea
                    placeholder="Special Requests or Preferences"
                    value={formData.specialRequests}
                    onChange={handleChange('specialRequests')}
                ></textarea>
                <button type="button" onClick={prevStep}>
                    Previous
                </button>
                <button type="button" onClick={nextStep} disabled={!isNextEnabled}>
                    Next
                </button>
            </form>
        </div>
    );
};

export default TravelPreferences;
