import React from 'react';
import CardInfo from '../components/CardInfo'
import Paper from '@material-ui/core/Paper';

function Card(props) {
  return (

    <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
      <Paper elevation={3}>
        <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      </Paper>
      {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
    </div>
  )
}

export default Card;
