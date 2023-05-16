import './App.css'; 

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="footer">
            <p>&#169;Prasanna Biswas {year}</p>
        </div>
    );
}

export default Footer;