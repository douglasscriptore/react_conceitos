// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'

// -------------------------------------------------------------------------------------------------
// exemplo de componente steless -------------------------------------------------------------------
// não temos acesso ao this então as props são enviadas por paramentro
// desa forma o componente fica menos verboso em forma de função
const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
)

Button.defaultProps = {
  children: 'Salvar'
}

// validação de Proptypes  obrigatórios
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
}

export default Button

// -------------------------------------------------------------------------------------------------
// exemplo de component statefull ------------------------------------------------------------------
/* export default class Button extends Component {
  // só é possivel passar o defaultProps e proTypes para dentro da class do componente
  // se instalar o plugin do babel chamado @babel/plugin-proposal-class-properties
  // definindo valores padrões pro button
  static defaultProps = {
    children: "Salvar"
  };

  // validação de Proptypes  obrigatórios
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    // toda vez que for embutir o código javascript dentro do JSX deve usar a chaves {}
    // a props.children replica tudo oque tenho dentro da class button p/ meu código de componente
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
} */
