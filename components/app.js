function getAverage(grades){
  var total = 0
  for(var i = 0; i < grades.length; i++){
    total = total += grades[i].grade
    var avg = total/grades.length
  }
  return avg
}

class App {
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)
    var gradeAverage = getAverage(grades)
    this.pageHeader.updateAverage(gradeAverage)
  }
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this)
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this)
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
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
    this.gradeForm.onSubmit(this.createGrade)
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
  handleCreateGradeSuccess(){
    this.getGrades()
  }
  deleteGrade(id) {
    console.log(id)
    $.ajax({
      headers: {
        "X-Access-Token": "NUEI5rKm"
      },
      type: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error){
    console.error(error)
  }
  handleDeleteGradeSuccess(){
    this.getGrades()
  }
}
