import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';
import Heading from '../../components/Heading/Heading';

const ShoppingView = () => (
    <AppContext.Consumer>
        {(context) => (
            <>
                <List filtr={context.minimal} items={context.products} />
            </>
        )}
    </AppContext.Consumer>
);

export default ShoppingView;