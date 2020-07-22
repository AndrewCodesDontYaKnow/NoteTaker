var connection = require("./connection.js");

class ORM {
  constructor(connection) {
    this.connection = connection
  }
  printQuestionMarks(numberOfValuesOrColumns, type){
    const questionMarks = [];

    for (var i = 0; i < numberOfValuesOrColumns; i++) {
      if(type === 'cols'){
        questionMarks.push("??");
      } else {
        questionMarks.push("?")
      } 
    }
    return questionMarks.join(', ');
  }

  showNotes(value) {
    console.log(`orm.showtNote was fired off!`)
    // set the queryString to select all from a table
    const queryString = 'SELECT * FROM ??';
    // return the selected table data
    return this.connection.query(queryString, value)
  }

  create(table, columns, values) {
    const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (?, ?)`;
    console.log(values.title);
    console.log(values.text);
    console.log(queryString);
    return this.connection.query(queryString, [table, values.title, values.text])
  }

  delete(table, cols, value) {
    const queryString = 'DELETE FROM ?? WHERE ??=?';

    return this.connection.query(queryString, [table, cols, value])
  }
};

module.exports = new ORM(connection);