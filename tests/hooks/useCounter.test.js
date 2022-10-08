import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import 'whatwg-fetch';

describe('Pruebas en el useCounter', () => { 
    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook( () => useCounter() );
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 10 );
        expect ( decrement ).toEqual( expect.any( Function ) );
        expect ( increment ).toEqual( expect.any( Function ) );
        expect ( reset ).toEqual( expect.any( Function ) );
    });

  test('debe tener el counter en 100', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter } = result.current;

        expect( counter ).toBe( 100 );
    }
    );

 });