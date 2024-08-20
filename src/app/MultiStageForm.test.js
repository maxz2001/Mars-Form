import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultiStageForm from './MultiStageForm';

describe('MultiStageForm Component', () => {
    test('renders Personal Information form fields', () => {
        render(<MultiStageForm />);
        expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Date of Birth')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Nationality')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
    });

    test('validates required fields and shows alert on missing fields', () => {
        render(<MultiStageForm />);
        
        fireEvent.click(screen.getByText('Next'));

        expect(window.alert).toHaveBeenCalledWith('Please fill in all required fields.');
    });

    test('validates email format and shows alert on invalid email', () => {
        render(<MultiStageForm />);
        
        fireEvent.change(screen.getByPlaceholderText('Full Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'invalid-email' } });

        fireEvent.click(screen.getByText('Next'));

        expect(window.alert).toHaveBeenCalledWith('Please enter a valid email address.');
    });

    test('validates phone format and shows alert on invalid phone', () => {
        render(<MultiStageForm />);
        
        fireEvent.change(screen.getByPlaceholderText('Full Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Phone'), { target: { value: 'invalid-phone' } });

        fireEvent.click(screen.getByText('Next'));

        expect(window.alert).toHaveBeenCalledWith('Please enter a valid phone number.');
    });

    test('submits form when all fields are valid', () => {
        render(<MultiStageForm />);

        fireEvent.change(screen.getByPlaceholderText('Full Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Date of Birth'), { target: { value: '1990-01-01' } });
        fireEvent.change(screen.getByPlaceholderText('Nationality'), { target: { value: 'American' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Phone'), { target: { value: '+1234567890' } });
        
        fireEvent.click(screen.getByText('Next'));

        fireEvent.change(screen.getByPlaceholderText('Departure Date'), { target: { value: '2024-12-01' } });
        fireEvent.change(screen.getByPlaceholderText('Return Date'), { target: { value: '2025-01-01' } });
        fireEvent.change(screen.getByText('Space Hotel'), { target: { value: 'Space Hotel' } });

        fireEvent.click(screen.getByText('Next'));

        fireEvent.change(screen.getByText('Yes'), { target: { value: 'Yes' } });
        fireEvent.change(screen.getByPlaceholderText('Emergency Contact Information'), { target: { value: 'Jane Doe' } });

        fireEvent.click(screen.getByText('Submit'));

        expect(window.alert).toHaveBeenCalledWith('Form Submitted Successfully!');
    });
});

beforeAll(() => {
    window.alert = jest.fn(); // Mock alert
});
