import SBNavigation from './SB_Navigation'
import SBFooter from './SB_Footer'

const SBLayout = (props) =>{
    return(
        <div>
            <SBNavigation />
            {props.children}
            <SBFooter />
        </div>
    )
}

export default SBLayout;
