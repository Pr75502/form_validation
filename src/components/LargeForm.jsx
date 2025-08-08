import React from 'react';
import { useForm } from 'react-hook-form';

const LargeForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const country = watch('country');

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <h2>Large Form with Validation</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            type="text"
            {...register('fullName', {
              required: 'Full Name is required',
              minLength: { value: 3, message: 'Full Name must be at least 3 characters' },
            })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.fullName && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.email.message}</p>}
        </div>

       
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
              },
            })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.password.message}</p>}
        </div>

       
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) => value === watch('password') || 'Passwords do not match',
            })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.confirmPassword && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.confirmPassword.message}</p>}
        </div>

        
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            {...register('age', {
              required: 'Age is required',
              min: { value: 18, message: 'You must be at least 18 years old' },
              max: { value: 99, message: 'You must be less than 100 years old' },
            })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.age && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.age.message}</p>}
        </div>

       
        <div>
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            {...register('country', { required: 'Country is required' })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </select>
          {errors.country && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.country.message}</p>}
        </div>

        
        {country === 'USA' && (
          <div>
            <label htmlFor="state">State:</label>
            <input
              id="state"
              type="text"
              {...register('state', {
                required: 'State is required when Country is USA',
                minLength: { value: 2, message: 'State must be at least 2 characters' },
              })}
              style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
            />
            {errors.state && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.state.message}</p>}
          </div>
        )}

       
        <div>
          <label htmlFor="address1">Address Line 1:</label>
          <input
            id="address1"
            type="text"
            {...register('address1', { required: 'Address Line 1 is required' })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.address1 && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.address1.message}</p>}
        </div>

        
        <div>
          <label htmlFor="address2">Address Line 2 (Optional):</label>
          <input
            id="address2"
            type="text"
            {...register('address2')}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

       
        <div>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            {...register('city', { required: 'City is required' })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.city && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.city.message}</p>}
        </div>

      
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            id="zipCode"
            type="text"
            {...register('zipCode', {
              required: 'Zip Code is required',
              pattern: {
                value: /^\\d{5}(-\\d{4})?$/,
                message: 'Invalid Zip Code format (e.g., 12345 or 12345-6789)',
              },
            })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.zipCode && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.zipCode.message}</p>}
        </div>

        
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            id="phoneNumber"
            type="tel"
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^\\d{10}$/,
                message: 'Invalid phone number (10 digits required)',
              },
            })}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          {errors.phoneNumber && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.phoneNumber.message}</p>}
        </div>

      
        <div>
          <label htmlFor="occupation">Occupation:</label>
          <input
            id="occupation"
            type="text"
            {...register('occupation')}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

       
        <div>
          <label htmlFor="bio">Bio (Optional):</label>
          <textarea
            id="bio"
            {...register('bio', { maxLength: { value: 200, message: 'Bio cannot exceed 200 characters' } })}
            rows="4"
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          ></textarea>
          {errors.bio && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.bio.message}</p>}
        </div>

        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            id="terms"
            type="checkbox"
            {...register('terms', { required: 'You must accept the terms and conditions' })}
            style={{ width: 'auto' }}
          />
          <label htmlFor="terms">I agree to the terms and conditions</label>
          {errors.terms && <p style={{ color: 'red', fontSize: '0.8em', marginTop: '5px' }}>{errors.terms.message}</p>}
        </div>

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1em' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LargeForm;
