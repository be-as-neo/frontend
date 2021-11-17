import s from "./snakeLayer.module.css"
import groundGrass from "./../../img/2.png"
const GroundLayer = () => {
    return(
        <div className = {s.mainContainer}>
            <div className = {s.programmingArea}>
                <textarea className = {s.textArea} placeholder = "Write code and play" >

                </textarea>
            </div>
            <div className = {s.containerGroundScore}>
                <div className = {s.score}>
                    Score: 0
                </div>
                <div>
                    <img src = {groundGrass} alt = "groundGrass"/>
                </div>
            </div>
        </div>
    )
}

export default GroundLayer