import "./Input.scss"

const Input = ({ onChange, onClick,inputValue }) => {
    return (
        <>
            <div className="input-container">
                <input type="text" placeholder='Write task here...' className="input-container__input" onChange={onChange} value={inputValue} />
                <button className="input-container__button" onClick={onClick}>Add</button>
            </div>
        </>
    )
}

export default Input
