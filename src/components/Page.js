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
      return (<button id="index" className="btn btn-info m-2" onClick={this.onBtnClick}>{year}</button>)
    })
  }

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props

    if (error) {
      return <p className="error card bg-alert">Во время загрузки фото произошла ошибка</p>
    }

    if (isFetching) {
      return <p className="card bg-warning text-center p-2 m-2">Загрузка...</p>
    } else {
      return (
        <div className="bg-dark p-2">
        <div className="d-flex justify-content-between align-items-end flex-wrap">
        {photos.map(entry => ( 
        <div key={entry.id} className="photo card mt-2 mx-1">
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
        <h3 className="card bg-secondary text-center p-2 m-2">
          {year} год [{photos.length}]
        </h3>
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