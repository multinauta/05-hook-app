import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Alvaro',
    email: 'alvaro@alvaro.cl'
}


export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        { children }
    </UserContext.Provider>
  )
}
