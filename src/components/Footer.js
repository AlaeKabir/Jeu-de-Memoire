import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer mt-auto py-4">
      <Container className='text-center'>
        <div className="text-center small">
          © 2025 MP - Made by Alae & Lina
        </div>
      </Container>
    </footer>
  );
}