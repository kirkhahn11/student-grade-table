class UpdateGradeForm {
  constructor(updateElement){
    this.updateElement = updateElement
    this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this)
    this.updateElement.addEventListener('submit', this.handleSubmitUpdate)
    this.updateElement.addEventListener('reset', this.handleResetUpdate)
  }
  onSubmitUpdate(updateGrade){
    this.updateGrade = updateGrade
  }
  handleSubmitUpdate(event){
    event.preventDefault()
    var formData = new FormData(event.target)
    formData.append("id", dataArray[dataArray.length - 1])
    var id = formData.get("id")
    var name = formData.get("name")
    var course = formData.get("course")
    var grade = formData.get("grade")
    this.updateGrade(id, name, course, grade)
    updateElement.classList.add('d-none')
    formElement.classList.remove('d-none')
  }
  handleResetUpdate(event){
    updateElement.classList.add('d-none')
    formElement.classList.remove('d-none')
  }
}
