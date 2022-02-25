import { useContext } from 'react'
import { AppContext } from '../../state/Context'
import UniPrice from './UniPrice'
import CakePrice from './CakePrice'
import MdexPrice from './MdexPrice'

const Price = () => {

        const { state } = useContext(AppContext);


    return(<>
        {state.dex === 'uni' ?
            <UniPrice /> :
         state.dex === 'cake' ?
            <CakePrice /> :
         state.dex === 'mdex' ?
            <MdexPrice /> :
            <div />    
        }
    </>)


}

export default Price