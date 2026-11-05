import styles from "./Home.module.css";
import SearchBar from "../components/SearchBar";

function Home() {

    return (
        <div className={styles.container}>
            <span className={styles.title}>Google books 검색</span>
            <SearchBar />
        </div>
    );
}

export default Home;