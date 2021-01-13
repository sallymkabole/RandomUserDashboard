/***
 *
 * User Module
 *
 *
 */

import getters from './getter'
import mutations from './mutation'
import actions from './action'

export default {
  state: {
    users: {
      gender: '',
      name: {
        title: '',
        first:'',
        last:''
      },
      email:"",
      registered:{
          date:"",
          age:""
      },
      phone:"",
      cell:"",
      dob: {
        age: '',
        date: ''
      }
    }
  },
  getters,
  actions,
  mutations
}