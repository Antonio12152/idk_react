import '../CSS/App.css';

const Main = (props) => {
    return (
        <div className="main">
            <header className="header">
                <ul className='header__ul'>
                    <li>
                        <a href='/'>Post</a>
                    </li>
                    <li>
                        <a href='/postimg'>Post+Img</a>
                    </li>
                </ul>
            </header>
            <div >
                {props.children}
            </div>
        </div>
    )
}

export default Main