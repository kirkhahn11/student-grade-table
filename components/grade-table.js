class GradeTable {
  constructor(tableElement, noGradesElement, updateElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
    this.updateElement = updateElement
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
      updateElement.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.value = data.name
      updateElement.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.value = data.course
      updateElement.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.value = data.grade
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
