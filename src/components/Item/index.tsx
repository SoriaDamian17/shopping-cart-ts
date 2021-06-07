import React from 'react';
import Button from '@material-ui/core/Button';

import {CartItemType} from '../../ts/types/cart.types';
import { ItemWrapper } from './item.styles';

interface Props {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item:React.FC<Props> = ({
    item,
    handleAddToCart
}) => {
    return (
        <ItemWrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>
                Add To cart
            </Button>
        </ItemWrapper>
    )
}

export default Item;