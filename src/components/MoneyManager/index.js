import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  moneySpentTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  amountSelected = event => {
    this.setState({amountInput: event.target.value})
  }

  optionSelected = event => {
    this.setState({optionId: event.target.value})
  }

  addButtonClicked = event => {
    event.preventDefault()

    let num

    const {titleInput, amountInput, optionId} = this.state

    if (typeof parseInt(amountInput) === 'number') {
      num = amountInput
    } else {
      num = 0
    }

    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption

    const spendDetails = {
      id: v4(),
      title: titleInput,
      amount: parseInt(num),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, spendDetails],
      optionId: transactionTypeOptions[0].optionId,
      amountInput: '',
      titleInput: '',
    }))
  }

  deleteClicked = id => {
    const {transactionsList} = this.state

    const newList = transactionsList.filter(
      eachDetails => eachDetails.id !== id,
    )

    this.setState({transactionsList: newList})
  }

  getExpense = () => {
    const {transactionsList} = this.state

    let totalExpenses = 0

    transactionsList.forEach(eachTrans => {
      if (
        eachTrans.type.toLowerCase() ===
        transactionTypeOptions[1].displayText.toLowerCase()
      ) {
        totalExpenses += eachTrans.amount
      }
    })

    return totalExpenses
  }

  getIncome = () => {
    const {transactionsList} = this.state

    let totalIncome = 0
    transactionsList.forEach(eachTrans => {
      if (
        eachTrans.type.toLowerCase() ===
        transactionTypeOptions[0].displayText.toLowerCase()
      ) {
        totalIncome += eachTrans.amount
      }
    })

    return totalIncome
  }

  getBalance = () => {
    const {transactionsList} = this.state

    let income = 0
    let balance = 0
    let expense = 0

    transactionsList.forEach(eachTrans => {
      if (
        eachTrans.type.toLowerCase() ===
        transactionTypeOptions[0].displayText.toLowerCase()
      ) {
        income += eachTrans.amount
      } else {
        expense += eachTrans.amount
      }
    })

    balance = income - expense

    return balance
  }

  render() {
    const {titleInput, amountInput, transactionsList} = this.state

    const {optionId} = this.state

    const expensesDetails = this.getExpense()

    const incomeDetails = this.getIncome()

    const balanceDetails = this.getBalance()

    return (
      <div className="bgcont">
        <div className="card1">
          <h1 className="Richard">Hi, User</h1>
          <p className="Welcome">
            Welcome back to your
            <span className="MoneyManager"> Money Manager</span>
          </p>
        </div>
        <div className="unordered">
          <MoneyDetails
            incomeAmount={incomeDetails}
            expensesAmount={expensesDetails}
            balanceAmount={balanceDetails}
          />
        </div>
        <div className="last-cont">
          <div className="formCont">
            <h1 className="trans">Add Transaction</h1>
            <form onSubmit={this.addButtonClicked}>
              <label className="forLabel" htmlFor="Title">
                TITLE
              </label>
              <br />
              <input
                placeholder="TITLE"
                id="Title"
                value={titleInput}
                onChange={this.moneySpentTitle}
                type="text"
              />
              <br />
              <label className="forLabel" htmlFor="AMOUNT">
                AMOUNT
              </label>
              <br />
              <input
                placeholder="AMOUNT"
                id="AMOUNT"
                value={amountInput}
                onChange={this.amountSelected}
                type="text"
              />

              <br />
              <label className="forLabel" htmlFor="Type">
                TYPE
              </label>
              <br />
              <select id="Type" value={optionId} onChange={this.optionSelected}>
                {transactionTypeOptions.map(eachTrans => (
                  <option
                    value={eachTrans.optionId}
                    className="option"
                    key={eachTrans.optionId}
                  >
                    {eachTrans.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="historyCont">
            <h1 className="histName">History</h1>
            <ul className="historyStyles">
              <li className="hisLiEl">
                <p className="histTitle">Title</p>
                <p className="histTitle">Amount</p>
                <p className="histTitle">Type</p>
              </li>
              {transactionsList.map(eachTransaction => (
                <TransactionItem
                  deleteClicked={this.deleteClicked}
                  key={eachTransaction.id}
                  moneySpentDetails={eachTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
