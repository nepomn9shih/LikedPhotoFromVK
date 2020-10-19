import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year) // setYear -> getPhotos
  }

  addYearList = (end, start) => {
    const yearList = []
    
    for (let i=end; i >= start; i--) {
      yearList.push(i)
    }
    
    return yearList.map((year, index) => {
      return (<button id="index" className="btn btn-info m-2 shadow" onClick={this.onBtnClick}>{year}</button>)
    })
  }

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props

    if (error) {
      return <p className="error shadow card bg-alert">Во время загрузки фото произошла ошибка</p>
    }

    if (isFetching) {
      return <p className="card shadow bg-warning text-center p-2 m-2">Загрузка...</p>
    } else {
      return (
        <div className="bg-dark p-2">
        <div className="d-flex justify-content-between align-items-end flex-wrap">
        {photos.map(entry => ( 
        <div key={entry.id} className="photo shadow card mt-2 mx-1">
          <p>
            <img className="p-2" src={entry.sizes[0].url} alt="" />
          </p>
          <p className="text-center">{entry.likes.count} ❤</p>
        </div>
      ))}
      </div>
      </div>
      )
    }
  }

  render() {
    const { year, photos} = this.props // вытащили isFetching
    return (
      <div className="ib page bg-dark">
        <p className="d-flex flex-wrap">
        { this.addYearList(2020, 2008) }
        </p>
        <div className="card shadow bg-secondary p-2 m-2">
          <div className="d-flex justify-content-center">
            <span><h3>{year} год</h3></span><span className="badge badge-light ml-2"><h3>{photos.length}</h3></span>
          </div>
        </div>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired, // setYear -> getPhotos
  // добавили новое свойство - isFetching, причем в propTypes нет boolean, есть bool
  isFetching: PropTypes.bool.isRequired,
}