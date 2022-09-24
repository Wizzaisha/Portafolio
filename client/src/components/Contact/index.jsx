import { useState } from "react";
import LoadingPage from "../LoadingPage";
import "./Contact.css";
import { Link } from "react-router-dom";


const FORM_ENDPOINT = "https://public.herotofu.com/v1/1e0bd770-3c31-11ed-a10f-d1a38bd15d37";

function Contact () {

    const [input, setInput] = useState({
        "name": "",
        "email": "",
        "subject": "",
        "message": ""
    });

    const [loadingStatus, setLoadingStatus] = useState(false);
    const [activateGreetings, setactivateGreetings] = useState(false);

    function handleChange (event) {
        const { name, value } = event.target;

        setInput({
            ...input,
            [name]: value
        });
    }

    function handleSubmit (event) {
        event.preventDefault();
        
        setLoadingStatus(true);
        
        fetch(FORM_ENDPOINT, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(input)
        })
        .then((response) => {
            setLoadingStatus(false);
            if (response.status === 200) setactivateGreetings(true);
        });

        setInput({
            "name": "",
            "email": "",
            "subject": "",
            "message": ""
        });
        
    }
    if (loadingStatus) return <LoadingPage />

    return (

        activateGreetings 
            ?   
                <div className="greetingsContainer">
                    <h4>Mensaje enviado</h4>
                    <p>Gracias!, pronto me estare comunicando contigo.</p>
                    <Link to={"/contact"}><button className="btn btn-success" onClick={() => setactivateGreetings(false)}>Regresar</button></Link>
                </div> 
            :
                <form 
                    onSubmit={handleSubmit}
                >
                    <div className="container-fluid formContainer">
                        <div className="formInput">
                            <label className="form-label">
                                Nombre
                            </label>
                            <input value={input.name} onChange={handleChange} className="form-control" id="name" type={"text"} name="name" placeholder="Nombre..." required></input>
                        </div>
                        <div className="formInput">
                            <label className="form-label">
                                Email
                            </label>
                            <input value={input.email} onChange={handleChange} className="form-control" id="email" type={"email"} name="email" placeholder="Email..." required></input>
                        </div>
                        <div className="formInput">
                            <label className="form-label">
                                Asunto
                            </label>
                            <input value={input.subject} onChange={handleChange} className="form-control" id="subject" type={"text"} name="subject" placeholder="Asunto..."></input>
                        </div>
                        <div className="formInput">
                            <label className="form-label">
                                Mensaje
                            </label>
                            <textarea value={input.message} onChange={handleChange} className="form-control" id="message" rows={"5"} type={"text"} name="message" placeholder="Mensaje..." required></textarea>
                        </div>
                        <div>
                            <input className="btn btn-success" type="submit" value={"Enviar"}></input>
                        </div>
                    </div>
                </form>

    )
}


export default Contact;
