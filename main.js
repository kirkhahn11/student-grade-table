var tableElement = document.querySelector('.table')
var headerElement = document.querySelector('.header')

var pageHeader = new PageHeader(headerElement)

var gradeTable = new GradeTable(tableElement)

var app = new App(gradeTable, pageHeader)

app.start()
