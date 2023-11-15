import './blog2.css';

const Blog2 = ({name, quote, image, occ}) =>{
    return (
        <div className="blog2-container">
            <div className='blog2-author-container item'>
                <div className="blog2-pic-container item">
                    <img src={image} alt={name}/>
                </div>

                <div>
                    <p className='name'>{name}</p>
                    <p className='occ-name'>{occ}</p>
                </div>
            </div>

            <div className="blog2-post-container item">
                <p>"{quote}"</p>
            </div>
        </div>
    )
}

export default Blog2;