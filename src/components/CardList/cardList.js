import React from 'react';
import Card from '../Card/card';
import './cardList.css'

function cardList(props) {
    const {list} =props;
//console.log('ppp',props)

    return (
        <div className="card-list">
           {
                list  && list.map(element=> <Card key={element.id} item={element} />)
           }           
        </div>
    )
}
export default  cardList;