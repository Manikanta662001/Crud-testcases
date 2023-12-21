import React, { Component } from 'react'

class Storage extends Component {

  constructor(props) {
    super(props)
    this.state =
    {
      list: [],
      data: { name: '', age: 1 },
      show: false,
      togbtn: false,
      updateindex: null,
      searchInput: ''
    }
  }
  
  
  handleChange = (e) => {
    this.setState({ ...this.state, data: { ...this.state.data, [e.target.name]: e.target.value } })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {list, data, updateindex, togbtn} = this.state
    const previousList = [...list]
    const age = Number(data.age) ? Number(data.age) : 1
    if (togbtn && data.name && age) {
      previousList[updateindex] = { user: data.name, age: age }
      this.setState({ ...this.state, data: { name: '', age: 0 }, list: previousList, updateindex: null, togbtn: false })
      alert('user is Updated successfully')
    }
    else {
      if (data.name.length > 0) {
        previousList.push({ user: data.name, age: age })
        console.log(previousList, '2')
        this.setState({ ...this.state, data: { name: '', age: 0 }, list: previousList })
        alert('user is added successfully')
      }
      else {
        alert('enter a valid username')
      }
    }
  }
  
  handleUpdate = (selectedData) => {
    const index = this.state.list.findIndex(val => val.user === selectedData.user)
    console.log(index,'===')
    this.setState({ ...this.state, data: { name: selectedData.user, age: selectedData.age }, togbtn: true, updateindex: index })
  }

  handleDelete = (selectedData) => {
    const cnfrm = window.confirm('Are you sure to delete')
    if (cnfrm) {
      const deleteIndex = this.state.list.findIndex(val => val.user === selectedData.user)
      if (deleteIndex !== -1) {
        // totaldata.splice(deleteIndex, 1)
        const list = this.state.list.filter((_, idx ) => idx !== deleteIndex)
        this.setState({ ...this.state, list })
        alert('user is deleted successfully')
      }
    }

  }
  handleSearch = (e) => {
    this.setState({ ...this.state, searchInput: e.target.value.toLowerCase() })
  }

  render() {
    const tableData = this.state.list.filter((item, ind) => item.user.toLowerCase().includes(this.state.searchInput))
    return (
      <div className='storage'>
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type="text" placeholder="Enter user name" onChange={this.handleChange} value={this.state.data.name} name='name' />
          <label>Age: </label>
          <input type="number" placeholder="Enter user age" onChange={this.handleChange} value={this.state.data.age} name='age' />
          <button>{this.state.togbtn ? "Update" : 'Submit'}</button>
        </form><br /><hr />
        <input type='search' placeholder='search for users' value={this.state.searchInput} onChange={this.handleSearch} />
        <br /><hr />
        <div>
          <h3>Users list: </h3>
          {
            tableData.length > 0 ?
              (<table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>UpdateAction</th>
                    <th>DeleteAction</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.user}</td>
                      <td>{item.age}</td>
                      <td><button onClick={() => this.handleUpdate(item)} data-testid={`edit-button${index + 1}`}>EditName</button></td>
                      <td><button onClick={() => this.handleDelete(item)} data-testid={`delete-button${index + 1}`}>DeleteName</button></td>
                    </tr>
                  ))}
                </tbody>
              </table> ): (<div>No data available</div>)
          }
        </div>
      </div>
    )
  }
}
export default Storage
