import {useEffect, useState, useContext} from 'react'
import TarotCard from '../components/TarotCard'
import axios from 'axios'
import Context from '../global/Context'
import {Container} from './style'



const Home = (props)=>{
	const {states, setters, requests} = useContext(Context)


	useEffect(()=>{
		requests.getCards()
	}, [])



	return<div><p className='btn'><button onClick={()=> props.changePage('cheap')}>Jogar</button></p>
			<Container>			
				{states.cards.map(card=>{
					return<TarotCard key={card.name}
							name={card.name}
							image={card.image}/>
				})}
		    </Container> 

		  </div>
}
export default Home