import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./SearchBar.module.css";

type Props = { keyword: string}

function SearchBar({ keyword }: Props) {
    const navigate = useNavigate();
    const [input, setInput] = useState(keyword || "");

    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => setInput(e.target.value);

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const k = input.trim();
        if (!k) return;
        navigate(`/search?keyword=${encodeURIComponent(k)}`);
    };
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} onChange={handleChange} value={input} />
            <button className={styles.button} type={"submit"}>
                검색
            </button>
        </form>
    );
}

export default SearchBar;
