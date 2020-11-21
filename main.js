var tableElement = document.querySelector('.table')
var headerElement = document.querySelector('.header')
var formElement = document.querySelector('form')

var gradeForm = new GradeForm(formElement)

var pageHeader = new PageHeader(headerElement)

var gradeTable = new GradeTable(tableElement)

var app = new App(gradeTable, pageHeader, gradeForm)

app.start()
