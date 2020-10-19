import React, { Component } from 'react'
import UserContainer from '../container/UserContainer'
import PageContainer from '../container/PageContainer'

class App extends Component {
  render() {
    return (
      <div className="card bg-dark m-3">
      <div className="app">
        <PageContainer />
        <UserContainer />
      </div>
      </div>
    )
  }
}

export default App