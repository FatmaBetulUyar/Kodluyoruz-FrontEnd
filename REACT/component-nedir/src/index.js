//React'ın çalışmaya başladığı dosya şeklinde düşünebiliriz.

import React from 'react'
import  ReactDOM  from 'react-dom'

//component: bir fonk yada bir classtan oluşan js kodu
//jsx kullnarak sayfamızda html kodları göstermemizi sağlar

// function App(){
//     return <h1>Benim Adım Bet</h1>
// }

class App2 extends React.Component{
    render () {
        return <h1>Benim adım bet</h1>
    }
}

ReactDOM.render(
    <App2/>, //önce neyi göstereceğimi
    document.getElementById('root')//nerede göstereceğim
    //documen.querySelector('#root')

);