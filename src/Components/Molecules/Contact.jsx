import "../../styles/Body/contact.css"
import Button from "../Atoms/Button";

function Contact () {
    return (
        <div className="contact">
            <h1> Contact </h1>

            <div className="contact_section">
                <p> I&apos;m Always Open To Work With You </p>
                <h2> Highly Interested in Frontend work </h2>

                <form>
                    <div className="name">
                        <label> Name * </label>
                        <input type="text" required/>
                    </div>

                    <div className="mobile">
                        <label> Mobile * </label>
                        <input type="tel" pattern="[0-9]{10}" required />
                    </div>

                    <div className="email">
                        <label> Email * </label>
                        <input type="email" required />
                    </div>

                    <div className="message">
                        <label> Message * </label>
                        <input type="textarea" required />
                    </div>

                    <Button className="button_submit" type="submit"> Submit </Button>

                </form>
            </div>
        </div>
    );
}

export default Contact;