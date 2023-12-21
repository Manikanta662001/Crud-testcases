import {render,cleanup,fireEvent,waitFor} from '@testing-library/react'
import TestAsync from './TestAsync'

afterEach(cleanup)
describe('Tests for TestAsync',()=>{
    it("increment after 2 seconds by clicking button",async ()=>{
        const {getByTestId,getByText} = render(<TestAsync/>)
        const incbtn = getByTestId('Arrow-up')
        fireEvent.click(incbtn)
        waitFor(()=>{
            const element = screen.getByText(1)
            expect(element).toHaveTextContent(1)
            expect(element).toBeInTheDocument()
        })
        
        
    
    })
    test('should be disabled',()=>{
        const {getByTestId} = render(<TestAsync/>)
        const decbtn = getByTestId("Arrow-down")
        expect(decbtn).toHaveAttribute('disabled')
    })
    
})
