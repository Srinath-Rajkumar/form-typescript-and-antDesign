import "./App.css";
import EventRegistrationForm from "./Forms/EventRegistrationForm";
import SignUpForm from "./Forms/SignUpForm";

function App() {
  return (
    <>
      <div className="bg-gray-100  pt-5 pb-5">
        <EventRegistrationForm />
        <SignUpForm />
      </div>
    </>
  );
}

export default App;
