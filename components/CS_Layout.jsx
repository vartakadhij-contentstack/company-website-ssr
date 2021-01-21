import CSNavigation from './CS_Navigation'
import CSFooter from './CS_Footer'

const CSLayout = (props) =>{
    return(
        <div>
            <CSNavigation />
            {props.children}
            <CSFooter />
        </div>
    )
}

export default CSLayout;