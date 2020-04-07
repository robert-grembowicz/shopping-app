import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';
import Heading from '../../components/Heading/Heading';

const ProductsView = () => (
    <AppContext.Consumer>
        {(context) => (
            <>
                {
                    context.products.length ? (
                        <List items={context.products} />
                    ) : (
                        <Heading isDark={context.isDark} >No products :( <br /> Please add some!</Heading>
                    )
                }
            </>
        )}
    </AppContext.Consumer>
);

export default ProductsView;