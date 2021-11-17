import s from "./snakeLayer.module.css"
import groundGrass from "./../../img/2.png"
import body from "./../../img/Rectangle 377.png"
import head from "./../../img/Mask Group.png"
import footer from "./../../img/Rectangle 378.png"

const GroundLayer = () => {
    return(
        <div className = {s.mainContainer}>
            <div className = {s.programmingArea}>
                <textarea className = {s.textArea} placeholder = "Write code and play" ></textarea>
            </div>
            <div className = {s.containerGroundScore}>
                <div className = {s.score}>
                    Score: 0
                </div>
                <div>
                    <img class = {s.groundArea} src = {groundGrass} alt = "groundGrass"/>
                </div>
                    <div class = {s.snakeContainer}>
                        <img class = {s.snakeFooter} id="top" src={footer}/>
                        <img class = {s.snakeBody} id="top" src={body} />
                        <img class = {s.snakeHead} id="top" src= {head}/>
                    </div>
            </div>
        </div>
    )
}

export default GroundLayer