var tableElement = document.querySelector('.table')
var header = document.querySelector('.header')

var pageHeader = new PageHeader(header)

var gradeTable = new GradeTable(tableElement)

var app = new App(gradeTable, pageHeader)

app.start()
