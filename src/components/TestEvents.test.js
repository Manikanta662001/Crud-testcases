import {render,cleanup,fireEvent} from '@testing-library/react'
import TestEvents from './TestEvents'

afterEach(cleanup)
describe('Tests for TestEvents compo',()=>{
    it("increment by clicking button",()=>{
        const {getByTestId,getByRole} = render(<TestEvents/>)
        const incbtn = getByTestId('Arrow-up')
        fireEvent.click(incbtn)
        expect(getByRole('heading')).toHaveTextContent(1)
    
    })
    it("decrement by clicking button",()=>{
        const {getByTestId,getByRole} = render(<TestEvents/>)
        const decbtn = getByTestId('Arrow-down')
        fireEvent.click(decbtn)
        expect(getByRole('heading')).toHaveTextContent(-1)
    
    })
})