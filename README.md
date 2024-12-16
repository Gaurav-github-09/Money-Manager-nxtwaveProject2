In this project, i've built a **Money Manager** app 

project link - https://gk04MonMan.ccbp.tech

---------------------------------------------------------------------------------------------------------

### More details about the project:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif" alt="money manager output gif" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Completion Instructions

<details>
<summary>Functionality of the app</summary>
<br/>

The app has the following functionalities

- Initially, Balance Amount, Income Amount, and Expenses Amount is `0`
- Balance Amount will be calculated by removing the Expenses Amount from the Income Amount in the list of transactions
- Income Amount will be calculated by removing the Expenses Amount in the list of transactions
- Expenses Amount will be calculated by adding only Expenses Amount in the list of transactions
- The `MoneyManager` component is provided with `transactionTypeOptions`. It consists of a list of transaction type objects with the following properties in each object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |  optionId   |  String   |
  | displayText |  String   |

- Initially, the value of the `titleInput` is empty
- Initially, the value of the `amountInput` is empty
- Initially, the first option in the list is selected
- When a transaction is added, by providing the values in the `titleInput`, `amountInput` and `optionId` and **Add** button is clicked,

  - A new transaction is added to the transaction history list
  - `totalBalance`, `totalIncome` and `totalExpenses` will be updated accordingly

    ```
    totalBalance = totalIncome - totalExpenses
    ```

  - After updating, the values in the `titleInput`,`amountInput` and `optionId` will be updated to their initial values

- When the delete button in the transaction history is clicked,
  - The respective transaction is deleted from the transaction history list
  - `totalBalance`, `totalIncome` and `totalExpenses` will be updated accordingly

</details>






