import { useState, useEffect, React } from 'react'
import { Link } from 'react-router-dom';
import BookCarousel from './Carousel'

export default function Content({ category }) {

    //Tässä on kirjat, jotka menee book carouseliin. Ne on tässä vielä ja jos aika riittää tehdään muuttujille niin, että ylläpitäjänä voit valita kuukauden kirjat.
    const book1 = "Jannen kirja";
    const book2 = "Terror of London";
    const book3 = "Maamme Kauneus";
    const book4 = "Jalkaväen Kauhein Hetki";
    const selected = "kuukaudenkirjat.php?book1=" + book1 + "&book2=" + book2 + "&book3=" + book3 + "&book4=" + book4;
    const newbooks = "uutuusKirjat.php";
    const URL = 'http://localhost/kirjakauppa/navKategoriat.php/';
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(
                (result) => {
                    setCategories(result);
                    // setIsLoaded(true);
                }, (error) => {
                    // setError(error);
                    // setIsLoaded(false);
                }
            )
    }, [category])

    return (
        <div className="row">
            <div>
                <div className="row py-5 justify-content-center">
                    <div className="col-md-8 col-sm-8 mx-5 mb-5 p-5 customBorder">
                        <h1 className="pb-3">Tervetuloa</h1>
                        <p>Ruotsalainen kirjakauppa on vuonna 2021 perustettu kirjakauppa. Valikoimamme on laaja, ja kirjoja löytyykin sivuiltamme useista eri kategorioista.</p>
                        <p> Etsi valikoimastamme lempikirjasi ja nauti lukuhetkistä!</p>
                    </div>
                </div>

                <div className="row pb-5 justify-content-center">
                    <div className="row">
                        <h1 className="pb-4 col-12 text-center">Kategoriat</h1>
                    </div>
                    <div className="row justify-content-center">
                        {categories.map(category => (
                            <Link key={category.kategoriaNro} className="link col-sm-3 m-2 btn categoryButton d-flex align-items-center" to={{
                                pathname: '/AllBooks',
                                state: {
                                    id: category.kategoriaNro,
                                    name: category.kategoria
                                }
                            }}>{category.kategoria}</Link>
                        ))}
                    </div>
                </div>
                <h3>Kuukauden kirjat tms</h3>
                <div className="row carouselBorder">
                    <BookCarousel bookdata={selected} />
                </div>
                <h3>Uutuudet</h3>
                <div className="row carouslBorder">
                    <BookCarousel bookdata={newbooks} />
                </div>
            </div>
        </div>
    )
}
