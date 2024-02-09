import {render,cleanup,fireEvent,waitFor,screen} from '@testing-library/react'
import TestAsync from './TestAsync'

afterEach(cleanup)
describe('Tests for TestAsync',()=>{
    it("increment after 2 seconds by clicking button",async ()=>{
        const {getByTestId} = render(<TestAsync/>)
        const incbtn = getByTestId('Arrow-up')
        fireEvent.click(incbtn)
        await waitFor(()=>{
            expect(getByTestId("count")).toHaveTextContent("1")
        },{timeout:3000})
        

    })
    test('should be disabled',()=>{
        const {getByTestId} = render(<TestAsync/>)
        const decbtn = getByTestId("Arrow-down")
        expect(decbtn).toHaveAttribute('disabled')
        expect(decbtn).toBeDisabled()
    })
    
})
