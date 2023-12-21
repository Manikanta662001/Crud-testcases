import { render, fireEvent,screen, waitFor } from '@testing-library/react'
import Storage from './Storage'


describe('Check CRUD operations', () => {
    test('Check CRUD  Operations working', () => {
        const { getByText, getByPlaceholderText,getByTestId, queryByText } = render(<Storage />)
        //create testcase
        const newUserInput = getByPlaceholderText('Enter user name')
        fireEvent.change(newUserInput, { target: { value: 'ram' } })
        fireEvent.click(getByText('Submit'))
        expect(getByText('ram')).toBeInTheDocument();

        //update testcase
        fireEvent.click(getByTestId('edit-button1'))
        const updateUserInput = getByPlaceholderText('Enter user name')
        fireEvent.change(updateUserInput, { target: { value: 'lion' } })
        fireEvent.click(getByText('Update'))
        expect(getByText('lion')).toBeInTheDocument();

        //Delete testcase
        window.confirm = jest.fn(()=>false)
        fireEvent.click(getByTestId('delete-button1'))
        expect(getByText('lion')).toBeInTheDocument();

        window.confirm = jest.fn(()=>true)
        fireEvent.click(getByTestId('delete-button1'))
        expect(screen.queryByText('lion')).toBeNull()
        // screen.debug()


        //Reading data testcase
        const searchInput = getByPlaceholderText('search for users')
        fireEvent.change(searchInput, { target: { value: 'vamsi' } })
        expect(searchInput).toHaveValue('vamsi');
    })
    test('should show No data available if text is empty',()=>{
        render(<Storage/>)
        fireEvent.click(screen.getByRole('button',{name:'Submit'}))
        expect(screen.getByText('No data available')).toBeInTheDocument()
    })

})
