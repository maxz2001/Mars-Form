import React from 'react';

const TravelPreferences = ({ formData, handleChange, nextStep, prevStep }) => {
    return (
        <div>
            <h2>Travel Preferences</h2>
            <form>
                <input
                    type="date"
                    placeholder="Departure Date"
                    value={formData.departureDate}
                    onChange={handleChange('departureDate')}
                    required
                />
                <input
                    type="date"
                    placeholder="Return Date"
                    value={formData.returnDate}
                    onChange={handleChange('returnDate')}
                    required
                />
                <select
                    value={formData.accommodation}
                    onChange={handleChange('accommodation')}
                    required
                >
                    <option value="">Select Accommodation</option>
                    <option value="Space Hotel">Space Hotel</option>
                    <option value="Martian Base">Martian Base</option>
                </select>
                <textarea
                    placeholder="Special Requests or Preferences"
                    value={formData.specialRequests}
                    onChange={handleChange('specialRequests')}
                ></textarea>
                <button type="button" onClick={prevStep}>
                    Previous
                </button>
                <button type="button" onClick={nextStep}>
                    Next
                </button>
            </form>
        </div>
    );
};

export default TravelPreferences;
