import data from './data.json'
import './articles.scss'

function Articles() {
    const arts = data.map(art => 
        <li>
        <h2>{art.title}</h2>
        <p>{art.description}</p>
    </li>);
    return (
        <ul className="flex-articles">
                {data.map(art =>
                    <li>
                        <h2>{art.title}</h2>
                        <p>{art.description}</p>
                    </li>
                    )}
            </ul>
            
    )

}
export default Articles