import React from "react";

const Input = ({ label, type = "text", placeholder, value, onChange, className='' }) => {
  return (
    <>
        <div className="flex flex-col items-start w-full ">
            <label className="label">
                <span className="label-text font-medium">{label}</span>
            </label>
            <input 
            className={`input input-md input-bordered w-full rounded-full ${className}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}>
            </input>
        </div>
    </>
  );
};

export default Input;
