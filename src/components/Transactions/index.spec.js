import React from 'react'
import Transactions from '.'
import {shallow} from 'enzyme'


describe('Transaction component',()=>{
    it('should show transaction',()=>{
        const sut = shallow(<Transactions/>)
        
        expect(sut).toMatchSnapshot()
    })
})