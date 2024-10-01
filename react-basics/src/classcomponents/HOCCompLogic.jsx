import axios from 'axios'
import React,{Component} from 'react'

const HOCCompLogic = (InputCompnent,InputData) => { //{url:"",columns:["","","",""]}
    return class  extends Component {
        constructor(props) {
            super(props) 
            this.state ={ data:[],inputData:InputData}
          }
          componentDidMount(){this.getData()}
          getData=async()=>{
              try{
                  let res = await axios.get(InputData.url)
                  this.setState({data:res.data})
              }
              catch(err){
                  console.log(err.message)
              }
          }
        render() {
            return (
                <>
                <InputCompnent data={this.state.data} inputData={this.state.inputData}/>
             </>
            )
        }
        }
    
}

export default HOCCompLogic
