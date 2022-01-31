import React, {useState, useRef} from 'react'

const LocationForm = () => {

    const form = useRef(null)

    const submit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (form.current == null) return

        const currentForm = form.current as HTMLFormElement

        const object = {
            // @ts-ignore
            name: currentForm.elements.namedItem("cityName")?.value,
            // @ts-ignore
            isHeart: currentForm.elements.namedItem("ROBase")?.checked,
            resourceNeed: {
                // @ts-ignore
                resource: currentForm.elements.namedItem("resourceNeed")?.value,
                // @ts-ignore
                amount: currentForm.elements.namedItem("RNInput")?.value
            },
            resourceOnLocation: {
                // @ts-ignore
                resource: currentForm.elements.namedItem("resourceOnLocation")?.value,
                // @ts-ignore
                amount: currentForm.elements.namedItem("ROLInput")?.value
            },
            // @ts-ignore
            resourceCapacity: currentForm.elements.namedItem("resourceCapacity")?.value
        }
    }
    
    return (
        <form ref={form}>
            <div className="textInput">
                <label htmlFor="input">City name:</label>
                <input name="cityName" type="text" required />
            </div>
            <div className="textInput">
                <label htmlFor="input">Country name:</label>
                <input name="countryName" type="text" required />
            </div>
            <div className="BaseCheck">
                <label htmlFor="input">Resource/operation base:</label>
                <input name="ROBase" type="checkbox" required />
            </div>
            <div className="RNInput">
                <label htmlFor="input">Resource need:</label>
                <div>
                    <select name="resourceNeed">
                        <option value="Default"> </option>
                        <option value="food">Food</option>
                        <option value="workers">Workers</option>
                        <option value="water">Water</option>
                    </select>
                    <input name="RNInput" type="number" />
                </div>
            </div>
            <div className="ROLInput">
                <label htmlFor="input">Resources on location:</label>
                <div>
                    <select name="resourceOnLocation">
                        <option value="Default"> </option>
                        <option value="food">Food</option>
                        <option value="workers">Workers</option>
                        <option value="water">Water</option>
                    </select>
                    <input name="ROLInput" type="number" />
                </div>
            </div>
            <div className="numberInput">
                <label htmlFor="input">Resource capacity on location:</label>
                <input name="resourceCapacity" type="number" />
            </div>
            <input type="submit" onClick={submit} />
        </form>
    )
}

export default LocationForm