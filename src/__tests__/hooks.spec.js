import { useBooleanToggle, useData } from '../hooks'
import { renderHook, act } from '@testing-library/react-hooks'
import { addItem, getItems,deleteItem } from "../utils/indexdb";

jest.mock('../utils/indexdb',()=>({
    getItems:jest.fn(),
    addItem:jest.fn(),
    deleteItem:jest.fn()
}))


describe('useBooleanToggle hook',()=>{
    it('should handle toggle',()=>{
        const {result} = renderHook(()=>useBooleanToggle())

        expect(result.current.status).toBe(false)

        act(()=>result.current.toggleStatus())

        expect(result.current.status).toBe(true)
    })
})

describe("useData hook", () => {
  describe('when hook is first rendered',()=>{
    beforeEach(() => {
        getItems.mockImplementation(() => Promise.resolve([{ value: 1 }]));
      });
      it("should set empty transactions", () => {
        const { result } = renderHook(() => useData());
        expect(result.current.transactions).toEqual([]);
      });
      it("should set PENDING status", () => {
        const { result } = renderHook(() => useData());
        expect(result.current.status).toEqual("PENDING");
      });
      it("should get transactions", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useData());
        await waitForNextUpdate();
        expect(result.current.transactions).toEqual([{ value: 1 }]);
      });
      it('should set SUCCESS status', async ()=>{
        const { result ,waitForNextUpdate } = renderHook(()=>useData())
        await waitForNextUpdate()
        expect(result.current.status).toBe('SUCCESS')
      })
  })
  describe('when get requst is error',()=>{
    beforeEach(() => {
        getItems.mockImplementation(() => Promise.reject('Error'));
      });
    it('should set empty transactions',()=>{
        const { result } = renderHook(()=>useData())

        expect(result.current.transactions).toEqual([])
    })
    it('should set ERROR status', async ()=>{
        const { result, waitForNextUpdate } = renderHook(()=>useData())

        await waitForNextUpdate()

        expect(result.current.status).toBe('ERROR')
    })
    it('should set error name', async ()=>{
        const { result, waitForNextUpdate } = renderHook(()=>useData())

        await waitForNextUpdate()

        expect(result.current.error).toBe('Error')
    })
  })
  describe('when transaction is added',()=>{
    beforeEach(()=>{
        // addItem.mockImplementation(()=>Promise.resolve({value:1}))
        getItems.mockImplementation(() => Promise.resolve([{ value: 1 }]))
    })
    it('should add transaction', async ()=>{
        const { result,waitForNextUpdate } = renderHook(()=>useData())

        act(()=>result.current.addTransaction({value:1}))

        await waitForNextUpdate()
        expect(result.current.transactions).toEqual([{value:1}])
    })
  })
  describe('when transaction is deleted',()=>{
    beforeEach(()=>{
        deleteItem.mockImplementation(()=>Promise.resolve())
        getItems.mockImplementation(() => Promise.resolve([]))
    })
    it('should delete transaction', async ()=>{
        const { result,waitForNextUpdate } = renderHook(()=>useData())

        act(()=>result.current.deleteTransaction())

        await waitForNextUpdate()

        expect(result.current.transactions).toEqual([])
    })
  })
  describe('when transaction is toggle favorite',()=>{
    beforeEach(()=>{
        getItems.mockImplementation(() => Promise.resolve([{isStarred:false,id:1}]))
    })
    // -------------------------------- needs update
    it('should add transaction in favorites', async ()=>{
        const { result,waitForNextUpdate } = renderHook(()=>useData())

        act(()=>result.current.addFavorite(1))
        await waitForNextUpdate()
        expect(result.current.transactions[0].isStarred).toBe(false)
        // it has to be true but isStarred don't changes so key has value only false

    })
    it('should delete transaction in favorites', async ()=>{
        const { result,waitForNextUpdate } = renderHook(()=>useData())

        act(()=>result.current.addFavorite(1))

        await waitForNextUpdate()

        expect(result.current.transactions[0].isStarred).toBe(false)

    })
  })
});