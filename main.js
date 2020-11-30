var tableElement = document.querySelector('.table')
var headerElement = document.querySelector('.header')
var formElement = document.querySelector('form')
var noGradesElement = document.querySelector('.no-grades')
var updateElement = document.querySelector('.update-form')
var dataArray = []

var gradeForm = new GradeForm(formElement)

var pageHeader = new PageHeader(headerElement)

var gradeTable = new GradeTable(tableElement, noGradesElement)

var updateGradeForm = new UpdateGradeForm(updateElement)

var app = new App(gradeTable, pageHeader, gradeForm, updateGradeForm)

app.start()
