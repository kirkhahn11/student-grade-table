class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector('tbody')
    while(tbody.lastChild){
      tbody.removeChild(tbody.lastChild)
    }
    for(var i = 0; i < grades.length; i++){
      var tr = document.createElement('tr')
      var tdName = document.createElement('td')
      tdName.textContent = grades[i].name
      var tdCourse = document.createElement('td')
      tdCourse.textContent = grades[i].course
      var tdGrade = document.createElement('td')
      tdGrade.textContent = grades[i].grade
      tr.append(tdName, tdCourse, tdGrade)
      tbody.append(tr)
    }
  }
}
