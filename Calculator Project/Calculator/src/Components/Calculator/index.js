import React from "react";
import "./style.css"

export default function Calculator ({value, setValue}) {

    function handleBTN (str) {
        switch (str) {
        
            case "=":
                try {
                    setValue(eval(value).toString());     
                } catch (error) {
                    setValue("Error!!!");      
                }
                return   

            case "CE":
            case "C":
                setValue("")
                return
            
            case "DEL":
                setValue(value.slice(0,-1))
                return                

            case ".":
                if (value.slice(-1) == "." ) {
                    return
                }
                
        }
        
        if (["+", "-", "*", "/"].find((e) => {

            return str == e
        }
        ))
        

        if (value.slice(-1) != str && !/\d/.test(value.slice(-1))) {
            setValue(value.slice(0,-1) + str)
            return
        }
        else if ( value.slice(-1) == str ){
            return
        }            

        setValue(value + str)        
    }

    const btn = (label, i) => {
        
        if (label[1] != null){
            return (    
                <button key={i} className={label[1]} onClick={() => handleBTN(label[0])}>{label[0]}</button>
            )
        }
        else{
            return (    
                <button key={i} onClick={() => handleBTN(label[0])}>{label[0]}</button>
            )
        }
    }

    const buttons = [
        ["CE", null],
        ["C", null],
        ["DEL", null],
        ["/", null],
        ["7", "number"],
        ["8", "number"],
        ["9", "number"],
        ["*", null],
        ["4", "number"],
        ["5", "number"],
        ["6", "number"],
        ["-", null],
        ["1", "number"],
        ["2", "number"],
        ["3", "number"],
        ["+", null],
        ["0", "number"],
        [".", null],
        ["=", "equal-btn"]
    ]

    return (
        <div className="Calculator">
            <h1>Calculator Project</h1>
            
            <div className="calc">
                
                <h3>Calculator</h3>
                
                <p className="display"> {value} </p>

                <div className="operations">
                    {buttons.map((v, i) => btn(v, i))}
                </div>

                <p className="calc_footer">By Talismar</p>
            </div> 
                <footer>
                    Made with ReactJS
                </footer>
        </div>
    )
}