

const Checkbox = ({text, id, formData, onChange, value }) => {
    return (
        <div className="form-check">
            <input className="form-check-input" onChange={onChange} checked={formData.areas.includes(value)} value={value} type="checkbox" id={id}></input>
            <label className="form-check-label" htmlFor={id}>{text}</label>
        </div>
    );
};

export default Checkbox;