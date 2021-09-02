import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      shotCount:0,
      yaziNumber:0,
      turaNumber:0
    };
  }

  //Random sayı gelmesini sağlayan fonksiyon
  getRandomInt=(max)=>{
    return Math.floor(Math.random() * max);
  }
  
  
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    //this.setState({ flipping: true });
   let number= this.getRandomInt(2);
    if(number==1){
      this.setState((state,props)=>({
      side:"yazi",
      flipping:true,
      shotCount:this.state.shotCount+=1,
      yaziNumber:this.state.yaziNumber+=1
    }));
    }else{

      this.setState((state,props)=>({
        side:"tura",
        flipping:true,
        shotCount:this.state.shotCount+=1,
        turaNumber:this.state.turaNumber+=1
      }));
    }
    

    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };


  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.shotCount} </strong>
          atıştan
          <strong> {this.state.turaNumber} </strong>ü tura
          <strong> {this.state.yaziNumber}</strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
