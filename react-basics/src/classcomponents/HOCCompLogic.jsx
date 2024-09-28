import axios from 'axios'
import React,{Component} from 'react'

const HOCCompLogic = (InputCompnent,InputData) => { //{url:"",columns:["","","",""]}
    return class  extends Component {
        constructor(props) {
            super(props) 
            this.state ={ data:[],inputData:{}}
          }
          componentDidMount(){this.getData()}
          getData=async()=>{
              try{
                  let res = await axios.get(InputData.url)
                  this.setState({data:res.data,inputData:this.inputData })
              }
              catch(err){
                  console.log(err.message)
              }
          }
        render() {
            // console.log(InputData.columns)
            return (
                <>
                {/* <InputCompnent data={this.state.data} inputData={this.InputData}/> */}

                <div className='container mt-5'>
            <div class="table-responsive"  >
                <table class="table table-primary" >
                    <thead>
                        <tr>
                            {InputData.columns.map((c,i)=><th key={i}>{c}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((d,i)=> //d:{userId:"",id:"",title:"",body:""}
                        <tr key={i}>
                            {InputData.columns.map((c,i)=><td key={i}>{d[c]}</td>)}
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        
    </div>
             </>
            )
        }
        }
    
}

export default HOCCompLogic
