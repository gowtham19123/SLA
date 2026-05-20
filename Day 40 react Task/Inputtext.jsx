import { useState } from "react";

export default function TextInput({ label, type = "text", value, onChange }) {
    return (
        <div>
            <label> {label} </label>
            <input type={type} value={value} onChange={onChange} />
        </div>
    );
}