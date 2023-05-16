import React from "react";
import PropTypes from "prop-types";
import Model from "../Model/Model";
import moment from "moment";
import "./Item.css";

function Item(props) {
  const { date, distance } = props.item;
  return (
    <div className='step-item'>
      <div className='step-item-date'>{moment(date).format("DD/MM/YYYY")}</div>
      <div className='step-item-distance'>{distance.toFixed(0)}</div>
      <div className='step-item-actions'>
        <i className={"material-icons"} title='Edit' onClick={props.onEdit}>
          edit
        </i>
        <i className={"material-icons"} title='Delete' onClick={props.onRemove}>
          delete_outline
        </i>
      </div>
    </div>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.instanceOf(Model).isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};