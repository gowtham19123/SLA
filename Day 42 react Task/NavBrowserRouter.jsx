import { BrowserRouter,Route,Routes, Link, useNavigate, useParams } from "react-router-dom";

const Navbar = () =>{
            return (
                <nav>
                    <Link to="/"> Home </Link> {'|'}
                    <Link to="/about">About</Link> {'|'}
                    <Link to="/users">Users</Link>
                </nav>
            );
        };


        const Home = () => <h3>Home Page </h3>
        const About = () => <h3>About PAge </h3>

        const Users = () => {

            const usersList=[ {id:1,name:'JS'},{id:2,name:'JSX'},{id:3,name:'Tailwind@3'}];

            return(
                <div>

                <h1> User Page </h1>

                <ul>
                {usersList.map(item => (<li key={item.id}><Link to={`/users/${item.id}`}>{item.name}</Link></li>) )}
                </ul>

                </div>
            );
        };

        const UserProfile = () =>{
            const {id} = useParams();
            const navigate = useNavigate();
            return(
                <div>
                    <h2> Dynamic rout / Navigate Component</h2>
                    <p> view  details using Id <strong> {id} </strong></p>
                    <button onClick={ () => navigate('/users')}> Back to user </button>
                </div>
            );

        };

export default function NavBrowserRouter(){
    return(
        <div>
          <Navbar/>
           <Routes>
              <Route path='/' element={<Home/>} /> 
              <Route path='/about' element={<About/>}/>
              <Route path='/users' element={<Users/>}/>

              <Route path='/users/:id' element={<UserProfile/>}/>


            </Routes>
            </div>
    
    );
   
}