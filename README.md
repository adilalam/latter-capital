# Letter Capital

Features include:

- First Letter Capital
- Each Letter Capital
- Slice Name
    - First Name
    - Second Name
    - Last Name
- Slice Name Capital
    - First Name capital
    - Second Name capital
    - Last Name capital

# Installation and usage

The easiest way to use it to install it.

```
npm i letter-capital
```

Then use it in your app :-

```js
const { firstCapital, eachCapital, fName, fNCapital } = require('letter-capital');

    firstCapital("md adil alam"); // -> Md adil alam
    eachCapital("md adil alam"); // -> Md Adil Alam
    fName("md adil alam"); // -> md
    fNCapital("md adil alam"); //-> Md
```