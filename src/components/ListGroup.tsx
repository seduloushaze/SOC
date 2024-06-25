function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  if (items.length === 0) {
    return <p>NO items found</p>;
  }

  return (
    <div>
      <h1>list</h1>
      <ul className="list-group">
        {items.map((item , index) => (
          <li
            key={item}
            onClick={() => {
              console.log(item , index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
