import './blog1.css';

const Blog1 = ({name, quote, image, occ}) =>{
    return (
        <div className="blog-container">
            <div className="blog-post-container item">
                <p>"{quote}"</p>
            </div>

            <div className='blog-author-container item'>
                <div className="blog-pic-container item">
                    <img src={image} alt={name}/>
                </div>

                <div>
                    <p className='name'>{name}</p>
                    <p className='occ-name'>{occ}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog1;