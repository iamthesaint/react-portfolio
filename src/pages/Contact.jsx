import { Form } from 'react-bootstrap';
import './Contact.css';
import FormControl from 'react-bootstrap/FormControl'


export default function Contact(){
    return (
        <section className="container">
            <h1>Connect with me</h1>
            <form className="form-font-size">
                <div className="mb-3">
                    <label for="nameInput" className="form-label">Name :</label>
                    <FormControl type="text" size="sm" className="form-control" placeholder="como te llamas" />
                </div>
                <div className="mb-3">
                    <label for="emailInput" className="form-label">Email Address :</label>
                    <FormControl type="email" size="sm" className="form-control" id="email" placeholder="hola@hola.com"/>   
                </div>
                <div className="mb-3">
                    <label for="messageInput" className="form-label">Message :</label>
                    <FormControl as="textarea" size="sm" className="form-control" id="message" rows="2" placeholder="talk to me..." />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>
        </section>
    );
}