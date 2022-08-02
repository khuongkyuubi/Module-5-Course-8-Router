import {useState, useEffect} from 'react';
import {useNavigate, Outlet, useParams} from "react-router-dom"


const cars = [
    {
        id: 1,
        name: "Audi"
    },
    {
        id: 2,
        name: "Merc"
    },
    {
        id: 3,
        name: "Honda"
    }
]


function Router2() {
    let {productId} = useParams();
    let findId = cars.find(car => car.id === +productId);
    console.log({findId})

    const [selected, setSelected] = useState(findId);

    const handleChange = event => {
        const selectedValue = cars.find(car => car?.id === +event.target.value);
        setSelected(selectedValue)
        navigate(`product/${event.target.value}`)


    }

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(selected)
    //     navigate(`product/${selected.id}`)
    // }, [selected])


    return (
        <div>
            <label htmlFor="car"><h2>Select a Category</h2></label>
            <select name="car" id="car" value={selected?.id || "default"} onChange={handleChange}>
                <option value={"default"} disabled hidden >Choose your car</option>
                {
                    cars.map(car => (
                            <option key={car.id} value={car.id}>{car.name}</option>
                        )
                    )
                }
            </select>
            <Outlet/>
        </div>
    )

}

export default Router2;