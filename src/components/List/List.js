import React from 'react';
import styles from './List.module.scss';
import ListItem from './ListItem/ListItem';

class List extends React.Component {

    filtreredItems = () => {
        const filters = this.props.items.filter(item => (
            item.quantity <= this.props.filtr
        ))
        return filters
    }

    render() {

        const items = this.props.filtr ? this.filtreredItems() : this.props.items;

        return (
            <>
            { console.log(items) }
            { items ? (
                <ul className={styles.wrapper}>
                    {items.map(item => (
                        <ListItem key={item.id} {...item} />
                ))}
                </ul>
            ) : (
                <h1 className={styles.h1}>You don't have any products. Please add some :)</h1>
            ) }
            </>
        );
    }
}

export default List;