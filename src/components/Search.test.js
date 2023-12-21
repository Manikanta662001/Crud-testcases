import { fireEvent, render, screen, } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Search from "./Search";

describe('Tests Search compo',()=>{
    test('calls the onChange callback handler',()=>{
        const onChange = jest.fn()
        render(
            <Search value={''} onchange={onChange}>
            Search :
            </Search>
        )
        fireEvent.change(screen.getByRole('textbox'),{target:{value:'hello'}})
        expect(onChange).toHaveBeenCalledTimes(1)
    })
    test('calls the onChange callback handler by userEvent',async()=>{
        const onChange = jest.fn()
        render(
            <Search value={''} onchange={onChange}>
            Search :
            </Search>
        )
        await userEvent.type(screen.getByRole('textbox'),'Javascript')
        expect(onChange).toHaveBeenCalledTimes(10)
    })

})