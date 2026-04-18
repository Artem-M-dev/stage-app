import './contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <h2 className="contacts__title">Our Contacts</h2>
            <div className="contacts__wrapper">
                <div className="contacts__info">
                    <p className="contacts__info-subtitle">For all Library inquiries:</p>
                    <div className="contacts__info-text">
                        <p>Please call <a href="">(617) 730-2370</a></p>
                        <p>For TTY service, please call <a href="">(617) 730-2370</a></p>
                        <p>Putterham Library: <a href="">(617) 730-2385</a></p>
                    </div>
                    <div className="contacts__info-text">
                        <p className="contacts__info-subtitle">Senior Staff</p>
                        <p>Library Director: <span>Amanda Hirst</span></p>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5167.735627447493!2d-73.99387252255467!3d40.69564577139617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a49b649b8c3%3A0x6342a2291cea2e!2s286%20Cadman%20Plz%20W%2C%20Brooklyn%2C%20NY%2011201%2C%20USA!5e1!3m2!1sen!2sru!4v1776538832406!5m2!1sen!2sru" width="700" height="415" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contacts;