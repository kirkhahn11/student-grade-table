class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody')

    if(!grades[0]){
      noGradesElement.classList.remove('d-none')
    }
    if(grades[0]){
      noGradesElement.classList.add('d-none')
    }
    while(tbody.lastChild){
      tbody.removeChild(tbody.lastChild)
    }
    for(var i = 0; i < grades.length; i++){
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade))
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade
  }
  renderGradeRow(data, deleteGrade){
    var tr = document.createElement('tr')
    var tdName = document.createElement('td')
    tdName.textContent = data.name
    var tdCourse = document.createElement('td')
    tdCourse.textContent = data.course
    var tdGrade = document.createElement('td')
    tdGrade.textContent = data.grade
    var tdDelete = document.createElement('td')
    var deleteButton = document.createElement('button')
    var deleteButtonText = document.createTextNode('Delete')
    deleteButton.addEventListener('click', function(){
      deleteGrade(data.id)
    })
    deleteButton.append(deleteButtonText)
    tdDelete.append(deleteButton)
    tr.append(tdName, tdCourse, tdGrade, tdDelete)
    return tr
  }
}
