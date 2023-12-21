import React from "react";
import List from "./List";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe("List compo",()=>{
    it('it should show heading',()=>{
        render(<List/>)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
    it('add user after button click',async()=>{
        render(<List/>)
       
        expect(screen.getAllByTestId('record').length).toBe(3)
        await userEvent.click(screen.getByRole('button',{name:'Add user'}))
        expect(screen.getAllByTestId('record').length).toBe(4)

    })
    it('delete user after button click',async()=>{
        render(<List/>)
        screen.debug()
        expect(screen.getAllByTestId('record').length).toBe(3)
        await userEvent.click(screen.getByRole('button',{name:'Remove user'}))
        expect(screen.getAllByTestId('record').length).toBe(2)
    })
})