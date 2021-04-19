import { React } from 'react'

export default function Rating({ rated }) {
    return (
        <>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input className="hidden"
                            type="radio"
                            name="rated"
                            value={ratingValue} />
                        <i className="fa fa-star fa-2x"
                        // jos tähden arvo pienempi tai yhtä suuri kuin rated, tähti on keltainen
                            id={ratingValue <= rated ? "starHover" : "starDefault"}>
                        </i>
                    </label>
                )
            })}
        </>
    )
}
