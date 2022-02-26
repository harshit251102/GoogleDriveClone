import { async } from '@firebase/util';
import React, {useRef,useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import {useAuth} from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import CentredContainer from './CentredContainer';

export default function ForgotPassword() {

    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState("");
    const emailRef = useRef();
    const {resetPassword} = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for futher instructions');
        } catch {
            setError('Failed to Reset Password');
        }
        setLoading(false);
    }

    return (
        <CentredContainer>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Password Reset</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email" className='mb-2'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 mt-4' type='submit'>Reset Password</Button>
                    </Form>
                    <div className='w-100 text-center mt-2'>
                        <Link to="/login">Log In?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </CentredContainer>
    )
}
