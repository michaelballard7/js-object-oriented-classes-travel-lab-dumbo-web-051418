
class Driver {
  constructor(name,joined){
    this.name = name 
    this.joined = joined
  }
  
  
  startDate(){
    return new Date(this.joined).to_s
  }
  
  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year,1,1)
    let beginningDate = this.startDate()
 
    return endDate - startDate
  }
}