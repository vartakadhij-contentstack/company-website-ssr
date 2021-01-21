import RENavigation from './RE_Navigation'
import REFooter from './RE_Footer'

const RELayout = (props) =>{
    return(
        <div>
            <RENavigation />
            {props.children}
            <REFooter />
        </div>
    )
}

export default RELayout;