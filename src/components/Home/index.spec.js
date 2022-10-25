import React from 'react'
import { mount } from 'enzyme'
import Home from '.'
import {act} from 'react-dom/test-utils'
import { addItem, getItems } from "../../utils/indexdb";

jest.mock('../../utils/indexdb',()=>({
    getItems:jest.fn(),
    addItem:jest.fn()
}))


describe('Home components',()=>{
    let sut;
    let props;

    describe('when component is mounted',()=>{
        describe('when component are returned succesfully',()=>{
            beforeEach(()=>{
                getItems.mockImplementation(()=> Promise.resolve([{value:1}]))
            })
            beforeEach( async()=>{
                await act(async()=>{
                    sut = mount(<Home {...props} />)
                })
                sut.update()
            })
            it('balance should be 0',()=>{
                const {balance} = sut.find('Balance').at(0).props()
                expect(balance).toBe(0)
            })
            it('should render component with one item',()=>{
                const { transactions } = sut.find('Transactions').at(0).props()
                expect(transactions).toEqual([{value:1}])
            })
        })
        describe('when component are returned with error',()=>{
            let consoleSpy
            beforeEach(()=>{
                consoleSpy = jest.spyOn(console,'error')
                getItems.mockImplementation(()=> Promise.reject('Error'))
            })
            beforeEach( async()=>{
                await act(async()=>{
                    sut = mount(<Home {...props} />)
                })
                sut.update()
            })
            it('should render transactions with empty items',()=>{
                const { transactions } = sut.find('Transactions').at(0).props()
                expect(transactions).toEqual([])
            })
            it('should console error message',()=>{
                expect(consoleSpy).toHaveBeenCalled()
            })
        })
        describe('when transaction is added',()=>{
            it('change balance',()=>{
                const expectedBalance = 1
                const expectedComment = ''
                const { handleSubmit } = sut.find('Form').at(0).props()
                handleSubmit(expectedBalance,expectedComment)
                sut.update()
                const { balance } = sut.find('Balance').at(0).props()
                expect(balance).toBe(1)
            })
        })

    })

})