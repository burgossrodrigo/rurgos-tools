import { Uniswap } from "./Uniswap"
import { Mdex } from "./Mdex"
import { Hokk } from "./Pancake"

    const HOKK_ADDRESS = '0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8'
    const HOKK_ADDRESS_HECO = '0x4ebf49cc2d2dd029e5cfdf868316385dffd94c6a'
    const ETH_CHAIN_ID = Uniswap.ChainId.MAINNET
    const BSC_CHAIN_ID = Hokk.ChainId.MAINNET
    const HECO_CHAIN_ID = Mdex.ChainId.MAINNET
    const HOKK = new Uniswap.Token(ETH_CHAIN_ID, HOKK_ADDRESS, 18, "HOKK", "Hokkaido Inu")
    const HOKK_BSC = new Hokk.Token(BSC_CHAIN_ID, HOKK_ADDRESS, 18, "HOKK", "Hokkaido Inu")
    const HECO_HOKK = new Mdex.Token(HECO_CHAIN_ID, HOKK_ADDRESS_HECO, 18, "Hokk", "Hokkaido Inu") 

    export const getUniPrice = async () => {



            const pair = await Uniswap.Fetcher.fetchPairData(HOKK, Uniswap.WETH[ETH_CHAIN_ID]);
            const route = new Uniswap.Route([pair], Uniswap.WETH[ETH_CHAIN_ID]);
            const priceUni = route.midPrice.toFixed(9);
            return priceUni


        

    }

    export const getCakePrice = async () => {


        const pair = await Hokk.Fetcher.fetchPairData(HOKK_BSC, Hokk.WETH[BSC_CHAIN_ID]);
        const route = new Hokk.Route([pair], Hokk.WETH[BSC_CHAIN_ID]);
        const priceUni = route.midPrice.toFixed(9);

        return Promise.resolve(priceUni)

    }
    
    export const getMDexPrice = async() => {


        const pair = await Mdex.Fetcher.fetchPairData(HECO_HOKK, Hokk.WETH[BSC_CHAIN_ID]);
        const route = new Mdex.Route([pair], Mdex.WETH[HECO_CHAIN_ID]);
        const priceUni = route.midPrice.toFixed(9);

        return priceUni

    }

    console.log(getUniPrice())
    
/*    

    if(state.dex === "uni"){

        return (<>{getUniPrice}</>)

    }else if(state.dex === "cake"){

        return (<>{getCakePrice}</>)

    }else if(state.dex === "mdex"){

        return (<>{getMDexPrice}</>)

    }

*/    


    
