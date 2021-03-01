const setDateRange = ( value)  => {

  const dateOfBirth = new Date()

    let yourDate
    // if(range === 'min'){
      yourDate = new Date(dateOfBirth.getFullYear()-value, dateOfBirth.getMonth(), dateOfBirth.getDate())
    // }else {
    // 	yourDate = new Date(dateOfBirth.getFullYear()+value, dateOfBirth.getMonth(), dateOfBirth.getDate())
    // }

    const offset = yourDate.getTimezoneOffset()

    const d = new Date(yourDate.getTime() - (offset*60*1000)).toISOString().split('T')[0]

    return d
}


export const maxDate  = setDateRange(18)

export const minDate  = setDateRange(80)
