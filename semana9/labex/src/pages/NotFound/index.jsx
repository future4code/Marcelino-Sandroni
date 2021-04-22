import useGo from 'hooks/useGo'

const NotFound = () => {
  const go = useGo()
  return (
    <>
      <h1>Not Found</h1>
      <button onClick={go.home}>Go home</button>
    </>
  )
}

export default NotFound
