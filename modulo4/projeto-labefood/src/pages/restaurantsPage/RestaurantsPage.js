import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header"
import { RestaurantCard } from './RestaurantCard';
import { Main, Container, RestaurantInfo } from './styles'
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_URL } from "../../constants/URL"
import GlobalStateContext from "../../global/GlobalStateContext";

export default function RestaurantsPage(props) {

    //váriaveis que guardam os dados dos restaurantes
    const { states, cartItems} = useContext(GlobalStateContext);
    const { restaurantes } = states;


    //váriavel para guardar os dados do restaurante selecionado
    const [selectedRestaurantProducts, setSelectedRestaurantProducts] = useState([]);
    
    //váriavel para pegar o id do restaurante via URL
    const { id } = useParams();

    //map para gerar lista categorias
    const listCategory = selectedRestaurantProducts && selectedRestaurantProducts.map((product) => {
        return <p>{product.category}</p>
    })

    //função para pegar os detalhes do restaurante via API
    useEffect(() => {
        
        const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJjQXBxSzVCY3ZlVWxodzNBdWhhIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldnRlc3RlQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTExLjExMS4yMjItMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXp6eiwgMTc3OCwgNzExIC0gVmlsYSBOLiBDb25jZWnDp8Ojb28iLCJpYXQiOjE2NDUxMTgwODN9.J2c7hQS-Al-e7aEwm4gmpFXm1tf10EvNIsEhYuW-2pI"
        console.log("VALIDAR TOKEN:", auth)
        axios
        .get(`${base_URL}restaurants/${ id }`, {
            headers: {
                auth: auth
            }
        })
        .then((res) => setSelectedRestaurantProducts(res.data.restaurant.products))
        .catch((err)=> console.log(err.response.message))
    }, [])

    console.log(selectedRestaurantProducts)

    
    return(
        <Main>
            <Header
                pageName={"Restaurante"}
            />

            <Container>

                {restaurantes && restaurantes.map((restaurante) => {
                    if(id === restaurante.id) {
                        return <RestaurantInfo key={restaurante.id}> 
                                    <img src={restaurante.logoUrl} alt="imagem restaurante" />
                                    <h1 className="greenTitle">{restaurante.name}</h1>
                                    <p>{restaurante.category}</p>
                                    <div>
                                        <p>{restaurante.deliveryTime} min</p>
                                        <p className="space">Frete R$ {restaurante.shipping},00</p>
                                    </div>
                                    <p>{restaurante.address}</p>
                                </RestaurantInfo>
                    }
                })}
                
                {/* tudo que não for bebida e acompanhamento entra aqui :) */}
                <h3>Principais</h3>
                {selectedRestaurantProducts && selectedRestaurantProducts.map((product) => {
                        if(product.category !== "Bebida" && product.category !== "Acompanhamento" ) {
                            return <RestaurantCard key={product.id} 
                            name={product.name}
                            description={product.description}
                            photo={product.photoUrl}
                            price={product.price}/>
                        }
                })}

                {/* tudo que for acompanhamento entra aqui :) */}
                <h3>Acompanhamentos</h3>
                {selectedRestaurantProducts && selectedRestaurantProducts.map((product) => {
                        if(product.category === "Acompanhamento" ) {
                            return <RestaurantCard key={product.id} 
                            name={product.name}
                            description={product.description}
                            photo={product.photoUrl}
                            price={product.price}/>
                        }
                })}

                {/* tudo que for bebida entra aqui :) */}
                <h3>Bebidas</h3>
                {selectedRestaurantProducts && selectedRestaurantProducts.map((product) => {
                        if(product.category === "Bebida" ) {
                            return <RestaurantCard key={product.id} 
                            name={product.name}
                            description={product.description}
                            photo={product.photoUrl}
                            price={product.price}/>
                        }
                })}

            </Container>
            
        </Main>
    )
}