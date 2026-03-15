const Header=({title})=>{
    const onClick=()=>{
        console.log('You clicked the button!');
        alert("Clicked");
    }
return(
<header>
<h1 style={{color:'#450720', backgroundColor:'#a46576', textAlign:'center'}}>Notes Summarizer!

{title}
</h1>
<button id='btn' className='btn1' onClick={onClick}>LET'S GO</button>
</header>
)
}

export default Header