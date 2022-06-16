import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AdminLogin() {

    const navigate = useNavigate();

    const navigateAdminDashboard = () => {
        navigate('/adminDashboard')
    }

    return (
        <div className="AdminLogin">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Admin Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="dark" onClick={navigateAdminDashboard}>LOG IN</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    )
}

export default AdminLogin;