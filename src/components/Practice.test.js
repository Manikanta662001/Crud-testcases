import { getByText, render, screen } from "@testing-library/react";
import Practice from "./Practice";

describe('Tests for practice',()=>{
    test("Practicing", () => {
        render(<Practice />);
        // Without screen, you need to provide a container:
        // const container = document.querySelector('#app')
        // const inputNode2 = getByLabelText(container, 'Username')

        // Matching a string:
        screen.getByText("Hello World"); // full string match
        screen.getByText("llo Worl", { exact: false }); // substring match
        screen.getByText("Hello World", { exact: true }); // ignore case
    
        // Matching a regex:
        screen.getByText(/World/); // substring match
        screen.getByText(/hello world/i);
    
        // Matching with a custom function:
        screen.getByText((content, element) => content.startsWith('Hello'))
    
        // Without screen, you need to provide a container:
        const container = document.querySelector('#hai')
        const nodediv = getByText(container, 'Hello World')
        //to get the btn by role which is hidden
        const btns = screen.getAllByRole('button')
        //using selected
        const btn = screen.getByRole('tab', { selected: true })
        // console.log(btns)
        //by busy
        // const ele=getByRole('alert', { busy: false })
        //if we provide role that is not present it will show all possible roles
        // screen.getByRole('')
    
        // getByDisplayValue
    
        const namevalue = screen.getByDisplayValue('Mani')
        const textareavalue = screen.getByDisplayValue('Hello World')
    
        const checkboxselected = screen.getByDisplayValue('Alaska')
        const incrediblesPosterImg2  = screen.getByAltText('Incredibles 2 Poster')
        const incrediblesPosterImgAll  = screen.getAllByAltText(/Incredibles.*? Poster/)
    
    
        //queryByText
        //if we search an element that is not present getByText throws error
        // expect(screen.getByText('Hello this is not present')).toBeNull()
        expect(screen.queryByText('Hello this is not present')).toBeNull()
    });
})
