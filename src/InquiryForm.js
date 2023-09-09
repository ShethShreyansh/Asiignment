import { useState } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName:'',lastName:'',state:'',city:'',postalCode:''
  });

  const formFieldOnchange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <div>
      <label>First name</label>
      <br />
      <input
        type="text"
        name="firstName"
        maxLength="100"
        pattern="/^A-Z,a-z^/"
        value={formData?.firstName}
        onChange={(e) => formFieldOnchange("firstName", e.target.value)}
      />
      <br />

      <label>Last name</label>
      <br />
      <input
        type="text"
        name="lastName"
        maxLength="100"
        value={formData?.lastName}
        pattern="/^[A-Z,a-z]+^/"
        onChange={(e) => formFieldOnchange("lastName", e.target.value)}
      />
      <br />

      <label>State</label>
      <br />
      <select onChange={(e) => formFieldOnchange("state", e.target.value)}>
        <option>Gujarat</option>
        <option>Delhi</option>
        <option>Maharastra</option>
      </select>
      <br />

      <label>City</label>
      <br />
      <input
        type="text"
        name="city"
        maxLength="50"
        value={formData?.city}
        pattern="[A-Za-z]"
        onChange={(e) => formFieldOnchange("city", e.target.value)}
      />
      <br />

      <label>Postal Code</label>
      <br />
      <input
        type="number"
        name="postalCode"
        min="0"
        max="6"
        value={formData?.postalCode}
        onChange={(e) => formFieldOnchange("postalCode", e.target.value)}
      />
      <br />
      <br />

      <input
        type="submit"
        value="submit"
        onClick={() => {
          window.alert(`LastName: ${formData.lastName} firstName: ${formData.firstName} state: ${formData.state} city: ${formData.city} postalcode: ${formData.postalCode}`);
        }}
      />
    </div>
  );
};

export default InquiryForm;
