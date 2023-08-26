import './index.css'

const TabItem = props => {
  const {tab, onClickTabItem, isActive} = props
  const {tabId, displayText} = tab

  const onClickTabButton = () => {
    onClickTabItem(tabId)
  }

  const tabStyles = isActive ? 'on-click-tabStyles' : ''

  return (
    <li className="list-style">
      <button
        type="button"
        className={`tab-btn ${tabStyles}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
