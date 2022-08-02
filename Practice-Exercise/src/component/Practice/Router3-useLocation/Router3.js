import {useState, useEffect} from 'react';
import {useNavigate, Outlet, useParams, useLocation} from "react-router-dom"


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


function Router3() {
    const [selected, setSelected] = useState();
    const handleChange = event => {
        const selectedValue = cars.find(car => car?.id === +event.target.value);
        setSelected(selectedValue)
        navigate(`product`, {state: {categoryId: event.target.value}})
    }

    const navigate = useNavigate();
    return (
        <div>
            <label htmlFor="car"><h2>Select a Category</h2></label>
            <select name="car" id="car" value={selected?.id || "default"} onChange={handleChange}>
                <option value={"default"} disabled hidden>Choose your car</option>
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

export default Router3;