var tableElement = document.querySelector('.table')
var headerElement = document.querySelector('.header')
var formElement = document.querySelector('form')
var noGrade = document.querySelector('.no-grades')

var gradeForm = new GradeForm(formElement)

var pageHeader = new PageHeader(headerElement)

var gradeTable = new GradeTable(tableElement, noGrade)

var app = new App(gradeTable, pageHeader, gradeForm)

app.start()
