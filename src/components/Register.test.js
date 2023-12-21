import {render,fireEvent,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Register from './Register'
describe('Register component testcases',()=>{
    it('render correctly or not',()=>{
         render(<Register/>)
        let element = screen.getByRole('heading',{level:2})
        expect(element).toBeInTheDocument()
    })
    it('render correctly or not of subheading',()=>{
         render(<Register/>)
        let element = screen.getByRole('heading',{level:6} || {name:/Please enter your details below to register yourself./i})
        expect(element).toBeInTheDocument()
    })
    
    it('we need to show error message when fields or inputs are empty',async()=>{
        render(<Register/>);
        const btnelement = screen.getByRole('button',{name:/Register/i})
        await fireEvent.click(btnelement);
        // screen.debug()//to see the structure of the DOM at that moment when we trigger the click event.
        expect(screen.getByRole('alert')).toBeInTheDocument()
    })
    it('Should not show error message intially or when page loads',()=>{
        render(<Register/>);
        const alertelement = screen.queryByRole('alert')
        expect(alertelement).not.toBeInTheDocument()
    })
    it("should show success message when the registration is successful.",async  () => {
        render(<Register />);
        
        fireEvent.change(screen.getByLabelText(/Name/i,{target:{value:"mani"}}))
        fireEvent.change(screen.getByLabelText(/Email/i,{target:{value:"mani@gmail.com"}}))
        fireEvent.change(screen.getByLabelText(/Password/i,{target:{value:"Mani@66"}}))
        fireEvent.change(screen.getByTestId(/selected_skill/i,{target:{value:['React', 'JavaScript']}}))
        fireEvent.click(screen.getByLabelText(/subscribe to our newsletter/i));

        const buttonElement = screen.getByRole("button",{name:/Register/i});
        await userEvent.click(buttonElement);
        const alertElement = screen.getByRole("alert");
        expect(alertElement).toBeInTheDocument();
    });
})