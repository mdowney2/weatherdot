export const CityCard = (props) => {
    return (
        props.cities.map(city => (
            <div className="cityBox">
                <ul>
                    <li className="cityName">{city.englishName}</li>
                    <li>{city.primaryPostalCode}</li>
                    <li>{city.administrativeArea.id}</li>
                    <li>{city.country.id}</li>
                </ul>
            </div>

        ))
    )
}