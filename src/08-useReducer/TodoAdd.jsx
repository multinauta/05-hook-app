import { useForm } from "../hooks"


export const TodoAdd = ( { onNewTodo } ) => {

    const { description , onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if ( description.trim().length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();


    }



    return (
        <>
            <form onSubmit={ onFormSubmit }>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
