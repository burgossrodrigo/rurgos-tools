import { useContext } from 'react'
import { AppContext } from '../../state/Context'
import { getUniPrice, getCakePrice, getMDexPrice } from '../../constants'



const Price = () => {

    const { state, dispatch } = useContext(AppContext);
   
    return(<>
    
        {state.dex === 'uni'
        
        ?

        getUniPrice

        :

        state.dex === 'cake'

        ?

        getCakePrice

        :

        getMDexPrice

        }
    
    </>)
    
/*    

    if(state.dex === "uni"){

        return (<>{getUniPrice}</>)

    }else if(state.dex === "cake"){

        return (<>{getCakePrice}</>)

    }else if(state.dex === "mdex"){

        return (<>{getMDexPrice}</>)

    }

*/    


    
} 

export default Price
