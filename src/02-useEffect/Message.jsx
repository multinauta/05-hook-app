
export const Message = () => {

  useEffect(() => {
    console.log('message mounted');
  
    return () => {
        console.log('message Unmounted')
    }
  }, [])
  
  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  )
}
