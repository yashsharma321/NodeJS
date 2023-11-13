const { useState, useEffect } = require("react");

const Mymessage = () => {
  let [allmessage, updateMessage] = useState([]);

  const getMessage = () => {
    fetch(
      "https://zany-space-chainsaw-5rgjvqqxpgqc47v-1234.app.github.dev/messagelist"
    )
      .then((response) => response.text())
      .then((messageData) => {
        if (messageData.length > 0) {
          let msgArray = messageData.split("#"); //string to array
          msgArray.pop(); //pop out the last empty element of array
          updateMessage(msgArray);
        } else {
          updateMessage([]);
        }
      });
  };

  useEffect(() => {
    getMessage();
  }, [1]);

  let [newmsg, pickMessage] = useState("");

  const save = () => {
    let url =
      "https://zany-space-chainsaw-5rgjvqqxpgqc47v-1234.app.github.dev/newmessage";
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ message: newmsg }),
    };

    fetch(url, postData)
      .then((response) => response.text())
      .then((serverRes) => {
        alert(serverRes);
        pickMessage("");
        getMessage(); // to reload the message list
      });
  };

  const delmsg = () => {
    let url =
      "https://zany-space-chainsaw-5rgjvqqxpgqc47v-1234.app.github.dev/clearall";
    fetch(url)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getMessage(); // to reload the message list
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h3> New Message </h3>
          <textarea
            className="form-control"
            onChange={(obj) => pickMessage(obj.target.value)}
            value={newmsg}
          ></textarea>
          <button className="btn btn-primary m-4" onClick={save}>
            Send Message
          </button>
        </div>

        <div className="col-lg-9">
          <h3> Message List : {allmessage.length} </h3>
          <button className="btn btn-danger m-3" onClick={delmsg}>
            Delete All Messages
          </button>
          {allmessage.map((msg, index) => {
            return <p key={index}> {msg} </p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mymessage;
