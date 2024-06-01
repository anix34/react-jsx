// creating a component as App that renders a div with instances of the other two components.
function App() { 
    return(
        <div>
            <FirstComponent/>
            <NamedComponent name="John"/>
        </div>
    );
};


    