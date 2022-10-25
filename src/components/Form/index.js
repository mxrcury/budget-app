import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const Form = ({ handleSubmit,setModalOpen }) => {
  const [commentValue, setCommentValue] = useState('');
  const [moneyValue, setMoneyValue] = useState('');

  const onChangeComment = (e) => {
    const { value } = e.target;
    setCommentValue(value)
  };
  const onChangeMoney = (e) => {
    const { value } = e.target;
    setMoneyValue(value)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false)
    handleSubmit(moneyValue,commentValue)
    setMoneyValue('')
    setCommentValue('')
  };

  return (
    <form
      onSubmit={onSubmit}
      // style={{
      //   marginLeft: "5px",
      //   marginBottom: "15px",
      //   backgroundColor: "rgb(248,248,248)",
      //   padding: "8px",
      //   display: "inline-block",
      //   borderRadius: "4px",
      // }}
    >
      <input
        style={{ marginBottom: "10px" }}
        name="money"
        type="number"
        value={moneyValue}
        onChange={onChangeMoney}
        placeholder='Cash...'
      />
      <div>
        <textarea
          style={{ width: "300px" }}
          name="comment"
          type="text"
          value={commentValue}
          onChange={onChangeComment}
          placeholder='Comment...'
        />
      </div>
      <Button>Add</Button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
