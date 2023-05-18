import SearchBar from "./SearchBar";

export default function Header(props)
{
    return (
        <div>

            <h1>{props.title}</h1>
            <SearchBar />

        </div>
    )
}
