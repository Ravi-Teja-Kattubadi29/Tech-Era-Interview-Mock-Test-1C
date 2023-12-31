import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styledComponents'

const LoaderComponent = () => (
  <LoaderContainer data-testid="loader">
    <Loader height={50} width={50} type="ThreeDots" color="#4656a1" />
  </LoaderContainer>
)

export default LoaderComponent
