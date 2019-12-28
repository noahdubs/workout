import React from 'react'

const Select = () => {
    return (
        <div>
            <div className="form-group">
                <label >Exercise type</label>
                <select name="exerciseType" className="form-control form-box">
                    <option value="Strength">Strength</option>
                    <option value="Cardio">Cardio</option>
                </select>
            </div>
            <div className="form-group">
                <label >Muscle Group</label>
                <select name="muscleGroup" className="form-control form-box">
                    <option value="Abdominals">Abdominals</option>
                    <option value="Abductors">Abductors</option>
                    <option value="Biceps">Biceps</option>
                    <option value="Calves">Calves</option>
                    <option value="Chest">Chest</option>
                    <option value="Forearms">Forearms</option>
                    <option value="Glutes">Glutes</option>
                    <option value="Hamstrings">Hamstrings</option>
                    <option value="Lats">Lats</option>
                    <option value="Lower Back">Lower Back</option>
                    <option value="Middle Back">Middle Back</option>
                    <option value="Quadriceps">Quadriceps</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Traps">Traps</option>
                    <option value="Triceps">Triceps</option>
                </select>
            </div>
            <div className="form-group">
                <label >Equipment used</label>
                <select name="equipment" className="form-control form-box">
                    <option value="Dumbell">Dumbell</option>
                    <option value="Barbell">Barbell</option>
                    <option value="Cable">Cable</option>
                    <option value="Body-Weight">Body weight</option>
                    <option value="Machine">Machine</option>
                    <option value="None">None</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>
    )
}

export default Select 