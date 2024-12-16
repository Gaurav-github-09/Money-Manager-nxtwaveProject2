// Write your code here

import './index.css'

const TransactionItem = props => {
  const {moneySpentDetails, deleteClicked} = props
  const {id, title, amount, type} = moneySpentDetails

  const delButtonClicked = () => {
    deleteClicked(id)
  }

  return (
    <li className="liel">
      <p className="forparaa">{title}</p>
      <p className="forparaa">{amount}</p>
      <p className="forparaa">{type}</p>
      <button onClick={delButtonClicked} data-testid="delete" type="button">
        <img
          className="icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
        />
      </button>
    </li>
  )
}

export default TransactionItem
