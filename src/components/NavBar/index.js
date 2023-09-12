import {withRouter} from 'react-router-dom'

import {
  NavBarContainer,
  WebsiteLogoButton,
  TechEraLogo,
} from './styledComponents'

const NavBar = props => {
  const onClickWebsiteLogo = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <NavBarContainer>
      <WebsiteLogoButton onClick={onClickWebsiteLogo}>
        <TechEraLogo
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
          alt="website logo"
        />
      </WebsiteLogoButton>
    </NavBarContainer>
  )
}
export default withRouter(NavBar)
