import { Component, Profiler } from "react"


const withProfiler = (WrapperComponent, id = '') =>{
    class withProfiler extends Component{
        constructor(props){
            super(props)
        }
        onRender = (...data) =>{
            console.log(`id:${id}, data:${JSON.stringify(data)}`)
        }
        render(){
            return (
                <Profiler id='app' onRender={this.onRender} > 
                    <WrapperComponent {...this.props} />
                </Profiler>
            )
        }
    }
    withProfiler.displayName = `${WrapperComponent.displayName || WrapperComponent.name || 'Component'} - withProfiler` 
    return withProfiler
}


export { withProfiler }