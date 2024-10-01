import React, { Component } from 'react'

export default class InputComponent extends Component {
  render() {
    // console.log(this.props)
    const { data, inputData } = this.props; // Destructure props
    return (
        <>        
        <div className="container mt-5">
          <div className="table-responsive">
            <table className="table table-primary">
              <thead>
                <tr>
                  {inputData?.columns?.map((column, index) => (
                    <th key={index} scope="col">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {inputData?.columns?.map((column, colIndex) => (
                      <td key={colIndex}>{row[column]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
    )
  }
}
