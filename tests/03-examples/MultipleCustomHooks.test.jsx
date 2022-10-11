import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import 'whatwg-fetch';

describe('Prueba en <MultipleCustomHooks />', () => { 

    test('Debe de mostrar el componente por defecto', () => {

        render( <MultipleCustomHooks />);

        expect ( screen.getByText('Loading...'))
        expect ( screen.getByText('BreakingBad Quotes'))

        const nextButton = screen.getByRole('button', { name: 'Next Quote'});
        expect ( nextButton.disabled).toBeTruthy();
       // screen.debug();

    })
 })