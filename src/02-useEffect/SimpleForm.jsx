import { useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'alvaro@email.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value= { username }
            onChange={ onInputChange }
        />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="alvaro@email.com"
            name="email"
            value= { email }
            onChange={ onInputChange }
        />
    </>
  )
}
