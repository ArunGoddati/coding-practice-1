import './index.css'

const Feedback = props => {
  const {emojiDetails} = props
  const {id, name, imageUrl} = emojiDetails
  return (
    <li>
      <div>
        <img src={imageUrl} />
        <p>{name}</p>
      </div>
    </li>
  )
}
export default Feedback
