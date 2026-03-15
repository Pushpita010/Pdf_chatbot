import PropTypes from 'prop-types';
const Header=({title})=>{
return(
<header>
<h1 style={{color:'#450720', backgroundColor:'#a46576', textAlign:'center'}}>{title}</h1>
<button id='btn'>LET'S GO</button>

</header>
)
}
Header.defaultProps={
    title:'Notes Summarize'
}
Header.propTypes={
    title:PropTypes.string.isRequired
}
export default Header