import { cleanup, fireEvent, render, screen,waitFor } from "@testing-library/react";
import Another from "./Another";
import userEvent from "@testing-library/user-event";

afterEach(cleanup)

describe('unit test for another compo',()=>{
    test('with fireEvent',async ()=>{
        render(<Another/>)
        expect(screen.queryByText(/Signed in as/)).toBeNull()
        screen.debug()
        expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
        screen.debug()
        // screen.getByRole('')
        fireEvent.change(screen.getByRole('textbox'),{target:{value:"hai"}})
        // expect(screen.getByRole('textbox')).toHaveValue('hai')
        screen.debug()
        expect(screen.getByLabelText('Search :').value).toBe('hai')
        screen.debug()
        expect(await screen.findByText(/Searches for hai/)).toBeInTheDocument()
    
    
    })
    test('with userEvent',async()=>{
        render(<Another/>)
        userEvent.type(screen.getByRole('textbox'),'Javasvript')
        expect(screen.getByRole('textbox')).toHaveValue('Javasvript')
        //we can use waitFor or await
        waitFor(()=>
                expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
            )
        expect(await screen.findByText(/Searches for Javasvript/)).toBeInTheDocument()

    })
})