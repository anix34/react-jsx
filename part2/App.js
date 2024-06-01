//Create an App component that renders at least three tweets.

const App =() =>(
    <div>
    <Tweet
        username="John"
        user="John Doe"
        date="10/10/2018"
        message="Hello World"
    />
    <Tweet
        username="Mary"
        user="Mary Jane"
        date="10/11/2019"
        message="Hi everyone!"
    />
    <Tweet
        username="Bob"
        user="Bob Smith"
        date="10/12/2020"
        message="How are you?"
    />
    </div>
);