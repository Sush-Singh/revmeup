import React ,{useState} from 'react';

const Home = ({handleLogOut}) =>{

    const[portfolio,setportfolio] = useState(false);
    const[blogging,setblogging] = useState(false);
    const[internship,setinternship]=useState(false);


    const portfoliopage = () =>{
        setportfolio(true)
    }
    const bloggingpage=()=>{
        setblogging(true)
    }
    const internshipage = ()=>{
        setinternship(true)
    }
    return(
        <div>
            <div className="hero">
                <nav>
                    <h2>Welcome</h2>
                    <button onClick={handleLogOut}>Logout</button>
                </nav>
            </div>
            {portfolio ? 
            (
                <div className="column">
                    <div className="card">
                        <h1>My portfolio Website</h1>

                        <p className="title">I have created this website using HTML,CSS,Bootstrap.</p>

                        <p className="title">Website Link:- <a href="https://sush-singh.github.io/sushant/">Website</a></p>

                        <p className="title">GitHub Link:- <a href="https://github.com/Sush-Singh/sushant">Link</a></p>

                        <button onClick={()=>setportfolio(false)}>Back</button>

                    </div>
                </div>
            ): blogging ?
            (
                <div className="column">
                    <div className="card">

                        <h1>My Blogging Website</h1>

                        <p className="title">I have created this website using HTML,CSS,Bootstrap,
                        express.js,node.js,ejs and MongoDB.</p>

                        <p className="title">Website Link:- <a href="http://sushantji.herokuapp.com/">Website</a></p>

                        <p className="title">GitHub Link:- <a href="https://github.com/Sush-Singh/Personal_Blogging_website/tree/master">Link</a></p>

                        <button onClick={()=>setblogging(false)}>Back</button>
                    </div>
                </div>
            ): internship ? 
            (

                <div className="column">
                    <div className="card">

                        <h1>My Internship Work at Pro Accounting Solution</h1>

                        <p className="title">I have created a customer section of this website using React and Firebase.</p>

                        <p className="title">Website Link:- <a href="https://customer-database-7c87f.web.app/auth/login">Website</a></p>
                        <button onClick={()=>setinternship(false)}>Back</button>
                    </div>
                </div>
            ):
            <div className="row">
                <div className="column">
                    <div className="card" onClick={portfoliopage}>
                        <h1>Portfolio Website</h1>
                        <p className="title">I have created a portfolio website using html , css and bootstrap.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card" onClick={bloggingpage}>
                        <h1>My Blogging Website</h1>
                        <p className="title">I have created a blogging website using express.js,node.js,MongoDb and ejs.</p>
                    </div>
                </div>
                <div className="column">
                    <div className="card" onClick={internshipage}>
                        <h1>My Internship At Pro Accounting Solution</h1>
                        <p className="title">I am doing an internship using React and Firebase.
                        I have build a customer section for the website which has various features.</p>
                    </div>
                </div>
            </div>
            
            }
            
        </div>
    )
}

export default Home;