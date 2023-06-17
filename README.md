# Admission criteria

- The repository `goit-js-hw-01` has been created
- When submitting homework, there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`.
  Use `<script type="module">` to close the task code in a separate
scope and avoid identifier name conflicts.
- Variable names are clear, descriptive
- The code is formatted with Prettier

# Task 1

- Declare two variables storing the name and price of the product: `name` and `price`
- Assign the following product characteristics to the variables (immediately upon announcement)
  - name: Protective field generator
- price: 1000
- Using a template string, output information about the product to the console, you will get:
`The Protective field Generator is selected, the price per piece is 1000 credits."
- Assign a new price to the product - 2000
- Using a template string, output information about the product to the console, you will get:
`The Protective field Generator is selected, the price per piece is 2000 credits."

# Task 2

Write a script to check the quantity of goods in stock. There are `total` variables
(quantity of goods in stock) and `ordered` (units of goods in the order).

Compare these values and output the results:

- If the order contains a number exceeding the number of goods in stock, then
display the message `"There are not enough tanks in the warehouse!"`.
- In another case, display the message `"The order has been placed, the manager will contact you"`.

Check the operability of the code with different values of the `ordered` variable,
for example `20`, `80` and `130'.

```js
const total = 100;
const ordered = 50;
```

# Task 3

Write a script simulating administrator authorization in the control panel.

There is a variable `message` in which a message about the result will be written. By
when loading the page, the user is asked for a password via `prompt`:

- If you clicked `Cancel', write the line `Cancelled by the user!"
- In the opposite case, if a password is entered that matches the value
  constants `ADMIN_PASSWORD`, write the string `Welcome!" in the `message`
- Otherwise, that is, if none of the previous conditions were fulfilled,
  write the line `Access denied, invalid password!" in the `message`
- After all checks, output the value of the variable `message` to `alert`.

```js
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
```

# Task 4

There are `23580` credits on the user's account, the value is stored in a variable
`credits' (create and assign). The user decides to buy repair droids,
which cost `3000` credits apiece. The price of one droid is stored in
the `pricePerDroid` variable (create and assign).

When visiting the page, using `prompt`, you need to ask the number
of droids that the user wants to buy and save to a variable.

Write a script that:

- If the `Cancel` button was pressed in `prompt`, displays a message to the console
  `Canceled by the user!".
- Otherwise, calculates the total price of the order and stores it in a variable
  `totalPrice`.
- Checks whether the user will be able to pay for the order:
- if the amount to be paid exceeds the number of credits on the account, output to the console
    the message `Insufficient funds in the account!".
  - otherwise, it is necessary to calculate the remaining credits on the account and withdraw
    message
    `You bought [the number of] droids, there are [the number of] credits left in the account.".

# Task 5

The user can arrange the delivery of the goods to his country by specifying it when
visiting the page in `prompt'. Keep in mind, the user can enter the name of the country not
only in lowercase letters, but for example `cHiNA".

Write a script that displays a message about the cost of delivery to the specified country.
Be sure to use `switch`. Message format:
`Shipping to [the country] will cost [the price of] credits."

But delivery is not everywhere, if the specified country is not in the list, then output to
`alert` message `Delivery is not available in your country".

Below is a list of countries and shipping costs.

- China - 100 credits
- Chile - 250 credits
- Australia - 170 credits
- India - 80 credits
- Jamaica - 120 credits

# Task 6

Write a script that asks the visitor to enter a number in `prompt` until the
visitor clicks `Cancel` and each time adds the entered value to the total
amount.

- When loading the page, the user is prompted to enter a number in the `prompt`. The input
is added to the value of the `total` variable.
- The number entry operation continues until the user clicks
  the `Cancel` button in `prompt`.
- After the user has stopped typing by clicking the `Cancel` button, show
  `alert` with the string `The total sum of the numbers is [sum]".

> 🔔 Make sure that the user entered a number, and not an arbitrary one
> character set, no need. If you want, in case of incorrect input, show
> `alert` with the text `Not a number was entered, try again", while
> the result of `prompt` does not need to be added to the total amount, after which again
> the user is prompted to enter a number in prompt.

```js
let input;
let total = 0;
```
