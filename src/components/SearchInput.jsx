const SearchInput = ({ search, toSearch }) => {
  return (
    <>
      <input
        type="text"
        search={search}
        placeholder="Фильтр"
        onChange={(e) => toSearch(e.target.value)}
      ></input>
    </>
  );
};

export default SearchInput;
