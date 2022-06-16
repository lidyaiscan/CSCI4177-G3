import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../../assets/products.jpg';
import stock from "../../assets/stock.jpg";
import sales from '../../assets/sales.jpg';
import schedule from '../../assets/schedule.jpg';

function AdminDashboard() {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const navigateProducts = () => {
        navigate('/adminProducts')
    }

    return (
        <div className="AdminDashboard">
            <div className="Cards">
                <Card style={{ width: '320px' }}>
                    <Button variant="light" onClick={navigateProducts}>Products</Button>
                    <Card.Img variant="bottom" src={products} />
                </Card>
                <Card style={{ width: '320px' }}>
                    <Button variant="light">Sales</Button>
                    <Card.Img variant="bottom" src={sales} />
                </Card>
            </div>
            <div className="Cards">
                <Card style={{ width: '320px' }}>
                    <Button variant="light">Stock</Button>
                    <Card.Img variant="bottom" src={stock} />
                </Card>
                <Card style={{ width: '320px' }}>
                    <Button variant="light">Schedule</Button>
                    <Card.Img variant="bottom" src={schedule} />
                </Card>
            </div>
        </div>
    )
}

export default AdminDashboard;