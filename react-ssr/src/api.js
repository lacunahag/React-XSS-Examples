import fetch from "isomorphic-fetch";

export function fetchCircuits( ) {
    return fetch( "http://ergast.com/api/f1/2018/circuits.json" ) // replace url with http://bit.ly/react-ssr-payload
        .then( res => res.json( ) )
        .then( res => res.MRData.CircuitTable.Circuits );
}
