import './index.scss'

const Count = ({ onPlus, onMinus, count }) => {
  return (
    <div className="goods-count">
      <button className="minus" onClick={onMinus}>-</button>
      <span className="count">{count}</span>
      <button className="plus" onClick={onPlus}>+</button>
    </div>
  )
}

export default Count
