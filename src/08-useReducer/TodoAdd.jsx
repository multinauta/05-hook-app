const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Recoletar la piedra del alma',
        done: false
    }
]



export const TodoAdd = ( { handleNewTodo } ) => {
    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2 btn-block"
                    onClick={handleNewTodo(initialState)}
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
