import './index.css'

const TabItem = props => {
  const {tabDetails, mytab, isactive} = props
  const {displayText, tabId} = tabDetails
  console.log(isactive)
  const clickLanbel = () => {
    mytab(tabId)
  }
  const myactivebutton = isactive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${myactivebutton}`}
        onClick={clickLanbel}
      >
        {' '}
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
