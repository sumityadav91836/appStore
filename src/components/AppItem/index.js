import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app

  return (
    <li className="app-box">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-text">{appName}</p>
    </li>
  )
}

export default AppItem
