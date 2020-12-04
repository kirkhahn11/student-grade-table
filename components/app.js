function getAverage(){
  var total = 0
  for(var i = 0; i < gradeData.length; i++){
    total = total += parseInt(gradeData[i].grade, 10)
  }
  var avg = total / gradeData.length
  return avg.toFixed(2)
}

class App {
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    gradeData = grades
    this.gradeTable.updateGrades()
    var gradeAverage = getAverage()
    this.pageHeader.updateAverage(gradeAverage)
  }
  constructor(gradeTable, pageHeader, gradeForm, updateGradeForm) {

  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.deleteGradeSuccess = this.deleteGradeSuccess.bind(this)
    this.pageHeader = pageHeader
    this.addGradeForm = addGradeForm
    this.updateGradeForm = updateGradeForm
    this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this)
    this.handleUpdateGradeSuccess = this.handleUpdateGradeSuccess.bind(this)
    this.updateGrade = this.updateGrade.bind(this)
  }
  getGrades(){
    $.ajax({
      headers: {
        "X-Access-Token": "NUEI5rKm"
      },
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess,
    })
  }
  start(){
    this.getGrades()
    this.addGradeForm.onSubmit(this.createGrade)
    this.updateGradeForm.onSubmitUpdate(this.updateGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }
  createGrade(name, course, grade) {
    $.ajax({
      headers: {
        "X-Access-Token": "NUEI5rKm"
      },
      type: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        name: name,
        course: course,
        grade: grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.error(error)
  }
  handleCreateGradeSuccess(grades){
    gradeData.push(grades)
    var gradeAverage = getAverage()
    this.pageHeader.updateAverage(gradeAverage)
    this.gradeTable.updateGrades()
  }
  deleteGradeSuccess(id){
    for (var i = 0; i < gradeData.length; i++) {
      if (gradeData[i].id === id) {
        gradeData.splice(i, 1)
      }
    }
    var gradeAverage = getAverage()
    this.pageHeader.updateAverage(gradeAverage)
    this.gradeTable.updateGrades()
  handleCreateGradeSuccess(){
    this.getGrades()

  }
  deleteGrade(id) {
    $.ajax({
      headers: {
        "X-Access-Token": "NUEI5rKm"
      },
      type: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      success: this.deleteGradeSuccess.bind(undefined, id),
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error){
    console.error(error)
  }
  updateGrade(id, name, course, grade) {
    $.ajax({
      headers: {
        "X-Access-Token": "NUEI5rKm"
      },
      type: "PATCH",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      data: {
        name: name,
        course: course,
        grade: grade
      },
      success: this.handleUpdateGradeSuccess,
      error: this.handleUpdateGradeError
    })
  }
  handleUpdateGradeError(error){
    console.error(error)
  }
  handleUpdateGradeSuccess(grades){
    for (var i = 0; i < gradeData.length; i++) {
      if (gradeData[i].id === grades.id) {
        gradeData[i].name = grades.name
        gradeData[i].course = grades.course
        gradeData[i].grade = grades.grade
      }
    }
    var gradeAverage = getAverage()
    this.pageHeader.updateAverage(gradeAverage)
    this.gradeTable.updateGrades()
  }
}
