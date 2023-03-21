import '../styles/CardStyle.css';

function Card() {
    return (  
        <div className="card">
            <div className="card-header">
                <img src="https://via.placeholder.com/300x150"/>
            </div>
            <div className="card-body">
                <h4>Title</h4>
                <p>Description Description Description Description Description Description Description Description</p>
            </div>
            <div className="card-footer">
                <button>Ajouter au Panier</button>
            </div>
        </div>
    )
}

export default Card;