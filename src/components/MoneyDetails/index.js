// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount, balanceAmount} = props

  return (
    <>
      <div className="listel listBal">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
        />
        <div className="amcont">
          <p className="name">Your Balance</p>
          <p data-testid="balanceAmount" className="ampara">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="listel listINC">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
        />
        <div className="amcont">
          <p className="name">Your Income</p>
          <p data-testid="incomeAmount" className="ampara">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="listel listEXP">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
        />
        <div className="amcont">
          <p className="name">Your Expenses</p>
          <p data-testid="expensesAmount" className="ampara">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
