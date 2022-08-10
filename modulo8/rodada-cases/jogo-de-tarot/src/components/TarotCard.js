import {useState, useContext} from 'react'
import Context from '../global/Context'
import {Card} from './style'


const TarotCard = (props)=>{
	const {states, setters, requests} = useContext(Context)


	return<Card className='fade'>
				<div>{props.name}<br/>
					<img src={`${states.imagesUrl}/${props.image}`}/>
				</div>
		  </Card>
}
export default TarotCard 