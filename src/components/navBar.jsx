import '../styles/Nav.css';

function Menu() {
    return ( 
        <header>
        <nav>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src="/assets/img/deliveroo.png"/>
                </div>
                <div className="navbar-menu">
                    <a>Accueil</a>
                    <a>Les Restaurants</a>
                    <a>Panier</a>
                </div>
                <div className="navbar-social">
                    <img src="https://shop-cdn.presse-citron.net/instagram.jpg"/>
                </div>
            </div>
        </nav>
        </header>
     );
}

export default Menu;