import { useState, useEffect, React } from 'react'


export default function AllBooks() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);
    const URL = 'http://localhost/kirjakauppa/kaikkiKirjat.php';
    const imgURL = 'http://localhost/kirjakauppa/img/';

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(
                (result) => {
                    setBooks(result);
                    setIsLoaded(true);
                }, (error) => {
                    setError(error);
                    setIsLoaded(false);
                }
            )
    }, [])

    if (!isLoaded) {
        alert(error);
        return null;
    }


    return (
        <div className="row">
            <div className="col-12 text-center py-4">
                <h1>Kaikki kirjat</h1>
            </div>
            <div className="row d-flex justify-content-center">
                {books.map(book => (
                    <div class="card col-5 mx-2 my-3 shadow">
                        <img class="card-img-top p-5" src={imgURL + book.kuva} alt={book.kirjaNimi}></img>
                        <div class="card-body row">
                            <h5 class="card-title col-sm-8">{book.kirjaNimi}</h5>
                            <h6 class="card-subtitle col-sm-4">{book.hinta}</h6>
                            <div class="card-text cut-text col-sm-12">{book.kuvaus}</div>
                            <a href="#" class="my-3 btn addToCartBtn col-8">Ostoskoriin</a>
                        </div>
                    </div>

                    // <div className="col-5 bookDiv"><img src={imgURL + book.kuva} alt={book.kirjaNimi} className="img-fluid"></img>
                    //     {book.kirjaNimi}
                    //     <div>{book.kuvaus}</div>
                    //     <div>Sivumäärä: {book.sivuNro}</div>
                    //     <div>Julkaisupäivä: {book.julkaistu}</div>
                    //     <div><b>Hinta: {book.hinta}</b></div>
                    // </div>
                ))}
            </div>
        </div>
    )
}
