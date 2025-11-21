export const App = ()=> {
  return (
    <div>
      <div>
        <img src="/Aladdin.jpeg" alt="movie" width="40%" height="40%" />
      </div>
      <h2>Name: Aladdin</h2>
      <h3>Rating: 8.3</h3>
      <p>Summary: john smith act as aladdin support by an asian continent actor</p>
    </div>
  );
}

export default App;



// todo

//? Each JSX experssion must have one parent element, which means if you try to return multiple elements, React will throw an error

//? Every JSX tag needs to be closed. You can use self-closing tags for elements that don't have children, e.g. <img src="url"/>
