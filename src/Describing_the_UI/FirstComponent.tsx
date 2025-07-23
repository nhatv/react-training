export default function FirstComponent() {
  // you should never define a component inside a component
  // you can use define function inside a component
  function renderRow() {
    return <div>hello</div>;
  }

  // JSX rule, it can only return one JSX element
  // wrap everything inside one parent
  return (
    <div>
      <h2>First Component</h2>
      <Profile
        src="https://i.imgur.com/MK3eW3As.jpg"
        fname="John"
        lname="Doe"
        isAdmin={true}
      />
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}

// props: something passed down from parent to child component
// commonly destructed with { a, b, c }: any
function Profile({ src, fname, lname, isAdmin }: any) {
  console.log();
  return (
    <div>
      {isAdmin ? (
        <div>
          <button>Delete everything</button>
        </div>
      ) : null}
      {/* putting variables between tags */}
      <div>
        {isAdmin && (
          <div>
            <button>&& Delete everything</button>
          </div>
        )}
        Name: {lname} {fname}
      </div>
      {/* pass variable to props */}
      <img src={src} alt="Katherine Johnson" />
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
}
