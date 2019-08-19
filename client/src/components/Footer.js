import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>Smash<span> University</span></h3>
                <p className="footer-links">
                    <a href="">Inicio </a>
                    {/*·
                    <a href="#def">Perfil </a>
                    ·
                    <a to="/newpost">Crear Publicación </a>*/}
                </p>
                <p className="footer-company-name">Smash University</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Maracaibo</span> Zulia, Venezuela</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+XX XXX XXXXXX</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:mail@mail.com">mail@mail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Sobre Nosotros</span>
                    Dedicados a brindarle a la comunidad competitiva de Smash Ultimate un espacio para compartir nuevos descubrimientos acerca de sus personajes preferidos.
                </p>
                <div className="footer-icons">
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    );
}

    

export default Footer