import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./SearchBar.module.css";

function SearchBar({ keyword }) {
    const navigate = useNavigate();
    const [input, setInput] = useState(keyword || "");

    const handleChange = e => setInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        const k = input.trim();
        if (!k) return;

        // 이 입력된 keyword을 가지고 /searach 주소로 이동시켜줘야 함
        // 함수(기능) 동작 중에 "이동"을 포함시키기 위해서는
        // useNavigate() 사용해줘야 되는데,
        // 얘를 구현하는 게 아니라, useNavigate()를 실행한 결과를 변수에 담아서
        // 변수를 통해 이동시켜줘야 함
        // navigate("이동시킬주소");

        // "/search" 결과 페이지에 사용자를 이동 시켜야 되는데,
        //  입력한 키워드를 쿼리스트링으로 포함시켜서 이동
        // navigate(`/search?keyword=${keyword}`); <= 이거론 부족함

        // 우리는 지금 string을 "주소"로 이동시키고 있는 상황
        // URL은 사실 "영어"와 정해진 특수문자만 가능   => 사용자가 input에 어떤 걸 칠지 모르기에 변환이 필요
        // sting을 "주소"에 표현하기 위해 변환 작업을 해주는 명령 encodeURIComponent(변환할 스트링)
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
