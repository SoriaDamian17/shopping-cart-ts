import styled from 'styled-components';

const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: catamaran;
    border-bottom: 1px solid lightblue;
    padding: 0 0 20px 0;

    div {
        flex: 1;
    }

    .information,
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 80px;
        object-fit: cover;
        margin: 0 0 0 40px;
    }
`;

export {
    CartItemWrapper
}