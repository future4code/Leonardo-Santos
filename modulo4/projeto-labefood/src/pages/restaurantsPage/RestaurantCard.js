import React, { useState, useEffect, useContext } from 'react'
import { Card, InfoCard, Price, ImageContainer, Quantity } from './styles'
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { useParams } from "react-router-dom";
import { FormControl, MenuItem, Select } from "@material-ui/core"
import Button from "@material-ui/core/Button";
import GlobalStateContext from "../../global/GlobalStateContext";

export const RestaurantCard = (props, {product}) => {

    const { cartItems, setCartItems} = useContext(GlobalStateContext);
    

    const { id } = useParams();

    //váriavel com o estado do botão
    const [open, setOpen] = useState(false)

    //função que muda o estado para true e abre
    const handleClickOpen = () => {
        setOpen(true)
    }
    
    //função que muda o estado para false e fecha
    const handleClose = (product) => {
        setOpen(false)

        const exist = cartItems.find(x => x.id === product.id);
        if(exist) {
            setCartItems(
                cartItems.map((x)=> x.id === product.id ? {...exist, qty: exist.qty + 1} : x 
            
            )
        );
        }else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }

        
          
        
    }

    console.log("Cart:", cartItems)





    


 



    return (
        <Card>
            <ImageContainer>
                <img src={props.photo} alt="foto do lanche" />
            </ImageContainer>
            <InfoCard>
                <Quantity>
                    <h2 className='greenTitle'>{props.name}</h2>
                    <button>2</button>
                </Quantity>
                
                <p>{props.description}</p>
                <Price>
                    <h6>R$ {props.price}0</h6>   
                    <button onClick={handleClickOpen}>Adicionar</button> 

                    {/* configurações da caixa de dialogo */}
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Selecione a quantidade desejada</DialogTitle>
                        <DialogContent>
                            <FormControl>
                                <Select
                                    id="demo-simple-select-autowidth"
                                    autoWidth
                                    // value={form.quantity}
                                    // onChange={}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=>handleClose(product)} color="primary">
                                Adicionar Ao Carrinho
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Price>
            </InfoCard>


            
        </Card>
    )
}