
import Blog1 from './Blog1/Blog1';
import Blog2 from './Blog2/Blog2';
import blogs from './blogs';

export default function BlogHolder() {
    let isBlogged = true;

    const bloger = blogs.map((b1) => {

        if(isBlogged){
            isBlogged = false;
            return (
                <div key={b1.id}>
                    <Blog1
                        name={b1.name}
                        quote={b1.quote}
                        image={b1.image}
                        occ={b1.occ}
                    />
                    <hr/>
                </div>
            )
        }else{
            isBlogged = true;
            return (
                <div key={b1.id}>
                    <Blog2 
                        name={b1.name}
                        quote={b1.quote}
                        image={b1.image}
                        occ={b1.occ}
                    />
                    <hr/>
                </div>
            )
        }
    });

    return (
        <div className="blogs-container">
            <center>
                {bloger}
            </center>
        </div>
    )
}