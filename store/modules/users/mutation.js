export default {
    SET_USER_DETAILS (state, data) {
        console.log(data, 'data')
        const { title,fname,lname,gender,email,dateRegistered,ageRegistered,phone,cell,dateDob,ageDob } = data
        state.users.name.first= fname
        state.users.name.last = lname
        state.users.gender = gender
        state.users.email = email
        state.users.registered.date = dateRegistered
        state.users.registered.age = ageRegistered
        state.users.phone = phone
        state.users.cell = cell
        state.users.dob.date = dateDob
        state.users.dob.age = ageDob
      }
}