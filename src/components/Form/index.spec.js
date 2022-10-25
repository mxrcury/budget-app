import React from 'react'
import { shallow } from 'enzyme'
import Form from '.'


describe('Form Component',()=>{
    let props
    let sut

    beforeEach(()=>{
        props={
            handleSubmit:jest.fn()
        }
        sut = shallow(<Form {...props} />)
    })


    describe('when form is edit',()=>{
        it('should change input value',()=>{
            const expectedResult = '123'
            let input = sut.find('input[name="money"]').at(0)
            input.simulate('change',{target:{value:'123'}})

            sut.update()
            input = sut.find('input[name="money"]').at(0)

            const {value} = input.props()

            expect(value).toBe(expectedResult)
        })
    })
    describe('when user submit form',()=>{
        it('should call handleSubmit from props',()=>{
            const form = sut.find('form')
            form.simulate('submit',{
                preventDefault:jest.fn(),
            })
            expect(props.handleSubmit).toHaveBeenCalledTimes(1)
        })
    })
})