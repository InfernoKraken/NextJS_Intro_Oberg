import Head from "next/head";
//import Styles from "../styles/Store.module.css";
import SearchBar from "../components/SearchBar";

export default function Store() {
    return (
        <div className="{fakestore}">
            <h1>Fake Store</h1>
            <p>Welcome to this farce of a store!</p>
            <p>What you find isn't real, but perhaps you may still want to browse.</p>
            <SearchBar></SearchBar>
        </div>
    );
};