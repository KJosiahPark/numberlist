Hosted [here](https://kjosiahpark.github.io/numberlist/)

# React and Material UI exercise

User stories:
* Number List 
    - User can select numbers and delete them.
    - When hover on list item, delete icon will appear.  Clicking on the icon will delete the item.
    - There is a count number size in header.
    - Clicking on add icon will display Add Number dialog.

![Number List](docs/images/NumberList.png)

When Hover List Item
![Number List Hover](docs/images/NumberListHover.png)

* Add Number Dialog
    - User can only enter 1 to 9999.
    - When no number or enter existing number, clicking on add button will show error.
    - If valid number, it will add to the list.
    - Clicking cancel will remove any error, clear the input and close dialog.

![Add Dialog](docs/images/AddNumber.png)

## Dependencies
- material-ui, react-text-mask.

## Start server

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.