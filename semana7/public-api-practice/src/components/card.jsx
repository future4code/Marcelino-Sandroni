export const Card = ({card}) => {
  return (
    <div>
      <h2>{card.name}</h2>
      <p>{card.description}</p>
    </div>
  )
}