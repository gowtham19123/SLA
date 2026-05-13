import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ pagetitle ,childern,footerNote}){
    return (
        <div>
        <Header title={pagetitle}/>

        <main > <p> {childern} </p></main>
        <Footer credits={footerNote}/>
        <h1> Welcome to my site</h1>
       </div>

    );
}