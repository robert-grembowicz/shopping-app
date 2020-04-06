import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ProductsView = () => (
    <AppContext.Consumer>
        {(context) => (
            <>
                <List items={context.products} />
            </>
        )}
    </AppContext.Consumer>
);

export default ProductsView;