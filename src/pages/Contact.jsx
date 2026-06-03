import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-panel">
                <p className="contact-label">Company Contact</p>
                <h1>IronStore Admin Services</h1>
                <p className="contact-description">
                    IronStore Admin Services is a fictional e-commerce operations company
                    that helps small shops manage products, stock, and customer orders.
                </p>

                <div className="contact-details">
                    <p>
                        <strong>Address:</strong> 42 Commerce Street, 10115 Berlin, Germany
                    </p>
                    <p>
                        <strong>Email:</strong> support@ironstore.example
                    </p>
                    <p>
                        <strong>Phone:</strong> +49 30 1234 5678
                    </p>
                    <p>
                        <strong>Office Hours:</strong> Monday to Friday, 9:00 - 17:00
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Contact
