import React from 'react'
import './SeasonCheckbox.css'
const SeasonCheckbox = ({ inputs, setInput, input, setError, validate }) => {

    let estaciones = [
        { id: 1, name: ' Winter  ☃️' }, { id: 2, name: ' Summer  ☀️' }, { id: 3, name: ' Spring  🌺' },
        { id: 4, name: ' Autumn  🍁' },
    ]

    // 🍰


    function onChange(id) {

        let selected = inputs
        let find = selected.findIndex(item => item.id === id)
        if (find > -1) {
            selected.splice(find, 1)
        } else {
            // We can use find to get the item based on its id
            selected.push(estaciones.find(item => item.id === id))
        }
        setInput({
            ...input,
            season: selected
        })
        let objError = validate({ ...input, season: selected });
        setError(objError);

    }

    return (
        <>

            {/* <p>
                {inputs.map(e => { return e.name })}
            </p> */}
            <h1 className='hcheck'>Season : </h1>
            {
                estaciones.map(item => {
                    return (
                        <label className="category-item" key={item.id}>
                            <input type="checkbox" className="checkbox"
                                onChange={() => onChange(item.id)}
                                // selected={inputs.includes(item.id)}
                                checked={inputs.find(e => e.id === item.id) ? true : false}
                            ></input>

                            <span>{item.name}</span>
                        </label>
                    )
                })
            }
        </>



    )
}

export default SeasonCheckbox