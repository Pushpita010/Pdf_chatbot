const History=()=>{
    return(
        <div>
            {History.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                </div>
            ))}
        </div>
    )

}