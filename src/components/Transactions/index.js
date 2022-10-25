import PropTypes from "prop-types";
import { Icon, Wrapper } from "./styles";
import React, { useContext } from 'react';
import AppContext from "../../providers/context";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const Transactions = ({ transactions = [], onDelete, onStarClick }) => {

  const { state } = useContext(AppContext)

  return (
    <>
      {transactions.map((el, index) => (
        <Wrapper key={`${el}_${index}`} style={{background:Number(el.value) < 0 ? 'rgb(175, 175, 175)' : 'white'}}>
          <Icon
            onClick={() => {
              onStarClick(el.id);
            }}
          >
            {el.isStarred ? (
              <StarIcon sx={{ cursor: "pointer", color: "orange" }} />
            ) : (
              <StarOutlineIcon sx={{ cursor: "pointer" }} />
            )}
          </Icon>

          <div>
            {Number(el.value).toFixed(2)} {state.currency}
          </div>
          <div> {el.comment}</div>
          <div>{el.date}</div>
          <button onClick={() => onDelete(el.id)}>Delete</button>
        </Wrapper>
      ))}
    </>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
  onDelete:PropTypes.func,
  onStarClick:PropTypes.func,
};

export default Transactions;
