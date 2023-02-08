
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import FilterList from '../../Components/FilterList/FilterList';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function HomePage() {
    return (
        <div>
            <Header />
            <FilterList />
            <MDBContainer>
                <MDBRow className='mb-3'>
                    <MDBCol size='4'>
                        <Card />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <Footer />


        </div>
    );
}

export default HomePage;