import React from "react";
import { useState } from "react";
import { STATUSES } from "../../constants";
import { withProfiler } from "../../HOCs";
import { useData } from "../../hooks";
import Balance from "../Balance";
import { BalanceData } from "../BalanceData";
import ChangeBalance from "../ChangeBalance";
import Transactions from "../Transactions/";
import { PlusButton } from './styles';

const Home = () => {
  // const [transactionsOld, setTransactions] = useState([]);
  const [isModalOpen,setModalOpen] = useState(false)
  // const [balance, setBalance] = useState(0);
  const { transactions, status, addTransaction, deleteTransaction, addFavorite } = useData()

  const makeTransaction = (money, comment) => {
    addTransaction({money,comment})
    // setBalance(balance + Number(money));
  };

  return (
    <>
    {transactions.length}
      <div
        style={{
          marginLeft: "5px",
          marginBottom: "15px",
          backgroundColor: "rgb(248,248,248)",
          padding: "8px",
          display: "inline-block",
          borderRadius: "4px",
        }}
      >
        {/* <Balance balance={balance} /> */}

        
        <BalanceData>
          {(balance)=><Balance balance={balance} /> }
        </BalanceData>


        <ChangeBalance isModalOpen={isModalOpen} setModalOpen={setModalOpen} makeTransaction={makeTransaction} />
        <PlusButton onClick={()=>setModalOpen(true)} >+</PlusButton>
      </div>
      {status === STATUSES.PENDING ? <h1>Loading...</h1> : null}
      {status === STATUSES.SUCCESS ? (
        <Transactions
          transactions={transactions}
          onDelete={deleteTransaction}
          onStarClick={addFavorite}
        />
      ) : null}
    </>
  );
};

export default withProfiler(Home,'Home');
