import './hero.css'
import Backimg from './sm_back_web-razvoj--dizajn--programiranje--uputstva--tutorijali--primeri--linkovi.jpg'
function Hero() {
    return (      
        <header class="layout-header anim-start-header" id="layout-100vh">
            <figure>
                <img src={Backimg} alt="web dev"/>
            </figure>
            <div>
                <h1>Web development backend-frontend</h1>
                <p>HTML5, CSS3, PHP, javaScript, Yii2, React Express.js...</p>
            </div>
        </header>   
        );
   }
export default Hero