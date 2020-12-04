class GradeTable {
  constructor(tableElement, noGradesElement, updateElement, pageHeader) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
    this.updateElement = updateElement
    this.pageHeader = pageHeader
  }
  updateGrades() {
    var tbody = this.tableElement.querySelector('tbody')

    if(!gradeData[0]){
      noGradesElement.classList.remove('d-none')
    }
    if(gradeData[0]){
      noGradesElement.classList.add('d-none')
    }
    while(tbody.lastChild){
      tbody.removeChild(tbody.lastChild)
    }
    for(var i = 0; i < gradeData.length; i++){
      tbody.append(this.renderGradeRow(gradeData[i], this.deleteGrade))
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade
  }
  onUpdateClick(updateGrade){
    this.updateGrade = updateGrade
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
    deleteButton.classList.add('btn-light' , 'btn-outline-danger', 'btn-sm', 'm-1')
    var deleteButtonText = document.createTextNode('Delete')
    deleteButton.addEventListener('click', function(){
      deleteGrade(data.id)
    })
    deleteButton.append(deleteButtonText)
    var updateButton = document.createElement('button')
    updateButton.classList.add('btn-light', 'btn-outline-info', 'btn-sm', 'm-1')
    var updateButtonText = document.createTextNode('Update')
    updateButton.addEventListener('click', function() {
      updateFormAppear(),
      updateElement.elements.name.value = data.name
      updateElement.elements.course.value = data.course
      updateElement.elements.grade.value = data.grade
      var dataId = data.id
      dataArray.push(dataId)
    })
    updateButton.append(updateButtonText)
    tdDelete.append(deleteButton, updateButton)
    tr.append(tdName, tdCourse, tdGrade, tdDelete)
    return tr
  }
}

function updateFormAppear() {
  updateElement.classList.remove("d-none")
  formElement.classList.add('d-none')
}
