import NavMenu from './NavMenu';
import Footer from './Footer';

export default function Layout( {children} ) {

    return (
      <>
        <NavMenu />

        <div className="main-container">
          {children}
        </div>
        
        
        <Footer />
      </> 
    );
}