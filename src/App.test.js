import {render} from '@testing-library/react'
import App from './App'
describe('Testing App compo',()=>{
    it('Snapshot of App',()=>{
        const {asFragment} = render(<App/>)
        expect(asFragment(<App/>)).toMatchSnapshot()
    })
})
describe('practice testing',()=>{
    it('object assignmen',()=>{
        const data = {one:1}
        data['two'] = 2
        expect(data).toEqual({one:1,two:2})
    })
    it('null',()=>{
        const n = null
        const x=undefined;
        expect(n).toBeNull()
        expect(x).toBeUndefined()
    })
    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);
      
        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
      });
      test('adding floating point numbers', () => {
        const value = 0.1 + 0.2;
        // expect(value).toBe(0.3);           //This won't work because of rounding error
        expect(value).toBeCloseTo(0.3); // This works.
      });
      test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
      });
      test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
      });

      const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
      ];

      test('the shopping list has milk on it', () => {
        expect(shoppingList).toContain('milk')
      })
      

      const fetchData=()=>{
        return Promise.resolve('Peanut butter')
      }
      it('data fetching',async()=>{
        const data = await fetchData()
        expect(data).toBe('Peanut butter')
      })
})