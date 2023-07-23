import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormContext from "../Contexts/FormContext";

const AssessmentForm = () => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [duration, setDuration] = useState("");

  const { showForm, setShowForm } = useContext(FormContext);

  const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"];

  const handleAddSkill = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(
      selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
    );
  };
  const closeForm = () => {
    return setShowForm(!showForm);
  };

  return (
    <div className="form">
      <div className="form-header">
        <span>Create New Assessment</span>
        <CloseIcon onClick={closeForm} style={{ cursor: "pointer" }} />
      </div>
      <div className="form-card">
        <form className="form-section">
          <label className="label-section">Name of Assessment</label>
          <input
            type="text"
            value={name}
            placeholder="Type here"
            onChange={(e) => setName(e.target.value)}
            className="input-section"
          />
        </form>
        <form className="form-section">
          <label className="label-section">Purpose of the Test is</label>
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="input-section"
          >
            <option value="" style={{ color: "" }}>
              Select Purpose
            </option>
            <option value="Purpose 1">Purpose 1</option>
            <option value="Purpose 2">Purpose 2</option>
            <option value="Purpose 3">Purpose 3</option>
          </select>
        </form>
        <div className="form-section">
          <label className="label-section">Description</label>
          <select
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-section"
          >
            <option value="">Select Description</option>
            <option value="Description 1">Description 1</option>
            <option value="Description 2">Description 2</option>
            <option value="Description 3">Description 3</option>
          </select>
        </div>
        <form className="form-section">
          <label className="label-section">Skills</label>
          {selectedSkills.map((skill) => (
            <div key={skill}>
              {skill} <span onClick={() => handleRemoveSkill(skill)}>X</span>
            </div>
          ))}
          <input
            type="text"
            placeholder="Add Skill"
            className="input-section"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddSkill(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </form>
        <div className="form-section">
          <label className="label-section">Duration of Assessment</label>
          <input
            type="text"
            placeholder="HH:MM:SS"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="input-section"
          />
        </div>
      </div>
      <div className="save-btn-container">
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
};

export default AssessmentForm;