import React, { useState } from 'react'
import { Button, Card ,Alert} from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import CentredContainer from './CentredContainer';

export default function Profile() {
  const [error,setError] = useState('');
  const {currentUser,logout} = useAuth();
  const navigate = useNavigate();


  async function handleLogout() {
    setError('');
    try{
      await logout();
      Navigate('/dashboard');
    } catch {
      setError('Failed to Log Out');
    }

  }

  return (
    <CentredContainer>
      <Card>
      <Card.Body>
      <h2 className='text-center mb-4'>Profile</h2>
      {error && <Alert variant='danger'>{error}</Alert>}
      <strong>Email:</strong>{currentUser.email}
      <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
      </Card.Body>
      </Card>
        <div className='w-100 text-center mt-2'>
          <Button variant='link' onClick={handleLogout}>Log Out</Button>
        </div>
    </CentredContainer>
  )
}
