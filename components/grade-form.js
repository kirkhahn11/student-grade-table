class GradeForm {
  constructor(formElement){
    this.formElement = formElement
    this.handleSubmit.bind(this)
    this.formElement.addEventListener('submit', this.handleSubmit)
  }
  onSubmit(createGrade){
    this.createGrade = createGrade
  }
  handleSubmit(event){
    preventDefault(event)
    console.log('handleSubmit called')
  }
}
