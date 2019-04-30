import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

import "./style.scss";

// em forma de classe stateful
class App extends Component {
  state = {
    counter: 0
  };

  // perfeito para chamar API ou event listeners
  // componentDidMount() {}

  /* toda vez que o componente sobrer alteração ou em um componente ou em um estado
   * podendo vetar as atualizações do render()
   */
  //shouldComponentUpdate(nextProps, nextState) {
  // dessa forma o render só vai ser chamado quando o counter <= 10
  //return nextState.counter <= 10;
  //}

  // ele é executado dps do render()
  // componentDidUpdate(prevProps, prevState) {

  //}

  /* quando o componente deixa de existir
   * normalmente utilziado para limpar os listeners do componentDidMount()
   */
  // componentWillUnmount() {}

  /* Quando tenho a função handleClick() o this se posiciona para a função
   * quando utilizo ArrowFunction ela não sobrepoem o this, então o this referencia o App
   */
  handleClick = () => {
    /* o this.setState ele é assincrono ou seja demora alguns miliseconds para executar
     * todo componente no react tem uma fila para executar no estado
     */

    // this.setState({ counter: this.state.counter + 1 }, () => {
    // colocando o callback consigo pegar o valor do setState()
    //   console.log(this.state.counter);
    // });

    /* dessa forma recebendo o state ele não é o msm do componente, ele é o estado fa fila,
     * assim que ralizar a primera interação o state da fila recebe o valor
     * o padrão de fila é pouco utilizado
     * */
    // this.setState(state => ({ counter: state.counter + 1 }));
    // this.setState(state => ({ counter: state.counter + 1 }));

    //forma mais utilizada é a assincrona msm
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    // toda vez que altero o estado ou a propriedade de algo o render é executado novamente
    console.log("render");
    return (
      // o react criou a função Fragment que tem a mesma função da <div></div> quando tem + de 1 componente HTML no component, desta forma o Frament não possui estilização propria igual o DIV
      <Fragment>
        <h1>Hello Douglas</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

// metodo render do react-dom que renderiza o código dentro da <div> com id app do meu index da pasta public
render(<App />, document.getElementById("app"));
