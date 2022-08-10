import {useContext, useRef, useState} from 'react'
import Context from '../global/Context'
import {Card} from './style'



const CheapCard = (props)=>{
	const turn = useRef(null)
	const [mode, setMode] = useState(false)
	const {states} = useContext(Context)


	const onChangeMode = ()=>{
		setMode(true)
		if(mode){
			turn.current.style.transform = 'rotateY(180deg)'
			turn.current.style.transition = '1s'
		}
		if(props.name === props.shuffleName){
			alert(`Parabéns você encontrou ${props.shuffleName}`)
		}		
	}

	return<Card onClick={onChangeMode}>
				{!mode ?<div> <div>Encontre {props.shuffleName}</div>
					<div className='cards' ref={turn}>
					<img src={states.imageBackCard}/>
				</div></div> : <div>{props.name}<br/>
							<img src={`${states.imagesUrl}/${props.image}`}/>
						 </div>}							
		  </Card>
}
export default CheapCard 