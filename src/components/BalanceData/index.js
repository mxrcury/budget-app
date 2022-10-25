import { useState } from 'react';
import PropTypes from 'prop-types'

export const BalanceData = ({children}) => {
    const [balance] = useState(2)
    return (
        <>
        {children(balance)}
        </>
    )
}

BalanceData.propTypes = {
    children:PropTypes.func.isRequired
}