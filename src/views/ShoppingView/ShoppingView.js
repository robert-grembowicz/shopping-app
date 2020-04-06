import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ShoppingView = () => (
    <AppContext.Consumer>
        {(context) => (
            <>
                <List filtr={2} items={context.products} />
            </>
        )}
    </AppContext.Consumer>
);

export default ShoppingView;