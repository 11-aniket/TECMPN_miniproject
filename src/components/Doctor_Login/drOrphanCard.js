import React, { Component } from 'react';

class drOrphanCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }

  handleEdit = () => {
    this.setState({
      edit: true,
    });
  };

  render() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-medium text-xl mb-4">Name: {this.props.name}</h3>
        <p className="text-sm font-light mb-2">Age: {this.props.age}</p>
        <p className="text-sm font-light mb-2">Organization: {this.props.organization}</p>
        <p className="text-sm font-light mb-2">Allergies: {this.props.allergies}</p>
        <p className="text-sm font-light mb-2">Previous Diagnosis: {this.props.prev_diagnosis}</p>
        <p className="text-sm font-light mb-2">Previous Treatment: {this.props.prev_treatment}</p>
        <p className="text-sm font-light mb-2">Previous Disfigurements: {this.props.prev_disfigurements}</p>
        <div className="mt-6 text-center">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-full"
            onClick={this.handleEdit} >  Edit </button>
        </div>
      </div>
    );
  }
}

export default drOrphanCard;
