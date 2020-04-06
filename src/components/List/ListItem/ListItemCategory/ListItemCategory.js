import React from 'react';
import AppContext from '../../../../context';
import styles from './ListItemCategory.module.scss';
import defaultImg from '../../../../assets/img/food.svg'

const ListItemCategory = ({category}) => {

    let src = '';

    return (
    
        <AppContext.Consumer>
            {(context) => (
                <span className={styles.categoryImgHld}>
                {
                    context.categories.map(element => {
                        if (element.name === category) {
                            src=element.src
                        }
                    })
                }
                <img className={styles.categoryImg} src={src} alt=""/>
                </span>
            )}
        </AppContext.Consumer>
    )
}

export default ListItemCategory;