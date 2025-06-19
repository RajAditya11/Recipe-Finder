import '../styles/Card.css';

const Card = ({ image, title, description, link }) => {
    return (
        <div className="card">
            <div className="card-items">
                <img src={image} alt={title} className="card-image" />
                <div className="card-content">
                    <h3 className='card-title'>{title}</h3>
                    <p className="card-description">{description}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">View Recipe</a>
                </div>
            </div>
        </div>
    );
};

export default Card;