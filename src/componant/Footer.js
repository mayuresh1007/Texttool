export default function Footer(props) {
    // const [Textdark, setTextdark] = useState({
    //     color:'black'
    // })
    return (

        <>
            <div>
                <nav className={`d-flex justify-content-center navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    {/* <a className="navbar-brand" href="/" style={{color:'white'}}>{props.title}</a> */}
                    <a className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} href="/" >{props.title}</a>
                    {/* <span className="navbar-text" style={{textAlign:"center",color:'white'}}> Copyright © 2021 | iMaXX </span> */}
                    <span className="navbar-text" style={{ textAlign: "center" }} > Copyright © 2021 | iMaXX </span>
                </nav>
            </div>
                
        </>
    )
};
