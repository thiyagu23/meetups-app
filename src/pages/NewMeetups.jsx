import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/NewMeetupForm/NewMeetupForm";

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://memories-app-fc4bf-default-rtdb.firebaseio.com/memories.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
