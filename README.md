# React 

Description:

1. Create a new React application or use an existing one.
2. Create the **`ParentComponent`** component, which will be the parent component.
3. In the **`ParentComponent` component**:
    - Create a state **`counter`** with an initial value of 0.
    - Display the current counter value on the page.
    - Create a button **"Zoom in",** which will increase the counter value by 1 with each click.
    - Create a button **"Reset"**, which will reset the counter value back to 0.
    - Create a button **"Random value"** that will set a random value in the range from 1 to 10 inclusive as the new counter value.
    - Create a button **"Decrease"**, which will decrease the counter value by 1 each time you click, but only if the counter value is greater than 0.
4. Create a child component **`ChildComponent`** that will display a greeting with the name passed through **`props`**.
5. In the **`ParentComponent` component**:
    - Display the **`ChildComponent`** component and give it a name via **`props`**.
    - Display the current counter value next to the greeting in the **`ChildComponent`** component.
    - Update the counter value in the **`ChildComponent`** component when changing the value in the parent component **`ParentComponent`**.
6. Optional: Create an additional child component **`SiblingComponent`**, which will have its own state **`text`**. Display the current value of **`text`** on the page and a button that will change it to **“REDEV".**