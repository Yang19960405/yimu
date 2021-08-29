import React,{useState,useReducer,userContext,useEffect} from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'
import 'antd/dist/antd.css'

export default class ClassTest extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){

    }
    componentWillUnmount(){
        
        
    }
    componentDidCatch(){
        //组件加载异常函数
    }
    shouldComponentUpdate(){
        //优化 控制组件是否更新
    }

    bibao = () =>{
        var a = 0;
        return function (){
            console.log(++a);
        }
    }

    getUrlParam(sUrl, sKey) {
        if(sKey !== null){
            if(sUrl!==null){
                let ss = sUrl.split('?');
                if(ss.length > 1){
                    let s = ss[1].split('#')[0];
                    let keyValues = s.split('&');
                    let values = [];
                    keyValues.map(item =>{
                        if(item.split('=')[0]===sKey){
                            values.push(item.split('=')[1])
                        }
                    });
                    if(values.length > 1){
                        return values;
                    }else{
                        return values.join('');
                    }
                    
                }
            }
        }else{
            return new Object();
        }
    
    }

    render(){
        return(
            <div>
                <HookTest/>
            </div>
        )
    }
}

function HookTest(){
    const [name,setName] = useState("杨恒");
    return (
        <div>
            <Button value = {name} onClick = {()=> {setName(name+"是帅哥")} }>{name}</Button>
        </div>
    )
}

ReactDOM.render(<ClassTest/>,document.getElementById("root"));