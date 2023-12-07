import React, { useState } from "react";
import FormImage from "./components/FormImage";
import Imagena4 from "./components/Imagena4";

const App = () => {
  const [formData, setFormData] = useState([]);

  return (
    <>
      {formData.length > 0 ? (
        <Imagena4 formData={formData} />
      ) : (
        <FormImage formData={formData} setFormData={setFormData} />
      )}
      
      {/* <Imagena4 formData={formData}/> */}
    </>
  );
};

export default App;
