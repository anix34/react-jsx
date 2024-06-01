//Add an App component that renders at least three copies of the Person component on the page.

function App(){
    return(
        <div>
            <Person
                name="John"
                age={30}
                hobbies={["Sports", "Cooking"]}
            />
            <Person
                name="Jane"
                age={25}
                hobbies={["Reading", "Coding"]}
            />
            <Person
                name="Mary"
                age={27}
                hobbies={["Coding", "Reading"]}
            />
        </div>
    );
}