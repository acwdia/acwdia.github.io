---
title: HTML Tables
---

# HTML Tables

<div className="video">
  <div className="video-container">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/8Tx0rv2nZuA?rel=0&amp;amp;controls=1&amp;amp;modestbranding=1&amp;amp;start=undefined" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
  </div>
  <p>
    <small> This YouTube video was created by <a href="https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ">Steve Griffith</a>. </small>
  </p>
</div> 

Tables are useful for displaying data, like a schedule, timetable or spreadsheet. Tabular data can be a simple or complex set of organized content. 

At one point, it was common practice to use HTML tables for layout. The majority of email clients still rely on tables for layout. HTML and CSS have progressed a long way since then and it is highly discouraged to use [HTML tables](http://accessibility.psu.edu/tableshtml/) for anything other than tabular data now.

The tags used in tables include:
- `<table></table>` - the table container
- `<caption></caption>` - the label/description for a table
- `<thead></thead>` - the header area of the table
- `<tbody></tbody>` - the body of the table
- `<tr></tr>` - table row
- `<th></th>` - table heading cell
- `<td></td>` - table data cell (most common tag)

## Table container
To add a table to the page we start with the `<table></table>` tag, all the data to be displayed as part of the table is added inside the opening `<table>` and closing `</table>` tags.
```html
<table>
  <!-- All the table data added here in proper tags -->
</table>
```

## Table caption

Every table can have a caption, which summarizes the data in the table. The caption can be added to the table by using the `<caption></caption>` paired tag.

```html
<table>
  <caption>Student Information</caption>
</table>
```
<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Table - Table caption" src="https://codepen.io/IMD/embed/gOZwEVp?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/gOZwEVp">
  HTML Table - Table caption</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Table header
The header of the table is used to add a heading row for the table columns. This is where we add labels for the data being displayed. Using the `<thead></thead>` tag

## Table Rows
We add rows of data to the table using the `<tr></tr>` tag for each row. Starting from the first row added inside the `<thead></thead>`

## Table heading cell
The table heading cell tag `<th></th>` defines the heading cell. We add the heading cells inside the table rows.

```html
<table>
  <caption>Student Information</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Section</th>
      <th>Student Number</th>
    </tr>
  </thead>
</table>
```

<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Table - Table header" src="https://codepen.io/IMD/embed/XWojGvY?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/XWojGvY">
  HTML Table - Table header</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> #### NOTE
> Some styling was added to the table cells to make them visually stand out. 

## Table body
The data being displayed under each heading is added inside the table body tag `<tbody></tbody>`. Each row of data is added in its own table row tag `<tr></tr>`

## Table data cell
The `<td></td>` tag represents the data cell in the table. the table data cells are added inside the table row tags for each piece of data.

```html
<table>
  <caption>Student Information</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Section</th>
      <th>Student Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>Level 1</td>
      <td>010</td>
      <td>040123456</td>
    </tr>
  </tbody>
</table>
```
<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Table - Table body" src="https://codepen.io/IMD/embed/oNJzVKO?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/oNJzVKO">
  HTML Table - Table body</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> #### NOTE
> Some styling was added to the table cells to make them visually stand out. 

Now if we have another student's information that will be another row of data to be added in the body of the table.
```html
<table>
  <caption>Student Information</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Section</th>
      <th>Student Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>Level 1</td>
      <td>010</td>
      <td>040123456</td>
    </tr>
    <tr>
      <td>Fran</td>
      <td>Level 1</td>
      <td>020</td>
      <td>040234567</td>
    </tr>
  </tbody>
</table>
```
<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Table - Multiple rows" src="https://codepen.io/IMD/embed/wvRzZwz?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/wvRzZwz">
  HTML Table - Multiple rows</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> #### NOTE
> Some styling was added to the table cells to make them visually stand out. 

## Merging cells
We can merge the adjacent cells in columns or rows by controlling the number of columns and rows each table data cell in the table takes up using the `colspan` and `rowspan` attributes.

```html
<table>
  <thead>
    <tr>
      <th rowspan="2">Name</th>
      <th colspan="2">Scores</th>
    </tr>
    <tr>
      <th>Maths</th>
      <th>English</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>10/10</td>
      <td>9/10</td>
    </tr>
    <tr>
      <td>Fran</td>
      <td>8/10</td>
      <td>10/10</td>
    </tr>
  </tbody>
</table>
```
<iframe height="300" style={{width: '100%'}} scrolling="no" title="HTML Table - Mergining cells" src="https://codepen.io/IMD/embed/zYyKXOL?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/IMD/pen/zYyKXOL">
  HTML Table - Mergining cells</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> #### NOTE
> Some styling was added to the table cells to make them visually stand out. 
