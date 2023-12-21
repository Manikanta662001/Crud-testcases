import {render,cleanup,fireEvent} from '@testing-library/react'
import TestElements from './TestElements'

afterEach(cleanup)
describe('Tests for TestElements',()=>{
    
it("Should be equal to 0:",()=>{
    const {getByTestId} = render(<TestElements/>)
    expect(getByTestId('count')).toHaveTextContent(0)
})


it("Increment by 1 if click button",()=>{
    const {getByText,getByTestId} = render(<TestElements/>)
    fireEvent.click(getByText('Increment'))
    expect(getByTestId('count')).toHaveTextContent(1)
})

it('incrementbtn Should be enabled :',()=>{
    const {getByText} = render(<TestElements/>)
    const incrementbtn = getByText('Increment')
    expect(incrementbtn).not.toHaveAttribute('disabled')
})
it('decrementbtn Should be disabled :',()=>{
    const {getByText} = render(<TestElements/>)
    const decrementbtn = getByText('Decrement')
    // expect(decrementbtn).toHaveAttribute('disabled')
    expect(decrementbtn).toBeDisabled()
})
})