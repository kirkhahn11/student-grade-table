function getAverage(grades){
  var total = 0
  for(var i = 0; i < grades.length; i++){
    total = total += grades[i].grade
  }
  var avg = total / grades.length
  return avg
}

class App {
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades){
    gradeData = grades
    this.gradeTable.updateGrades()
    var gradeAverage = getAverage(grades)
    this.pageHeader.updateAverage(gradeAverage)
  }
  constructor(gradeTable, pageHeader, gradeForm, updateGradeForm) {
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
  handleCreateGradeSuccess(){
    this.getGrades()
  }
  deleteGradeFromArray(id){
    for(var i = 0; i < gradeData.length; i++){
      if(gradeData[i].id = id){
        gradeData.splice(1, i)
      }
    }
    this.gradeTable.updateGrades()
  }
  deleteGrade(id) {
    $.ajax({
      headers: {
        "X-Access-Token": "NUEI5rKm"
      },
      type: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      success: this.deleteGradeFromArray(id),
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error){
    console.error(error)
  }
  handleDeleteGradeSuccess(){
    this.getGrades()
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
  handleUpdateGradeSuccess(){
    this.getGrades()
  }
}
