import Header from './Header';
import NavMenu from './NavMenu';
import Footer from './Footer';

export default function Layout( {children} ) {

    return (
      <>
        <Header />
        <NavMenu />
        {children}
        <Footer />
      </>
    );
}