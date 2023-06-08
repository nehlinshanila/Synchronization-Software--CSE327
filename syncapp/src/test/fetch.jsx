// import React, { useState } from "react";
// import axios from "axios";

// const TEST = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [responseData, setResponseData] = useState([]);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const post = () => {
//     const data = { name, email };

//     axios
//       .post(
//         "http://ec2-13-53-39-206.eu-north-1.compute.amazonaws.com:9000/testAPI",
//         data
//       )
//       .then((response) => {
//         // Handle the response
//         console.log(response.data);
//       })
//       .catch((error) => {
//         // Handle errors
//         console.error("Post Error:", error);
//       });
//   };

//   // post and get
//   const gett = () => {
//     axios
//       .get(
//         "http://ec2-13-53-39-206.eu-north-1.compute.amazonaws.com:9000/testAPI"
//       )
//       .then((response) => {
//         console.log("response: ", responseData);
//       })
//       .catch((error) => {
//         console.log("GetError:", error);
//       });
//   };

//   return (
//     <div>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={handleNameChange} />
//       <br />
//       <label>Email:</label>
//       <input type="email" value={email} onChange={handleEmailChange} />
//       <br />

//       <button onClick={gett}>Get</button>
//       <button onClick={post}>Post</button>

//       <div>
//         Response Data:
//         {responseData.length === 0 ? (
//           <p>no data</p>
//         ) : (
//           responseData.map((data) => {
//             return (
//               <div key={data.id}>
//                 <p>{data.name}</p>
//                 <p>{data.email}</p>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default TEST;

import { useState } from "react";
import axios from "axios";

const TestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePostRequest = () => {
    const data = { name, email };

    axios
      // .post("http://localhost:9000/testAPI", data)
      .post(
        "http://ec2-13-53-39-206.eu-north-1.compute.amazonaws.com:9000/testAPI",
        data
      )
      .then((response) => {
        console.log(response.data); // Optional: Log the response data
      })
      .catch((error) => {
        console.error("Post Error:", error);
      });
  };

  const handleGetRequest = () => {
    axios
      .get(
        "http://ec2-13-53-39-206.eu-north-1.compute.amazonaws.com:9000/testAPI"
      )
      .then((response) => {
        setResponseData(response.data);
        console.log("Response:", response.data); // Log the response data
      })
      .catch((error) => {
        console.error("GetError:", error);
      });
  };

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <br />
      <button onClick={handlePostRequest}>Send POST Request</button>
      <br />
      <button onClick={handleGetRequest}>Send GET Request</button>
      <br />
      <div>
        Response Data:
        {responseData.length === 0 ? (
          <p>no data</p>
        ) : (
          responseData.map((data) => {
            return (
              <div key={data.id}>
                <p>{data.name}</p>
                <p>{data.email}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TestForm;
